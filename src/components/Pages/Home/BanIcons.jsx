import React from 'react'

export default function BanIcons() {
  return (
    <section className="sect-icons">
        <div className="cont-icons">
            <div className="card-icon wow fadeInLeft slow">
                <img className="icon-card" src="/img/icons/aniversarios.png" alt="" loading="lazy"/>
                <p>Más de 31 años de experiencia nos avalan en cada plato. Somos maestros en el arte de la parrilla y la cocina tradicional, brindándote siempre lo mejor. </p>
            </div>

            <div className="card-icon">
                <img className="icon-card" src="/img/icons/lechugas.png" alt="" loading="lazy"/>
                <p>Nuestros ingredientes provienen directamente del campo, garantizando frescura y sabor en cada bocado. La calidad comienza con la selección de lo mejor. </p>
            </div>

            <div className="card-icon">
                <img className="icon-card" src="/img/icons/chile.png" alt="" loading="lazy"/>
                <p>Atrévete a probar nuestras salsas artesanales de chile habanero, elaboradas en casa con recetas únicas que capturan el verdadero espíritu del sabor casero. </p>
            </div>
        </div>
    </section>
  )
}
