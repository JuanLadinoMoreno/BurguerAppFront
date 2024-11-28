import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavDash() {

  const [isExpanded, setIsExpanded] = useState(true)


  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <aside id="sidebar " className={`sidebar ${isExpanded ? 'expand' : ''} `}>
        {/* <aside id="sidebar " className={`sidebar ${isExpanded ? 'expand' : ''}  z-3 position-absolute`}>  para q salga en frente */}
        {/* <aside id="sidebar " className="d-flex flex-column navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed bg-danger"> */}
        {/* <aside id="sidebar " className="d-flex flex-column navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed bg-danger"> */}
        <div className="d-flex ">

          <button className="toggle-btn " type="button" onClick={handleToggle}>
            <i className="bi bi-list fs-3"></i>
          </button>

          <div className="sidebar-logo ">
            <a href="#" className=' '>Burguer Robles</a>
          </div>
        </div>

        <ul className="sidebar-nav ">

          <li className="sidebar-item">
            <Link to={"/menu"} className="sidebar-link">
              <i className="bi bi-clipboard2-plus fs-4"></i>
              <span>Crear orden</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to={"/dash/carts/user"} className="sidebar-link">
              <i class="fa-regular fa-rectangle-list fs-4"></i>
              <span>Mis Ordenes</span>
            </Link>
          </li>

          

          <li className="sidebar-item">
            <Link to={"/menu/products"} className="sidebar-link">
              <i class="fa-solid fa-burger fs-4"></i>
              <span>Productos</span>
            </Link>

          </li>


          <li className="sidebar-item">
            <Link to={"/dash/users"} className="sidebar-link">
            <i class="fa-regular fa-user fs-4"></i>
              <span>Usuarios</span>
            </Link>

          </li>

          <li className="sidebar-item">
            <Link to={"/dash/customers"} className="sidebar-link">
            <i class="fa-solid fa-person fs-4"></i>
              <span>Clientes</span>
            </Link>

          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
              data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
              <i className="bi bi-clipboard2-data fs-4"></i>
              <span>Pedidos</span>
            </a>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">Login</a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">Register</a>
              </li>
            </ul>
          </li>
          {/* <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                <i className="lni lni-layout"></i>
                <span>Multi Level</span>
              </a>
              <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse"
                    data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                    Two Links
                  </a>
                  <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">Link 1</a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">Link 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </a>
            </li> */}
        </ul>
        {/* <div className="sidebar-footer">
            <a href="#" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div> */}
      </aside>
    </>
  )
}

export default NavDash