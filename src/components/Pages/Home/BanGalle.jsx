import React, { useState } from 'react'
import { PopupImage } from '../../PopupImage';

export default function BanGalle() {


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };



    return (
        <>

            <section className="sect-gallery">
                

                <div className="grid-container">
                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/1.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/2.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item">
                        <img className="imgP"
                            src="/img/gallery/ban/3.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item r-span2">
                        <img className="imgP"
                            src="/img/gallery/ban/7.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/10.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item r-span2">
                        <img className="imgP"
                            src="/img/gallery/ban/9.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/4.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/5.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>

                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/11.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>
                    <div className="item ">
                        <img className="imgP"
                            src="/img/gallery/ban/6.png"
                            onClick={(e) => handleImageClick(e.target.src)}
                            alt=""
                            loading="lazy" />
                    </div>
                </div>

                {
                    selectedImage && (
                        <PopupImage imageUrl={selectedImage} onClose={handleClosePopup} />
                    )
                }

            </section>

        </>

    )
}
