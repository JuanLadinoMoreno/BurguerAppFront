import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { endPurchase, getCartsById, getCartsByUserId } from '../../../services/cartsServices'
import { useAuth } from '../../../context/AuthContext'
import NavDash from './NavDash'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CarContext } from '../../../context/CarContext'
import DataUser from './DataUser'


export const TableCarts = () => {
    const { cid } = useParams()

    const { user } = useAuth()
    const { isEdit, setIsEdit, count, setCount, idCard, setIdCard, idCustomer, setIdCustomer } = useContext(CarContext)

    const [CartsByUser, setCartsByUser] = useState([])

    // console.log('user-------------->   ', user);
    useEffect(() => {
        const getCarts = async () => {


            const carts = await getCartsByUserId(user.id)
            // console.log('carts-----------------    ', carts.data.payload);

            if (carts) {

                setCartsByUser(carts.data.payload)
                // console.log('s', CartsByUser);
            }
        }


        getCarts()

    }, [])

    const purchase = async (id) => {
        try {

            const result = await endPurchase(id)
            if (result) {
                Swal.fire("Tiket creado correctamente", "", "warning");

                const clonProds = structuredClone(CartsByUser);
                const index = clonProds.findIndex(prod => prod.id === id);
                clonProds.splice(index, 1);
                setCartsByUser(clonProds);
            }

        } catch (error) {
            console.log(error);

        }
    }

    const forEdit = async (cid) => {
        const carts = await getCartsById(cid)
        console.log(' >>>>>>>>>>>>>> idProd forEdit()', carts.data.payload);

        const cartItems = carts.data.payload.products.map(product => ({
            pid: product.pid._id,
            quantity: product.quantity,
            size: product.size,
            ingredientesExtra: product.ingredientesExtra,
            selectedRevolcado: product.selectedRevolcado

        }));
        console.log(' ________>>>>>>>>>>>>>>', cartItems);

        // setCount([])
        setCount(cartItems)
        setIsEdit(true)
        setIdCard(cid)
        setIdCustomer(carts.data.payload.customer)
        console.log('count-----  ', count);

    }

    return (


        <>
            <div className="wrapper ">
                <NavDash />
                <div className="main">
                <div className="contMen " >


{/* <div className=" d-flex flex-row-reverse p-3 border-bottom border-warning border-2 w-100">
    <Link to={""}>
        <i className="bi bi-person-x p-2"> LogOut </i>
    </Link>
</div> */}
<DataUser />


{
    // isLoading ?

    //     <l-dot-spinner
    //         size="80"
    //         speed="1.1"
    //         color="#0F1854"
    //     >
    //     </l-dot-spinner> :


    <div className="contCarr container">
        <h2 className='text-center'>Ordenes</h2>
        <div id="productsCarr" className="productsCarr ">
            {

                !CartsByUser.length > 0 ?
                    <h2>No hay ordenes creadas</h2> :
                    (

                        // roblesAdmin89
                        // roblesAdmin89.$


          CartsByUser.map((cart) => {
                            return (
                                
                                <div className="prodCarr" key={cart.id}>
                                    {console.log('----------------------', cart ) }
                                    <div className="titu">
                                        <small>CartId</small>
                                        <p>
                                            {
                                                cart.id.substr(-4, 4)                                                            
                                            }
                                        </p>
                                    </div>
                                    <div className="cantidad">
                                        <small>Cliente</small>
                                        <p>
                                            {console.log('cart.customer', cart.customer)}
                                            {
                                                !cart.customer ? 
                                                    'Sin cliente' : 
                                                    (cart.customer.firstName.toUpperCase() + ' ' + cart.customer.lastName.toUpperCase() )
                                            }
                                        </p>
                                    </div>
                                    <div className="cantidad">
                                        <small>Status</small>
                                        <p>{cart.status}</p>
                                    </div>
                                    <div className="precio">
                                        <small>Productos</small>
                                        {/* {console.log('cart.products------', cart.products)} */}
                                        {
                                            cart.products.map((producto) => {
                                                return (
                                                    // !product.id.nombre ? (

                                                    <div key={producto.id} className="mb-2 border-bottom border-warning ">
                                                        {/* <hr /> */}
                                                        {/* {console.log('product.pid------', producto.pid)} */}
                                                        <ul className=''>
                                                            <li>{producto.quantity} - {producto.pid.nombre}</li>
                                                        </ul>
                                                        {
                                                            producto.size != null ? <p className="text-end fst-italic text-body-secondary"><span>Tamaño: </span> <br /> {producto.size.nombre} +${producto.size.precio}</p> : null
                                                        }
                                                        {
                                                            producto.selectedRevolcado != null ? <p className="text-start fst-italic text-body-secondary"> <span>Sabor revolcado: </span> <br /> {producto.selectedRevolcado.nombre} +${producto.selectedRevolcado.precio}</p> : null
                                                        }
                                                        {
                                                            producto.ingredientesExtra.length > 0 ?
                                                                <ul className="text-start fst-italic text-body-secondary">
                                                                    <span>Ingredientes extra: </span> <br />
                                                                    {/* <li> */}
                                                                    {
                                                                        producto.ingredientesExtra.map(ingre => (

                                                                            <li>
                                                                                {
                                                                                    ' - ' + ingre.nombre + ' +$' + (ingre.precio)
                                                                                }

                                                                            </li>

                                                                        ))
                                                                    }
                                                                    {/* </li> */}
                                                                    {/* <hr /> */}
                                                                </ul>
                                                                // <p> <span>Ingredientes extra: </span> <br/>
                                                                //   {
                                                                //      producto.ingredientesExtra.map(ingre => (
                                                                //       ' - ' + ingre.nombre + ' +$' + (ingre.precio) 
                                                                //     )) 
                                                                //   }
                                                                // </p>

                                                                : null
                                                        }
                                                        {/* <p>- {product.pid.nombre}</p> */}
                                                        {/* <p>- {product.pid ? product.pid.nombre : 'Producto no disponible'}</p> */}
                                                        {/* <p><strong>Cantidad:</strong> {product.quantity}</p> */}

                                                    </div>
                                                    // ) : (<p>Sin Productos</p>)
                                                )

                                            })
                                        }
                                        {
                                        }
                                    </div>
                                    {/* <div className="subtotal">
                                        <small>Subtotal</small>
                                        <p>klskdjflksjdfljkljd</p>
                                    </div> */}
                                    <div>
                                        <small>Agregar productos</small>
                                        <Link className="  mb-2" to={`/cart/`} onClick={() => { forEdit(cart._id) }}>
                                            <i className="bi bi-cart-plus fs-4"></i>
                                        </Link>

                                    </div>

                                    <div >
                                        <small>Crear tiket</small>
                                        <Link className=" mb-2" to={`/dash/order/${cart._id}`}>
                                            <i className=" bi bi-ticket-perforated fs-4"></i>
                                        </Link>

                                    </div>


                                    {/* <button className="btnEliminar" onClick={() => { purchase(cart._id) }} >
                                        <i className="bi bi-ticket-perforated fs-3"></i>
                                    </button> */}
                                </div>
                            );
                        })
                    )
            }
        </div>
    </div>


}

{/* <BanEventos /> */}

</div>
                </div>                
            </div>
        </>

    )

}