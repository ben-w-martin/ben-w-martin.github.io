import * as PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DropdownItem } from "./DropdownItem";

function ListItemDropdown({ options }) {
  const [items, setItems] = useState({
    array: [],
    components: [],
  });


  useEffect(() => {
    if (options && options?.length > 0) {
      setItems(() => {
        const newItems = {
          array: options,
          components: options.map(mapOptions),
        };
        return newItems;
      });
    }
  }, [options]);

  const mapOptions = (item, i) => {
    return <DropdownItem item={item} index={i}/>
  };
  return <>{items.components}</>;
}

ListItemDropdown.propTypes = {
  options: PropTypes.array,
};

export { ListItemDropdown };
