import React from 'react';

const PopUp = ({ showPopup, setShowPopup, showSliderImages }) => {
    const widnowSize = window.innerWidth;

    return (
        <div className={!showPopup ? "popup" : "popup popup__show"}>
            <div className="popup__window">
                {
                    widnowSize > 600 ?
                        <figure className="popup__img">
                            <img src={showSliderImages[0]} alt="" />
                        </figure>
                        :

                        <figure className="popup__img">
                            <img src={showSliderImages[1]} alt="" />
                        </figure>
                }

            </div>
            <span className="popup__close" onClick={() => setShowPopup(false)}>
                <i className="fas fa-times"></i>
            </span>
        </div>
    )
}

export default PopUp;