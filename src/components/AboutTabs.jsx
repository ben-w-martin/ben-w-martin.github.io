import * as PropTypes from "prop-types";

function AboutTabs({ onSwitchTabs, tab }) {
  return (
    <>
      <div className="tabs">
        <div
          className={
            tab.current === "bio"
              ? "tabs__header-box tabs__header-box-isChecked"
              : "tabs__header-box"
          }
        >
          <label htmlFor="bio" className="tabs__label">
            <span className="tabs__header heading-tertiary">bio</span>
          </label>
          <input
            id="bio"
            type="radio"
            name="about-tabs"
            value="bio"
            className="tabs__input "
            onChange={onSwitchTabs}
          />
        </div>

        <div
          className={
            tab.current === "edu"
              ? "tabs__header-box tabs__header-box-isChecked"
              : "tabs__header-box"
          }
        >
          <label htmlFor="edu" className="tabs__label">
            <span className="tabs__header heading-tertiary">Education</span>
          </label>
          <input
            id="edu"
            type="radio"
            name="about-tabs"
            value="edu"
            className="tabs__input "
            onChange={onSwitchTabs}
          />
        </div>

        <div
          className={
            tab.current === "exp"
              ? "tabs__header-box tabs__header-box-isChecked"
              : "tabs__header-box"
          }
        >
          <label htmlFor="exp" className="tabs__label">
            <span className="tabs__header heading-tertiary">Experience</span>
          </label>
          <input
            id="exp"
            type="radio"
            name="about-tabs"
            value="exp"
            className="tabs__input "
            onChange={onSwitchTabs}
          />
        </div>
      </div>
    </>
  );
}

AboutTabs.propTypes = {
  tab: PropTypes.shape({ current: PropTypes.string }),
  setTab: PropTypes.func,
  onSwitchTabs: PropTypes.func,
};

export { AboutTabs };
