import React from 'react'

export const PopupImage = ({ imageUrl, onClose }) => {

  return (
    <div className="lightboxEv">
            {/* <div className="popup-content"></div> */}
            <button className="btnClosEv btnPrin" onClick={onClose}>❌</button>
            <img className='imgGra' src={imageUrl} alt="Popup" loading="lazy"/>
            

        </div>
  )
}


