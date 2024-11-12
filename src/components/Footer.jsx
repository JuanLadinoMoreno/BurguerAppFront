import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer>

            {/* <div class="container">
                <div class="d-flex justify-content-center align-items-center">
                    <div className="icons">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""> <i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <hr class="dropdown-divider"></hr>

                    <p class="copyright">Company Name © 2018</p>
                </div>
            </div> */}

            <div className='bg-foot'></div>

            

            <div className=" food-icons d-flex justify-content-center align-items-center flex-wrap col-md-12 gap-5">
                <a className='' href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""> <i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-wrap col-md-8 '>

                <div className="d-flex justify-content-center align-items-center flex-wrap col-md-9 col-sm-12 gap-4 mt-1">
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/menuIndex"}>Menú</Link>
                    <Link to={"/grill"}>Al grill</Link>
                    <Link to={"/events"}>Eventos</Link>
                </div>

                <div className=" col-md-3 col-sm-12 d-flex flex-column justify-content-center align-items-center  p-2">
                    <img src="/img/logoSl.png" alt="" />
                    <Link to={"/session/login"} className='fs-6'> <span className='w-100'>Burguer Robles <i className="bi bi-person-lock ms-2 p-1 border border-warning border-3 rounded-circle fs-5"></i></span></Link>
                    
                </div>
            </div>
            
            <p className='col-md-12'>© 2023. All Rights Reserved</p>
        </footer>
    )
}
