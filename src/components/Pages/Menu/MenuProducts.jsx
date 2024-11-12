
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../../Hooks/useProducts';
import { CarContext } from '../../../context/CarContext';
import AuthContext from '../../../context/AuthContext';
export default function MenuProducts() {
    
    const { categories, isLoading } = useGetCategories();
    
    const { count, idCard, isEdit } = useContext(CarContext);
    const {  } = useContext(AuthContext);

    // console.log('categories', categories);



    return (
        <>
            {
                // isLoading ?

                // <h2>cargando</h2> :

                <div className="dvMenProductos">
                    {

                        isEdit ? 
                            <p className="idCard d-flex justify-content-center align-items-center gap-3 text-center fs-4 color-warning fst-italic text-uppercase w-75 " >
                                <span className="fs-2 fw-light text-lowcase"> Editar orden </span>  ID: {idCard.substr(-4, 4)}  
                            </p> : 
                            <h3 className='d-flex justify-content-center w-75 '> Crear orden</h3>
                        // idCard ? <p className="idCard text-center fs-5 color-warning fst-italic text-uppercase"> <span className="fs-6 fw-light text-lowcase"> (editando) </span> <br /> ID: {idCard}  </p> : <h3 className='d-flex justify-content-center w-75 '> Creando carrito</h3>
                        // idCard ? <h3 className='d-flex justify-content-center w-75 '> Creando carrito <span>{idCard}</span> </h3>  : <h3 className='d-flex justify-content-center w-75 '> Creando carrito</h3>

                    }

                    <Link className="btn-transparent" to='/cart'>

                        <i className="bi bi-cart-fill"></i>
                        En carrito

                        <span id="cantidadProductos" className="prodCant "> {count.reduce((acc, prod) => acc + prod.quantity, 0)} </span>

                    </Link>

                    <ul className="ulMenu " >

                        {/* <div className="container "> */}



                            {/* <Link to='/menu' >
                                <img src="../../public/img/bgTripl.png" alt="" className='w-50' />
                                <li className="btn-prin btnMenu btnMenuProducto">
                                    Todos los productos
                                </li>
                            </Link> */}

                            {

                                categories.map((cate) => {
                                    return (
                                        <>
                                            <div key={cate.ids} className="container d-flex flex-wrap flex-column justify-content-center align-items-between gap-2 text-center">
                                            
                                            <Link key={cate.ids} to={`/menu/category/${cate.ids}`} >
                                                <img src={cate.thumbnail} alt="" className='w-100' />
                                                <p>{cate.nombre}</p>
                                                {/* <li className="btn-transparent btnMenu btnMenuProducto">
                                                    {cate.nombre}

                                                </li> */}
                                            </Link>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        {/* </div> */}
                    </ul>



                </div>
            }

        </>

    )
}


