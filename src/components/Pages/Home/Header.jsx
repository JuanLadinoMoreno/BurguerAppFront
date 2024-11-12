import React from 'react'
import vgVideo from '../../../assets/video/burgueroblesVLC (online-video-cutter.com) SINAUDIO.mp4'
// import imgLogo from '../assets/img/logoSl.png'

export default function Header() {
  return (
   
    <header className="header ">
      <div className="bgBlack"></div>
      <video className="" src={vgVideo} type="video/mp4" autoPlay loop muted></video>
      <div className="header-content">
        <img className="img-center" src='/img/logoSl.png' alt="" data-aos="flip-left" data-aos-easing="linear"
          data-aos-duration="2500" />
        <h1>
          <i className="fas fa-hamburger"></i>
            Burguer Robles
          <i className="fas fa-hamburger"></i>
        </h1>
        <p className='fs-4 text-light w-75 text-center fs-sm-50'>Las mejores hamburguesas del mejor clima del mundo</p>

        {/* <div className="sectAbout">
          <div className="sectAbo__datosLogo  d-flex justify-content-center align-items-center flex-column ">
            <h3>Burguer Robles</h3>
            <h2>Food truck</h2>
          </div>
        </div> */}

        {/* <a className="btn-transparent" href="#sectAbo">Ver Mas</a> */}
      </div>
    </header>

  );
}
