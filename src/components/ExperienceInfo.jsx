import { useEffect, useState } from "react";

function ExperienceInfo() {
  const [listItems, setListItems] = useState({
    arrays: [
      [
        "Engineered robust database structures, tables, stored procedures, and functions using SQL.",
        "Developed RESTful APIs with .NET Core to ensure secure HTTP request routing between client and server.",
        "Created domain and data-annotated request models in ASP.NET for reliable binding and universal type-accuracy.",
        "Implemented third party component libraries such as Formik, Yup, and React Google Maps to create powerful User Interfaces with type-safe input capabilities.",
        "Contributed to Agile environment through daily stand-ups, code reviews, and code talks.",
        "Collaborated on production efforts through Git and GitHub version control services, merge conflict resolution, and clear communication with senior developers.",
        "Provided meaningful feedback on Pull Requests to improve upon adherence to development standards and industry best practices.",
        "Produced roles-based user profiles with tailored access and content management capabilities.",
        "Leveraged data structures and algorithms to conform API response objects to custom formats, creating a richer functionality and user experience.",
      ],
      [
        "Provided clinical behavioral health support and education while deployed in a combat zone.",
        "Utilized electronic healthcare systems to conduct excellent patient care with detailed technical notes and documentation.",
        "Designed digital graphics, content, and promotional media for marketing events and clinical services.",
      ],
    ],
    items: [],
  });

  useEffect(() => {
    let itemsArr = [];
    for (let i = 0; i < listItems.arrays.length; i++) {
      const newItemsArr = listItems.arrays[i].map(underLineFirstWord);
      itemsArr.push(newItemsArr);
    }

    setListItems((prev) => {
      const newListItems = { ...prev };
      for (let i = 0; i < listItems.arrays.length; i++) {
        newListItems.items.push(itemsArr[i]);
      }
      return newListItems;
    });
  }, [listItems.arrays]);

  var underLineFirstWord = (item, i) => {
    const itemArr = item.split(" ");
    const underlined = <span className="u-underline">{itemArr[0]}</span>;

    item = (
      <li key={"item" + i} className="u-list-item u-list-item-animation">
        {underlined}
        {" " + item.slice(itemArr[0].length)}
      </li>
    );

    return item;
  };

  return (
    <>
      <div className="info__box info__exp">
        <div className="u-margin-bottom-md">
          <h3 className="heading-tertiary u-margin-bottom-sm">
            Tabi Technologies
          </h3>
          <ul className="info__list">
            <p className="u-margin-bottom-sm">
              <em>
                Full Stack Web Developer - Startup web application for
                automating food and beverage orders to eliminate wait times at
                busy venues.
              </em>
            </p>
            {listItems.items[0]}
          </ul>
        </div>
        <div>
          <h3 className="heading-tertiary u-margin-bottom-sm">
            U. S. Army Reserve
          </h3>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>Behavioral Health Specialist</em>
              </p>
              {listItems.items[1]}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { ExperienceInfo };
