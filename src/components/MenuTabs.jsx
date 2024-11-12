import React from 'react'

function MenuTabs() {

    const styleFont = {
        fontSize: '20px',
      };
      
    return (
        <>

            <section className=" d-flex justify-content-between align-items-center flex-column">



                <div className=" contMenus d-flex align-items-start justify-content-center container">

                    {/* <!-- https://getbootstrap.com/docs/5.2/components/navs-tabs/#fade-effect --> */}
                    {/* <!-- MENU VERTICAL aria-orientation="vertical"--> */}
                    <div className=" contMenus__menuVerti  nav nav-pillsv me-3 w-50" id="v-pills-tab" role="tablist">

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src="/img/menu/burguers//burgMex.png" alt="" />
                            <button className=" nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Hamburgesas</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src="/img/menu/baguettes/baguet.png" alt="" />
                            <button className=" nav-link" id="v-pills-baguttes-tab" data-bs-toggle="pill" data-bs-target="#v-pills-baguttes" type="button" role="tab" aria-controls="v-pills-baguttes" aria-selected="false" tabIndex="-1">Baguettes</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src="/img/menu/sandwiches/sandw.png" alt="" />
                            <button className="nav-link" id="v-pills-sandwiches-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sandwiches" type="button" role="tab" aria-controls="v-pills-sandwiches" aria-selected="false" tabIndex="-1">Sandwiches</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src="/img/menu/hotdogs/hotdog.png" alt="" />
                            <button className="nav-link" id="v-pills-hotDogs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hotDogs" type="button" role="tab" aria-controls="v-pills-hotDogs" aria-selected="false" tabIndex="-1">Hot Dogs</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <img src="/img/menu/hotdogs/hotdog.png" alt="" />
                            <button className="nav-link" id="v-pills-burros-tab" data-bs-toggle="pill" data-bs-target="#v-pills-burros" type="button" role="tab" aria-controls="v-pills-burros" aria-selected="false" tabIndex="-1">Burritos</button>
                        </div>
                    </div>


                    {/* <!-- MENU CONTENEDOR INTERNO  --> */}
                    <div className=" contMenus__contInter tab-content " id="v-pills-tabContent">
                        <h3>Sabores</h3>
                        {/* <!-- MENU CONTENEDOR INTERNO hamburgesas --> */}
                        <div className=" tab-pane fade show active " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">



                            {/* <!-- CONTENEDOR PRODUCTOS BURGUER --> */}
                            <div className=" container pt-3 ">

                                {/* <!-- MENU ARRIBA BURGUER--> */}
                                <ul className=" nav nav-pills mb-3 justify-content-center w-100" id="pills-tab" role="tablist" style={styleFont}>
                                    <li className="nav-item" role="presentation">

                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Tradicional</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-toci-tab" data-bs-toggle="pill" data-bs-target="#pills-toci" type="button" role="tab" aria-controls="pills-toci" aria-selected="false" tabIndex="-1">Tocino</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-hawa-tab" data-bs-toggle="pill" data-bs-target="#pills-hawa" type="button" role="tab" aria-controls="pills-hawa" aria-selected="false" tabIndex="-1">Hawaiana</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-mexi-tab" data-bs-toggle="pill" data-bs-target="#pills-mexi" type="button" role="tab" aria-controls="pills-mexi" aria-selected="false" tabIndex="-1">Mexicana</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-champi-tab" data-bs-toggle="pill" data-bs-target="#pills-champi" type="button" role="tab" aria-controls="pills-champi" aria-selected="false" tabIndex="-1">Champiñones</button>
                                    </li>
                                </ul>

                                {/* <!-- CONTENEDOR PRODUCTOS --> */}
                                <div className="tab-content" id="pills-tabContent">

                                    {/* <!-- CONTENEDOR BG-TRADI --> */}
                                    <div className="tab-pane fade show active  " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/burguers/burgMex.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Cerne 100% de res</li>
                                                    <li>- Queso manchego</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios d-flex justify-content-center align-items-center flex-column">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencilla</h4>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Double</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BG-TOCI --> */}
                                    <div className="tab-pane fade" id="pills-toci" role="tabpanel" aria-labelledby="pills-toci-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/burguers/burgToci.png" alt="burgTocino" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Cerne 100% de res</li>
                                                    <li>- Queso manchego</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios d-flex justify-content-center align-items-center flex-column">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencilla</h4>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Double</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BG-HAW --> */}
                                    <div className="tab-pane fade" id="pills-hawa" role="tabpanel" aria-labelledby="pills-hawa-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/burguers/burgMex.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Cerne 100% de res</li>
                                                    <li>- Queso manchego</li>
                                                    <li>- Jamon</li>
                                                    <li>- Piña</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios d-flex justify-content-center align-items-center flex-column">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencilla</h4>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Double</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- CONTENEDOR PRODUCTO MEX--> */}
                                    <div className="tab-pane fade" id="pills-mexi" role="tabpanel" aria-labelledby="pills-mexi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/burguers/burgMex.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Cerne 100% de res</li>
                                                    <li>- Queso manchego</li>
                                                    <li>- Chorizo</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios d-flex justify-content-center align-items-center flex-column">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencilla</h4>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Double</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- CONTENEDOR PRODUCTO BG-CHAMP--> */}
                                    <div className="tab-pane fade" id="pills-champi" role="tabpanel" aria-labelledby="pills-champi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/burguers/burgMex.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Cerne 100% de res</li>
                                                    <li>- Queso manchego</li>
                                                    <li>- Champiñones con queso fundido</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios d-flex justify-content-center align-items-end flex-column ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencilla</h4>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Double</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <!-- MENU CONTENEDOR INTERNO baguettes --> */}
                        <div className="tab-pane fade" id="v-pills-baguttes" role="tabpanel" aria-labelledby="v-pills-baguttes-tab" tabIndex="0">
                            {/* <!-- CONTENEDOR PRODUCTOS BAGUETTE --> */}
                            <div className="container pt-3  ">
                                {/* <!-- MENU ARRIBA BAGUETTE--> */}
                                <ul className=" nav nav-pills mb-3 justify-content-center w-100" id="pills-tab" role="tablist" style={styleFont}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-pollo-tab" data-bs-toggle="pill" data-bs-target="#pills-pollo" type="button" role="tab" aria-controls="pills-pollo" aria-selected="true">Pollo</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-bgPie-tab" data-bs-toggle="pill" data-bs-target="#pills-bgPie" type="button" role="tab" aria-controls="pills-bgPie" aria-selected="false" tabIndex="-1">Pierna Adobada</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-bagCochi-tab" data-bs-toggle="pill" data-bs-target="#pills-bagCochi" type="button" role="tab" aria-controls="pills-bagCochi" aria-selected="false" tabIndex="-1">Cochinita Pibil</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-bgMila-tab" data-bs-toggle="pill" data-bs-target="#pills-bgMila" type="button" role="tab" aria-controls="pills-bgMila" aria-selected="false" tabIndex="-1">Milanesa</button>
                                    </li>
                                </ul>

                                {/* <!-- CONTENEDOR PRODUCTOS --> */}
                                <div className="tab-content" id="pills-tabContent">

                                    {/* <!-- CONTENEDOR BAG-POLLO --> */}
                                    <div className="tab-pane fade show active  " id="pills-pollo" role="tabpanel" aria-labelledby="pills-pollo-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/baguettes/baguet.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan baguette artesanal</li>
                                                    <li>- Pollo desebrado</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$70.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Cubano</h4>
                                                        <p>$75.00 <br /> (Jamón y queso) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BAG-PIE --> */}
                                    <div className="tab-pane fade" id="pills-bgPie" role="tabpanel" aria-labelledby="pills-bgPie-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/baguettes/baguet.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan baguette artesanal</li>
                                                    <li>- Pierna adobada</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$70.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Cubano</h4>
                                                        <p>$75.00 <br /> (Jamón y queso) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BAG-COCHI --> */}
                                    <div className="tab-pane fade" id="pills-bagCochi" role="tabpanel" aria-labelledby="pills-bagCochi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/baguettes/baguet.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan baguette artesanal</li>
                                                    <li>- Cochinita Pibil</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$70.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Cubano</h4>
                                                        <p>$75.00 <br /> (Jamón y queso) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- CONTENEDOR PRODUCTO MILA--> */}
                                    <div className="tab-pane fade" id="pills-bgMila" role="tabpanel" aria-labelledby="pills-bgMila-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/baguettes/baguet.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan baguette artesanal</li>
                                                    <li>- Milanesa</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$70.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Cubano</h4>
                                                        <p>$75.00 <br /> (Jamón y queso) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- MENU CONTENEDOR INTERNO sndwiches --> */}
                        <div className="tab-pane fade" id="v-pills-sandwiches" role="tabpanel" aria-labelledby="v-pills-sandwiches-tab" tabIndex="0">

                            {/* <!-- CONTENEDOR PRODUCTOS SANDWICHE --> */}
                            <div className="container pt-3  ">
                                {/* <!-- MENU ARRIBA SANDWICHE--> */}
                                <ul className=" nav nav-pills mb-3 justify-content-center w-100" id="pills-tab" role="tablist" style={styleFont}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-swPollo-tab" data-bs-toggle="pill" data-bs-target="#pills-swPollo" type="button" role="tab" aria-controls="pills-swPollo" aria-selected="true">Pollo</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-hwPie-tab" data-bs-toggle="pill" data-bs-target="#pills-hwPie" type="button" role="tab" aria-controls="pills-hwPie" aria-selected="false" tabIndex="-1">Pierna Adobada</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-swgCochi-tab" data-bs-toggle="pill" data-bs-target="#pills-swgCochi" type="button" role="tab" aria-controls="pills-swgCochi" aria-selected="false" tabIndex="-1">Cochinita Pibil</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-swMila-tab" data-bs-toggle="pill" data-bs-target="#pills-swMila" type="button" role="tab" aria-controls="pills-swMila" aria-selected="false" tabIndex="-1">Milanesa</button>
                                    </li>
                                </ul>

                                {/* <!-- CONTENEDOR PRODUCTOS --> */}
                                <div className="tab-content" id="pills-tabContent">

                                    {/* <!-- CONTENEDOR HW-POLLO --> */}
                                    <div className="tab-pane fade show active  " id="pills-swPollo" role="tabpanel" aria-labelledby="pills-swPollo-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/sandwiches/sandw.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan blanco</li>
                                                    <li>- Pollo desebrado</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div>  */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR HW-PIE --> */}
                                    <div className="tab-pane fade" id="pills-hwPie" role="tabpanel" aria-labelledby="pills-hwPie-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/sandwiches/sandw.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan Blanco</li>
                                                    <li>- Pierna adobada</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BG-COCHI --> */}
                                    <div className="tab-pane fade" id="pills-swgCochi" role="tabpanel" aria-labelledby="pills-swgCochi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/sandwiches/sandw.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan blanco</li>
                                                    <li>- Cochinita Pibil</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- CONTENEDOR BG-MILA--> */}
                                    <div className="tab-pane fade" id="pills-swMila" role="tabpanel" aria-labelledby="pills-swMila-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/sandwiches/sandw.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Pan blanco</li>
                                                    <li>- Milanesa</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Lechuga</li>
                                                    <li>- Picante</li>
                                                    <li>- Frijoles</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$60.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div>  */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- MENU CONTENEDOR INTERNO hto dogs --> */}
                        <div className="tab-pane fade" id="v-pills-hotDogs" role="tabpanel" aria-labelledby="v-pills-hotDogs-tab" tabIndex="0">

                            {/* <!-- CONTENEDOR PRODUCTOS HOT DOG --> */}
                            <div className="container pt-3  ">
                                {/* <!-- MENU ARRIBA HOT DOG--> */}
                                <ul className=" nav nav-pills mb-3 justify-content-center w-100" id="pills-tab" role="tablist" style={styleFont}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-hdTradi-tab" data-bs-toggle="pill" data-bs-target="#pills-hdTradi" type="button" role="tab" aria-controls="pills-hdTradi" aria-selected="true">Tradicional</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-hdGrand-tab" data-bs-toggle="pill" data-bs-target="#pills-hdGrand" type="button" role="tab" aria-controls="pills-hdGrand" aria-selected="false" tabIndex="-1">Gran Danés</button>
                                    </li>

                                </ul>

                                {/* <!-- CONTENEDOR PRODUCTOS --> */}
                                <div className="tab-content" id="pills-tabContent">

                                    {/* <!-- CONTENEDOR HD-TRADI --> */}
                                    <div className="tab-pane fade show active  " id="pills-hdTradi" role="tabpanel" aria-labelledby="pills-hdTradi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Salchicha de pavo</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$20.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Revolcado</h4>
                                                        <p>$40.00 <br /> (Chorizo o Champiñones o Piña) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR HD-GRAND --> */}
                                    <div className="tab-pane fade" id="pills-hdGrand" role="tabpanel" aria-labelledby="pills-hdGrand-tab" tabIndex="0">

                                        <div className="contDatosMenu d-flex ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Salchicha de pavo</li>
                                                    <li>- Mayonesa</li>
                                                    <li>- Catsup</li>
                                                    <li>- Mostasa</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Cebolla</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$37.00</p>
                                                    </div>
                                                    <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                                        <h4>Revolcado</h4>
                                                        <p>$50.00 <br/> (Chorizo o Champiñones o Piña) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>

                        {/* <!-- MENU CONTENEDOR INTERNO BURROS --> */}
                        <div className="tab-pane fade" id="v-pills-burros" role="tabpanel" aria-labelledby="v-pills-burros-tab" tabIndex="0">
                            {/* <!-- CONTENEDOR PRODUCTOS BURRITOS --> */}
                            <div className="container pt-3  ">
                                {/* <!-- MENU ARRIBA BURRITOS--> */}
                                <ul className=" nav nav-pills mb-3 justify-content-center w-100" id="pills-tab" role="tablist" style={styleFont}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-buPollo-tab" data-bs-toggle="pill" data-bs-target="#pills-buPollo" type="button" role="tab" aria-controls="pills-buPollo" aria-selected="true">Pollo</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-buPie-tab" data-bs-toggle="pill" data-bs-target="#pills-buPie" type="button" role="tab" aria-controls="pills-buPie" aria-selected="false" tabIndex="-1">Pierna Adobada</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-buCochi-tab" data-bs-toggle="pill" data-bs-target="#pills-buCochi" type="button" role="tab" aria-controls="pills-buCochi" aria-selected="false" tabIndex="-1">Cochinita Pibil</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-buMila-tab" data-bs-toggle="pill" data-bs-target="#pills-buMila" type="button" role="tab" aria-controls="pills-buMila" aria-selected="false" tabIndex="-1">Milanesa</button>
                                    </li>
                                </ul>

                                {/* <!-- CONTENEDOR PRODUCTOS --> */}
                                <div className="tab-content" id="pills-tabContent">

                                    {/* <!-- CONTENEDOR BURRO-POLLO --> */}
                                    <div className="tab-pane fade show active  " id="pills-buPollo" role="tabpanel" aria-labelledby="pills-buPollo-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img "/>
                                                <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                    <ul>
                                                        <li>- Tortilla de arina</li>
                                                        <li>- Pollo desebrado</li>
                                                        <li>- Aguacate</li>
                                                        <li>- Jitomate</li>
                                                        <li>- Frijoles</li>
                                                        <li>- Picante</li>
                                                    </ul>
                                                    <div className="contDatosMenu__precios ">
                                                        <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                            <h4>Sencillo</h4>
                                                            <p>$45.00</p>
                                                        </div>
                                                        {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                    </div>
                                                </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BURRO-PIE --> */}
                                    <div className="tab-pane fade" id="pills-buPie" role="tabpanel" aria-labelledby="pills-buPie-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Tortilla de arina</li>
                                                    <li>- Pierna Adobada</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Frijoles</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$45.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!-- CONTENEDOR BURRO-COCHI --> */}
                                    <div className="tab-pane fade" id="pills-buCochi" role="tabpanel" aria-labelledby="pills-buCochi-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Tortilla de arina</li>
                                                    <li>- Cochina Pibil</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Frijoles</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$45.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- CONTENEDOR BURRO-- MILA--> */}
                                    <div className="tab-pane fade" id="pills-buMila" role="tabpanel" aria-labelledby="pills-buMila-tab" tabIndex="0">

                                        <div className="contDatosMenu ">
                                            <img src="/img/menu/hotdogs/hotdog.png" alt="" className=" contDatosMenu__img " />
                                            <div className="contDatosMenu__datos  w-75 d-flex justify-content-around align-items-center">
                                                <ul>
                                                    <li>- Tortilla de arina</li>
                                                    <li>- Milanesa</li>
                                                    <li>- Aguacate</li>
                                                    <li>- Jitomate</li>
                                                    <li>- Frijoles</li>
                                                    <li>- Picante</li>
                                                </ul>
                                                <div className="contDatosMenu__precios ">
                                                    <div className="contDatosMenu__precios contDatosMenu__precios--sencillo d-flex justify-content-center align-items-center flex-column">
                                                        <h4>Sencillo</h4>
                                                        <p>$45.00</p>
                                                    </div>
                                                    {/* <div className="contDatosMenu__precios--sencillo contDatosMenu__precios--doble">
                                        <h4>Cubano</h4>
                                        <p>$75.00 <br> (Jamón y queso) </p>
                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </section>

        </>
    )
}

export default MenuTabs