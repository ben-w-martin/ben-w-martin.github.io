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
          <h3
            disabled
            to="/"
            className="heading-tertiary u-margin-bottom-sm"
          >
            Veterans&apos; Fall-In Hackathon
          </h3>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  Front End Developer - Web application for planning stargazing trips using real-time and predictive space data.
                </em>
              </p>
              {listItems.items[0]}
            </ul>
          </div>
        </div>
        <div className="u-margin-bottom-md u-pos-relative">
          <h3
            disabled
            to="/"
            className="heading-tertiary u-margin-bottom-sm"
          >
            Tabi Technologies
          </h3>
          <div className="info__exp--text">
            <ul className="info__list">
              <p className="u-margin-bottom-sm">
                <em>
                  Full Stack Web Developer - Startup web application for
                  automating food and beverage orders to eliminate wait times at
                  busy venues.
                </em>
              </p>
              {listItems.items[1]}
            </ul>
          </div>
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
              {listItems.items[2]}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export { ExperienceInfo };