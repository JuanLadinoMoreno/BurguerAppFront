import React from 'react'

export default function ProdBig() {
    return (
        <section className="sectProdBig overflow-x-hidden">


            <div className="row">
                
                <div className="sectProdBig__contDat col-lg-5  col-md-6 col-sm-12">
                    <img className="" src="/img/icons/real.svg" alt="" />
                    <p> 
                        Así creamos nuestras hamburguesas,   porque lo <span>genuino siempre es mejor</span>
                    </p>
                </div>

                <div
                    className="sectProdBig__contImg col-lg-7 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <span className="spanMov"></span>
                    <span className="spanMov"></span>
                    <span className="spanMov"></span>
                    <span className="spanMov"></span>
                    <span className="spanMov"></span>
                    <img className="" src="/img/bgTripl.png" style={{ maxWidth: "70%" }} alt="big" loading="lazy" />
                </div>


            </div>


        </section>
    )
}
