import * as PropTypes from 'prop-types';

function DropdownItem({item, index}) {
    
    return (
        <div
        className="exp__img-container u-margin-bottom-sm u-border-bottom"
        key={item.file + "-" + index}
      >
          <div className="exp__img--left">
            <p>{item.string}</p>
          </div>
          <div className="exp__img--right">
            <img
              className="exp__img-container--img"
              src={`img/${item.file}`}
              alt={"figure-" + index}
            />
          </div>
        </div>
    )
}

DropdownItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

export {DropdownItem}