import React from "react";

const PopUp = ({ showPopup, setShowPopup, projectImage }) => {
  return (
    <div className={!showPopup ? "popup" : "popup popup--show"}>
      <div className="popup__container">
        <figure className="popup__img">
          <img src={projectImage} alt="" />
        </figure>
      </div>
      <span className="popup__close" onClick={() => setShowPopup(false)}>
        <i className="fas fa-times"></i>
      </span>
      <div className="background"></div>
    </div>
  );
};

export default PopUp;
