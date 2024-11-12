import { Head } from "../components/Head"
import NavBar from "../components/NavBar"
import BanEventos from "../components/Pages/Home/BanEventos"
import HidenButtons from "../components/HidenButtons"


export const Grill = () => {
    return (
        <>
            <header className="headerPaga">
                <div className="header-content">
                    <h1>Asados</h1>

                </div>
            </header>

            <NavBar />
            {/* <Head title={'Al grill'}/> */}

            <section className="scAsados">

                <div className="cntSec1">
                        <h3 className=" title-grill"> Cada bocado es una explosión de sabor que te transportará directamente al corazón del asador</h3>
                    <div className="cntSec1__cntDatos">
                        <h3> Cada bocado es una explosión de sabor que te transportará directamente al corazón del asador</h3>
                        <div className="cntSec1__cntProducts">
                            {/* <h4>Hamburguesas</h4> */}
                            {/* <span>
                            Cada bocado es una explosión de sabor que te transportará directamente al corazón del asador.
                            </span> */}
                            <p>Todas nuestras hamnurguesas son de una porcionde 150gr. <br /> 
                                Preparadas con: 
                            </p>
                            <ul>
                                <li>adereso césar</li>
                                <li>mostaza</li>
                                <li>ketchup</li>
                                <li>variedad de lechugas</li>
                                <li>cebolla encurtida</li>
                                <li>rajas caseras</li>
                                <li>queso manchego uruguayo</li>
                            </ul>
                            
                            {/* <h4>Hamburguesas</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit incidunt qui minus,
                                repellat ipsam quod consequuntur ipsum magni facilis! Et neque voluptate alias sint doloremque
                                cum. Dignissimos, qui harum.</p>
                            <h4>Hamburguesas</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit incidunt qui minus,
                                repellat ipsam quod consequuntur ipsum magni facilis! Et neque voluptate alias sint doloremque
                                cum. Dignissimos, qui harum.</p> */}
                        </div>
                    </div>
                    <div className="cntSec1__cntImages">
                        <img src="/img/grill/alitas.jpg" alt="" />
                        <img src="/img/grill/baguette.jpg" alt="" />
                        <img src="/img/grill/pimientos.jpg" alt="" />
                    </div>
                </div>

                <div className="container cont-menuAsado pt-5">
                {/* <div className="menu-title">Menú de Hamburguesas</div> */}
                <div className="row ">

                    <div className="col-md-6 d-flex justify-conten-center align-items-center flex-column p-2">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">La Robles</h3>
                                <p className="card-text">Tradicional con queso, pan blanco 150gr. de pura sabrosura.</p>
                                {/* <p className="menu-item-price">$50</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Porto-Bella</h3>
                                <p className="card-text">Vegetariana, hongo portobello, acompañado de un pesto de perejil con ajo.</p>
                                {/* <p className="menu-item-price">$50</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">La Lonjuda</h3>
                                <p className="card-text">150gr. de carne de res, acompañada de 2 lonjas de tocineta.</p>
                                {/* <p className="menu-item-price">$60</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Aloha!!</h3>
                                <p className="card-text">Piña y jamón de pavo ahumado, una ola de sabor.</p>
                                {/* <p className="menu-item-price">$60</p> */}
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 d-flex justify-conten-center align-items-center flex-column p-2">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">XXX</h3>
                                <p className="card-text">Pechuga de pollo rellena de hongos con queso.</p>
                                {/* <p className="menu-item-price">$70</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Religiosa</h3>
                                <p className="card-text">Cordero acompañado de mermelada de tuétano con habanero.</p>
                                {/* <p className="menu-item-price">$70</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">La Gabacha</h3>
                                <p className="card-text">Corte New York en baguette artesanal integral, acompañado de un aderezo de ajo.</p>
                                {/* <p className="menu-item-price">$80</p> */}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Toluqueña</h3>
                                <p className="card-text">Chorizo cantimpano, acompañado con aguacate.</p>
                                {/* <p className="menu-item-price">$60</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                <div id="carouselExampleAutoplaying" className="carousel slide col-xl-8 mt-5 cont__carousel"
                    data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/grill/gallery/5.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block ">
                                <h4>HAMBURGUESAS</h4>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/grill/gallery/6.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block ">
                                <h4>CORTES</h4>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/grill/gallery/7.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block ">
                                <h4> ALITAS</h4>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>


            


            <BanEventos />

            <HidenButtons/>
        </>
    )
}
