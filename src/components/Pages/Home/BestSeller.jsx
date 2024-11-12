import React from 'react'

export default function BestSeller() {
  return (

    <section className="sect-bseller">

        <div className="container ">
            <div className="row ">
                <div className="cont-text col-lg-4 col-sm-12 ">
                    <img src="/img/bseller/logobest.svg" alt="" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="2000" data-aos-delay="300"/>
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">Autenticas</h3>
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" data-aos-delay="100">
                        caseras</h3>
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="200">
                        Diversas</h3>
                    <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="300">
                        deliciosas</h3>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-center align-items-center">

                    <div className="img-cont  ">
                        <img src="/img/bseller/Maskgroup1.png" alt="" data-aos="fade-down-right"
                            data-aos-easing="linear" data-aos-duration="1500" loading="lazy"/>
                        <img src="/img/bseller/Maskgroup2.png" alt="" data-aos="fade-up-right"
                            data-aos-easing="linear" data-aos-duration="1500" loading="lazy"/>
                        <img src="/img/bseller/Maskgroup3.png" alt="" data-aos="fade-up-left"
                            data-aos-easing="linear" data-aos-duration="1500" loading="lazy"/>
                        <img src="/img/bseller/Maskgroup4.png" alt="" data-aos="fade-down-left"
                            data-aos-easing="linear" data-aos-duration="1500" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>

    </section>

  )
}
