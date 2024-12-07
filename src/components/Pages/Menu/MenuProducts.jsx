
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetCategories } from '../../../Hooks/useProducts';
import { CarContext } from '../../../context/CarContext';
import AuthContext from '../../../context/AuthContext';
export default function MenuProducts() {
    
    const { categories, isLoading } = useGetCategories();
    
    const { count, idCard, isEdit } = useContext(CarContext);
    

    const location = useLocation(); // Hook para obtener la ruta actual

    // Estado para la categoría seleccionada, inicializado desde localStorage si existe
    const [selectedCategory, setSelectedCategory] = useState(
        () => localStorage.getItem('selectedCategory') || null
    );

    // Actualiza la categoría seleccionada en el estado y en localStorage
    const handleCategoryClick = (cateId) => {
        setSelectedCategory(cateId);
        localStorage.setItem('selectedCategory', cateId);
    };

    // Verifica si la ruta es "/menu" para limpiar la selección de categoría
    useEffect(() => {
        if (location.pathname === '/menu' || location.pathname === '/cart') {
            setSelectedCategory(null);
            localStorage.removeItem('selectedCategory');
        }
    }, [location.pathname]); // Ejecuta el efecto cada vez que cambia la ruta

    



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

                            {

                                categories.map((cate) => {
                                    return (
                                        <>
                                            <div 
                                                key={cate.ids} 
                                                className=" container d-flex flex-wrap flex-column justify-content-center align-items-between gap-2 text-center"
                                                onClick={() => handleCategoryClick(cate.ids)} >
                                                {/* onClick={() => setSelectedCategory(cate.ids)}> */}
                                            
                                            <Link   key={cate.ids} to={`/menu/category/${cate.ids}`} >
                                                <img src={cate.thumbnail} alt="" className='w-100' />
                                                <p className={`p-2 mt-2 ${selectedCategory === cate.ids ? 'catSelectActive' : ''}`} >{cate.nombre}</p>
                                                {/* <li className="btn-transparent btnMenu btnMenuProducto">
                                                    {cate.nombre}

                                                </li> */}
                                            </Link>
                                            </div>

                                        </>
                                    )
                                })
                            }
                    </ul>



                </div>
            }

        </>

    )
}


