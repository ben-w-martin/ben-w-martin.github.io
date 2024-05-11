import { useState } from "react"
import * as PropTypes from 'prop-types';

function DropdownItem({item, index}) {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    
    return (
        <div
        className="exp__img-container u-margin-bottom-sm u-border-bottom"
        key={item.file + "-" + index}
      >
        <div className="exp__img--left">
          <p>{item.string}</p>
        </div>
        {!showModal ? (<div onClick={toggleModal} className="exp__img--right">
          <img
            className="exp__img-container--img"
            src={`src/assets/data/img/${item.file}`}
            alt={"figure-" + index}
          />
        </div>) : (
          <>
            <div onClick={toggleModal} className="exp__img--right exp__img--modal">
              <img
                className="exp__img-container--img"
                src={`/src/assets/data/img/${item.file}`}
                alt={"figure-" + index}
                />
            </div>
            <div onClick={toggleModal} className="modal-backdrop">&nbsp;</div>
          </>
        )}
      </div>
    )
}

DropdownItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

export {DropdownItem}