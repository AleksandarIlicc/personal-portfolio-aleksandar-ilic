import React from 'react';

const PopUp = ({ showPopup, setShowPopup, showGalleryImages }) => {
    console.log(showGalleryImages);
    // const widnowSize = window.innerWidth;

    return (
        <div className={!showPopup ? "popup" : "popup popup__show"}>
            <div className="popup__window"> 
                <div className="gallery">
                    {
                        showGalleryImages.map((img, i) => (
                            <div className={`gallery__img gallery__img--${i + 1}`} >
                                <img src={img} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <span className="popup__close" onClick={() => setShowPopup(false)}>
                <i className="fas fa-times"></i>
            </span>
        </div>
    )
}

export default PopUp;


// {
//     widnowSize > 600 ?
//         <figure className="popup__img">
//             <img src={showSliderImages[0]} alt="" />
//         </figure>
//         :

//         <figure className="popup__img">
//             <img src={showSliderImages[1]} alt="" />
//         </figure>
// }