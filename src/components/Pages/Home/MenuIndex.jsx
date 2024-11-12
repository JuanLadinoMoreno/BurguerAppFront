import React from 'react'
import { Link } from 'react-router-dom'


export default function MenuIndex() {
  return (
    <section className="menu-index ">
        <div className="row w-100">
            <div className="cont-menu-index col-lg-4 col-md-4 col-sm-12">
                <h3>hamburguesas</h3>

                <p>
                    {/* Nuestras hamburguesas están elaboradas con carne 100% de res, sazonada con una mezcla especial de especias. Servidas en un suave pan blanco, acompañadas de aderezos selectos, jitomate fresco y un toque de cebolla picante que despierta los sentidos */}
                    Sabores Que Te Conquistan
                </p>
                <ul>
                    <li>Tradicional </li>
                    <li>Tocino </li>
                    <li>Hawaiana</li>
                    <li>Champiñones</li>
                    <li>Mexicana</li>
                </ul>
                <Link to={"/menuIndex"} className="btn-transparent" > Ver mas</Link>
                <img src="/img/menu/burguers/burgMex.png" alt="" loading="lazy"/>
            </div>

            <div className="cont-menu-index col-lg-4 col-md-4 col-sm-12">
                <h3>Baguettes</h3>
                <p>
                    Artesanales y Llenas de Sabor
                </p>
                <ul>
                    <li>Pollo</li>
                    <li>Pierna Adobada</li>
                    <li>Cochinita Pibil</li>
                    <li>Milanesa</li>
                </ul>
                <Link to={"/menuIndex"} className="btn-transparent" > Ver mas</Link>
                <img src="/img/menu/baguettes/baguet.png" alt="" loading="lazy"/>
            </div>

            <div className="cont-menu-index col-lg-4 col-md-4 col-sm-12">
                <h3>Sanwiches</h3>
                <p>
                    Una Obra Maestra Entre Dos Panes
                </p>
                <ul>
                    <li>Pollo</li>
                    <li>Pierna Adobada</li>
                    <li>Cochinita Pibil</li>
                    <li>Milanesa</li>
                </ul>
                <Link to={"/menuIndex"} className="btn-transparent" > Ver mas</Link>
                <img src="/img/menu/sandwiches/sandw.png" alt="" loading="lazy"/>
            </div>
            
            <div className="cont-menu-index col-lg-6 col-md-6 col-sm-12">
                <h3>Hotdogs</h3>
                <p>
                    Tradición y Originalidad en Cada Bocado
                </p>
                <ul>
                    <li>Tradicional</li>
                    <li>Revolcado</li>
                    <li>Gran Danés</li>
                </ul>
                <Link to={"/menuIndex"} className="btn-transparent" > Ver mas</Link>
                <img src="/img/menu/hotdogs/hotdog.png" alt="" loading="lazy"/>
            </div>

            <div className="cont-menu-index col-lg-6 col-md-6 col-sm-12">
                <h3>Burritos</h3>
                <p>
                    Envueltos en Sabor                    
                </p>
                <ul>
                    <li>Pollo</li>
                    <li>Pierna Adobada</li>
                    <li>Cochinita Pibil</li>
                    <li>Milanesa</li>
                </ul>
                <Link to={"/menuIndex"} className="btn-transparent" > Ver mas</Link>
                <img src="/img/menu/burritos/hotGrand.png" alt="" loading="lazy"/>
            </div>

        </div>

    </section>
  )
}
