import React from 'react'
import { Link } from 'react-router-dom'

export default function BanEventos() {
    return (
     

            <section className="sect-events">

                <div className="cont-dats">
                    <h2>invitanos a tu fiesta</h2>
                    <h3>siempre en loe mejores eventos</h3>
                    <Link to={'/events'} className="btn-prin">Ver mas</Link>
                </div>

                <div className="cont-images">
                    <img src="/img/events/P1244319.jpg" alt="" loading="lazy" />
                    <img src="/img/events/P1244338.jpg" alt="" loading="lazy" />
                    <img src="/img/events/bg-event.jpg" alt="" loading="lazy" />
                    <img src="/img/events/P1244363 (1).jpg" alt="" loading="lazy" />
                    <img src="/img/events/P1244348-1.jpg" alt="" loading="lazy" />
                </div>

            </section>

       
    )
}
