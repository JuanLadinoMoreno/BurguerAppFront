import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {

    const [isExpanded, setIsExpanded] = useState(false)

    const handleSubmit = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <nav id="top-nav">

                <Link to='/'>
                    <img src='/img/logoSl.png' className='nav-logo' alt="" loading="lazy"/>
                </Link>
                <ul>
                    <Link to='/'>Inicio</Link>
                    <Link to='/menuIndex'>Menu</Link>
                    <Link to='/grill'>Al grill</Link>
                    <Link to='/events'>Eventos</Link>
                    <li>

                    </li>
                </ul>


                <div className='icons '>
                    <a href="https://www.facebook.com/chinawuays1" target='blanck'><i className="fab fa-facebook-f"></i></a>
                    <a href=""> <i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                </div>



                <div className="toogle-btn" onClick={handleSubmit}>
                    <i className={`fa-solid fa-bars ${isExpanded ? 'fa-solid fa-xmark' : ''} `}></i>
                </div>

            </nav>


            {/* <div className="dropdown-menus" > */}
            <div className={` ${isExpanded ? 'opens' : ''} dropdown-menus`}>
                <ul>
                    <Link to='/'>Inicio</Link>
                    <Link to='/menuIndex'>Menu</Link>
                    <Link to='/grill'>Al grill</Link>
                    <Link to='/events'>Eventos</Link>
                </ul>
            </div>
        </>

    );
}
