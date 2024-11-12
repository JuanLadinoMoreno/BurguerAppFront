import React from 'react'

function BanFoodTruck() {
    return (
        <>

            <div className="sectAbo" id="sectAbo">
                <div className="row  sectAbo__conte">

                    <div className="sectAbo__images col-lg-6 p-0">
                        <img src="/img/about/foodTruck.png" alt="" />
                    </div>


                    <div className="sectAbo__datos row col-lg-6 z-0">

                        <div className="sectAbo__datosLogo  d-flex justify-content-center align-items-center flex-column">
                            <h3>Burguer Robles</h3>
                            <h2>Food truck</h2>
                        </div>

                        <p className="p-5">
                        Desde hace más de 31 años, somos una empresa familiar dedicada a la excelencia en el arte de las hamburguesas. Nuestro compromiso es ofrecerte hamburguesas únicas, preparadas con 100% carne de res de la más alta calidad, especias seleccionadas y productos frescos. <br /> <strong>"Cada bocado es el resultado de décadas de pasión por la buena comida"</strong>
                        </p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default BanFoodTruck