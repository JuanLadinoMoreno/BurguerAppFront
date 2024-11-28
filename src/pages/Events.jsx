import { useState } from 'react'
import { Head } from '../components/Head'
import BanEventos from '../components/Pages/Home/BanEventos'
import NavBar from '../components/NavBar'
import { PopupImage } from '../components/PopupImage'
import HidenButtons from "../components/HidenButtons"



import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function Events() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };


    return (
        <>
            {/* <Head title={'Eventos'} /> */}

            {/* <header className="headerPage">
                <div className="header-content">
                    <h1>Asados</h1>

                </div>
            </header> */}

            <header className="headerPagasa">
                <div className="header-content">
                    <h1>Eventos</h1>

                </div>
            </header>

            <NavBar />

            <section className="sect-gallery">
                <div className="grid-container">
                    <div className="item c-span2">
                        <img src="/img/events/bg-event.jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>

                    <div className="item ">
                        <img src="/img/events/P1244319.jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>

                    <div className="item r-span2">
                        <img src="/img/events/P1233991b.jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>

                    <div className="item ">
                        <img src="/img/events/P1244338.jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>


                    <div className="item ">
                        <img src="/img/events/P1244363 (1).jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>

                    <div className="item ">
                        <img src="/img/events/P1244348-1.jpg"
                            alt=""
                            loading='lazy'
                            onClick={(e) => handleImageClick(e.target.src)}
                        />
                    </div>

                </div>

                {
                    selectedImage && (
                        <PopupImage imageUrl={selectedImage} onClose={handleClosePopup} />
                    )
                }
            </section>

            <h2 className='title2'>Nuestros Paquetes</h2>

            <div className="gridContainerCa container mt-5">
                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/paquetes/burgPap.png" alt="" />
                    <h2> <span>$</span>60</h2>
                    <p>Hamburguesa sencilla + papas a la fencesa</p>
                    {/* <h4>Chef</h4> */}
                    {/* <a className="btn-prin d-none" href="#">Redes </a> */}
                    {/* <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="https://www.facebook.com/vicente.robles.961" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/chentirris/" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>

                    </div> */}

                </div>

                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/paquetes/hotPap.png" alt="" />
                    <h2> <span>$</span>60</h2>
                    <p>Hamburguesa sencilla + papas a la fencesa</p>
                    {/* <h4>Chef</h4> */}
                    {/* <a className="btn-prin d-none" href="#">Redes </a> */}
                    {/* <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div> */}
                </div>

                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/paquetes/burgHotPap.png" alt="" />
                    <h2> <span>$</span>60</h2>
                    <p>Hamburguesa sencilla + papas a la fencesa</p>
                    {/* <h4>Chef</h4> */}
                    {/* <a className="btn-prin d-none" href="#">Redes </a> */}
                    {/* <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div> */}
                </div>

                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/paquetes/burgHot.png" alt="" />
                    <h2> <span>$</span>60</h2>
                    <p>Hamburguesa sencilla + papas a la fencesa</p>
                    {/* <h4>Chef</h4> */}
                    {/* <a className="btn-prin d-none" href="#">Redes </a> */}
                    {/* <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div> */}
                </div>
            </div>

            <h2 className='title2'>Invítanos a tus mejores eventos</h2>

            <div className='h-50'>

            <div className="sec0">
                <div className="sec1"></div>
                <div className="sec2"></div>
                <div className="sec3"></div>
                <div className="sec4"></div>
            </div>
            </div>

            <h2 className='title2'>Ubicación</h2>

            <div className="container-fluid mb-4">

                <div className="row d-flex justify-content-center align-items-center mb-4">

                    <div className=' d-flex flex-column border-warning m-3 border-2 border-opacity-50 shadow-lg rounded-4' style={{ 'width': '100%', 'max-width': '26rem' }}>

                        <MapContainer style={{ height: "380px", zIndex: '-1' }} center={[18.9051, -98.4395]} zoom={17} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[18.9051, -98.4395]}>
                                {/* 18.9099878,-98.4362052 */}
                                <Popup>
                                    Burguer Robles. <br /> Centro.
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <div className='d-flex justify-content-center align-items-start flex-column gap-2 m-2'>
                            <div className='d-flex justify-content-start align-items-center gap-3 m-2'>
                                <a href="" className="d-flex justify-content-center align-items-center border border-warning border-3 p-1 rounded-5 fs-4 text-warning" style={{ width: '40px', height: '40px' }}> <i className="bi bi-geo-alt"></i></a>
                                <p className='fs-5 my-2'>Av. Morelos 505, Col Centro </p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center gap-3 m-2'>
                                <a href="" className="d-flex justify-content-center align-items-center border border-warning border-3 p-1 rounded-5 fs-4 text-warning" style={{ width: '40px', height: '40px' }}> <i className="fab fa-whatsapp"></i></a>
                                <p className='fs-5 my-2'>+52-584-66-58 </p>
                            </div>
                        </div>


                    </div>

                    <div className=' d-flex flex-column border-warning m-3 border-2 border-opacity-50 shadow-lg rounded-4' style={{ 'width': '100%', 'max-width': '26rem' }}>

                        <MapContainer style={{ height: "380px", zIndex: '-1' }} center={[18.9099, -98.4362]} zoom={17} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[18.9099, -98.4362]}>
                                <Popup>
                                    Burguer Robles. <br /> Centro.
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <div className='d-flex justify-content-center align-items-start flex-column gap-2 m-2'>
                            <div className='d-flex justify-content-start align-items-center gap-3 m-2'>
                                <a href="" className="d-flex justify-content-center align-items-center border border-warning border-3 p-1 rounded-5 fs-4 text-warning" style={{ width: '40px', height: '40px' }}> <i className="bi bi-geo-alt"></i></a>
                                <p className='fs-5 my-2'>Av. Morelos 505, Col Centro </p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center gap-3 m-2'>
                                <a href="" className="d-flex justify-content-center align-items-center border border-warning border-3 p-1 rounded-5 fs-4 text-warning" style={{ width: '40px', height: '40px' }}> <i className="fab fa-whatsapp"></i></a>
                                <p className='fs-5 my-2'>+52-584-66-58 </p>
                            </div>
                        </div>


                    </div>


                </div>

                {/* <div className="row">

                    <div className="col-lg-8 col-md-8 col-sm-12 mb-4 mb-md-0 " style={{ zIndex: "-1", height: "400px" }}>
                        <MapContainer style={{ height: "400px" }} center={[18.9051, -98.4395]} zoom={17} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[18.9051, -98.4395]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className=" col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="img-cont">
                            <img src="/img/bseller/Maskgroup1.png" alt="" data-aos="fade-down-right" data-aos-easing="linear" data-aos-duration="1500" loading="lazy" />
                            <img src="/img/bseller/Maskgroup2.png" alt="" data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1500" loading="lazy" />
                            <img src="/img/bseller/Maskgroup3.png" alt="" data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="1500" loading="lazy" />
                            <img src="/img/bseller/Maskgroup4.png" alt="" data-aos="fade-down-left" data-aos-easing="linear" data-aos-duration="1500" loading="lazy" />
                        </div>
                    </div>

                </div> */}
            </div>

            <HidenButtons />

        </>
    )
}

export default Events








