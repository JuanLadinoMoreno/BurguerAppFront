import React from 'react'
import { Head } from '../components/Head'
import BanEventos from '../components/Pages/Home/BanEventos'
import NavBar from '../components/NavBar'
BanEventos

export const About = () => {
    // const {title} = Head;
    return (
        <>
            {/* <Head title={'Nosotros'} /> */}

            <header class="headerPagasa">
                <div class="header-content">
                    <h1>Nosotros</h1>

                </div>
            </header>

            <NavBar />

            <div className="sectAbo">
                <div className="row  sectAbo__conte">

                    <div className="sectAbo__images col-lg-6 p-0">
                        <img src="/img/about/foodTruck.png" alt="" />
                    </div>


                    <div className="sectAbo__datos row col-lg-6 z-0">

                        <div className="sectAbo__datosLogo  d-flex justify-content-center align-items-center flex-column">
                            <h3>Burguer Robles</h3>
                            <h2>Food truck</h2>
                        </div>

                        <p className="p-5">Empresa familiar con mas de 31 años en el mercado de la comida, especificamente en las hamburguesas creadas 100% con carne de res, especies y productos frescos.
                        </p>

                    </div>
                </div>
            </div>

            <div className="gridContainerCa container mt-5">
                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/about/profile1.png" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias saepe ad dolores eius,
                        accusantium eligendi nihil, minus nostrum in at repudiandae eos molestiae, doloremque similique.
                        Expedita praesentium laborum incidunt.</p>
                    <h3> Vicente Robles Molina</h3>
                    <h4>Chef</h4>
                    <a className="btn-prin d-none" href="#">Redes </a>
                    <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="https://www.facebook.com/vicente.robles.961" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/chentirris/" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>

                    </div>

                </div>

                <div className="gridContainerCa__itemCa">
                    {/* <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i> */}
                    <img src="/img/about/profile1.png" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias saepe ad dolores eius,
                        accusantium eligendi nihil, minus nostrum in at repudiandae eos molestiae, doloremque similique.
                        Expedita praesentium laborum incidunt.</p>
                    <h3>Luis Vicente Robles Dias</h3>
                    <h4>Chef</h4>
                    <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div className="gridContainerCa__itemCa">
                    <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i>
                    <img src="/img/about/profile1.png" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias saepe ad dolores eius,
                        accusantium eligendi nihil, minus nostrum in at repudiandae eos molestiae, doloremque similique.
                        Expedita praesentium laborum incidunt.</p>
                    <h3>Lorem ipsum</h3>
                    <h4>Director creativo</h4>
                    <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div className="gridContainerCa__itemCa">
                    <i className=" gridContainerCa__itemCa--quoteR fa-solid fa-quote-right"></i>
                    <i className=" gridContainerCa__itemCa--quoteL fa-solid fa-quote-left"></i>
                    <img src="/img/about/profile1.png" alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias saepe ad dolores eius,
                        accusantium eligendi nihil, minus nostrum in at repudiandae eos molestiae, doloremque similique.
                        Expedita praesentium laborum incidunt.</p>
                    <h3>Lorem ipsum</h3>
                    <h4>Director creativo</h4>
                    <div className="gridContainerCa__itemCa__iconsAb ">
                        <a href="" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="" target="_blank"> <i className="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <BanEventos/>

        </>



    )
}
