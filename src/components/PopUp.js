import React from 'react';

const PopUp = ({ showPopup, setShowPopup, showGalleryImages, projectName }) => {
    return (
        <div className={!showPopup ? "popup" : "popup popup__show"}>
            <div className="popup__window"> 
                <div className={showGalleryImages.length === 5 ? 'gallery gallery__website' : 'gallery gallery__component'}>
                    {
                        showGalleryImages.map((img, i) => (
                            <div className={`gallery__img gallery__img--${i + 1}`} >
                                <img src={img} alt=""/>
                            </div>
                        ))
                    }
                    <div className='gallery__project'>{projectName}</div>
                </div>
            </div>
            <span className="popup__close" onClick={() => setShowPopup(false)}>
                <i className="fas fa-times"></i>
            </span>
        </div>
    )
}

export default PopUp;