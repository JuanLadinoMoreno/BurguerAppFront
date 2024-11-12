import React from 'react'
import { Link } from 'react-router-dom'

export default function BanAsados() {
  return (
    <section className="ban-asados">
    <div className="bg-blue"></div>
    <h2>Conoce los asados</h2>
    <div className="cont-bot">
        <p className='fs-5'>
        "Cada bocado es una explosión de sabor que te transportará al corazón de nuestras parrillas. ¡Ven y disfruta de una experiencia única en cada mordida!"
        </p>
            <Link to={'/grill'} className="btn-transparent">Ver Mas</Link>
    </div>
</section>
  )
}
