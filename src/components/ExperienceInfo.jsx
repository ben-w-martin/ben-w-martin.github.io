import { useEffect, useState } from "react";
import { ExperienceListItem } from "./ExperienceListItem";
import experienceList from "../data/experienceList";

function ExperienceInfo() {
  const [listItems, setListItems] = useState({
    arrays: [...experienceList],
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
    const itemArr = item.string.split(" ");
    const underlined = <span className="u-underline">{itemArr[0]}</span>;
    const showCaret = item.subcomponent !== null ? true : false;

    item = (
      <ExperienceListItem
        key={"list-item" + i}
        index={i}
        item={item}
        itemArr={itemArr}
        underlined={underlined}
        showCaret={showCaret}
      />
    );

    return item;
  };

  return (
    <>
      <div className="info__box info__exp">
        <div className="u-margin-bottom-md u-pos-relative">
          <div className="exp__heading heading-tertiary">
            <h3
              disabled
              to="/"
              className="heading-tertiary u-margin-bottom-sm"
              >
              Daughters App
            </h3>
            <h3 className="exp__heading--date">
              May &apos;24 - Present
            </h3>
          </div>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  <strong>
                  Back End Engineer
                  </strong> 
                 {" "}(part-time, contract) - Faith-based ios and Android app.
                </em>
              </p>
              {listItems.items[0]}
            </ul>
          </div>
        </div>
        <div className="u-margin-bottom-md u-pos-relative">
          <div className="exp__heading heading-tertiary">
            <h3
              disabled
              to="/"
              className="heading-tertiary u-margin-bottom-sm"
              >
              Tabi Technologies
            </h3>
            <h3 className="exp__heading--date">
              Jan &apos;24 - May &apos;24
            </h3>
          </div>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  <strong>
                    Full Stack Web Developer
                  </strong>
                  {" "}(full-time, contract) - Startup web application for
                  automating food and beverage orders to eliminate wait times at
                  busy venues.
                </em>
              </p>
              {listItems.items[1]}
            </ul>
          </div>
        </div>
        <div className="u-margin-bottom-md u-pos-relative">
          <div className="exp__heading heading-tertiary">
            <h3 className="u-margin-bottom-sm">
              U. S. Army Reserve
            </h3>
            <h3 className="exp__heading--date">
              July &apos;20 - Present
            </h3>
          </div>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  <strong>
                    Behavioral Health Specialist
                  </strong>
                </em>
              </p>
              {listItems.items[2]}
            </ul>
          </div>
        </div>
        <div className="u-margin-bottom-md u-pos-relative">
          <div className="exp__heading heading-tertiary">
            <h3
              disabled
              to="/"
              className=" u-margin-bottom-sm"
              >
              Veteran Fall-In Hackathon
            </h3>
            <h3 className="exp__heading--date">
              May &apos;24
            </h3>
          </div>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  <strong>
                    Front End Developer  
                  </strong>
                  {" "}
                  {/* <a href="#">View live sight</a> */}
                </em>
              </p>
              {listItems.items[3]}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export { ExperienceInfo };