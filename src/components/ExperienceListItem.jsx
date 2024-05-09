import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import * as PropTypes from "prop-types";
import { useState } from "react";

function ExperienceListItem(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const onListItemClick = () => {
    const dropdown = document.querySelector(".exp__dropdown");

    if (props.item?.subcomponent) {
      if (!showDropdown) {
        setShowDropdown(true);
        setTimeout(() => {
          dropdown.classList.add("exp__dropdown--open");
        }, 100);
      } else {
        setTimeout(() => {
          dropdown.style.animation = "fadeOut .3s";
        }, 250);
        setShowDropdown(false);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <li
        onClick={onListItemClick}
        className="u-list-item u-list-item-animation exp__list--item"
      >
        {props.underlined}
        {" " + props.item.string.slice(props.itemArr[0].length)}
        {props.showCaret && (
          <FontAwesomeIcon
            className="exp__list--caret"
            key={"icon" + props.index}
            icon={faCaretDown}
          />
        )}
      </li>
      {props.item?.subcomponent && showDropdown ? (
        <div className="exp__dropdown">{props.item?.subcomponent}</div>
      ) : (
        <></>
      )}
    </>
  );
}

ExperienceListItem.propTypes = {
  underlined: PropTypes.node,
  item: PropTypes.shape({
    string: PropTypes.string,
    subcomponent: PropTypes.node,
  }),
  itemArr: PropTypes.array,
  showCaret: PropTypes.bool,
  index: PropTypes.number,
};

export { ExperienceListItem };
