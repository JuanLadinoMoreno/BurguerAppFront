import { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { endPurchase, getCartsById, getCartsByUserId, getCartsByUserInBranch, updCartToCanceled } from '../../../services/cartsServices'
import { useAuth } from '../../../context/AuthContext'
import NavDash from './NavDash'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CarContext } from '../../../context/CarContext'
import DataUser from './DataUser'
import ModalDataOrder from './ModalDataOrder'


export const TableCarts = () => {
    const { cid } = useParams()

    const { user } = useAuth()
    const { isEdit, setIsEdit, count, setCount, idCard, setIdCard, idCustomer, setIdCustomer, setOrderType, setTableNumber } = useContext(CarContext)

    const [CartsByUser, setCartsByUser] = useState([])

    // console.log('user-------------->   ', user);
    useEffect(() => {
        const getCarts = async () => {


            const carts = await getCartsByUserInBranch(user.id, user.branch.id)
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
        setOrderType(carts.data.payload.orderType)
        setTableNumber(carts.data.payload.tableNumber)
        console.log('count-----  ', count);

    }

    const changeStateCanceled = async (cid) => {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        try {

            const result = await Swal.fire({

                title: "Seguro desea cancelar la orden?",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar"
            })


            if (result.isConfirmed) {
                try {
                    const resp = await updCartToCanceled(cid)
                    console.log('resp', resp);

                    if (resp) {
                        // Swal.fire("Orden cancelada","","success")
                        Swal.fire({
                            title: 'Acción realizada con éxito',
                            text: 'Serás redirigido en unos momentos...',
                            icon: 'success',
                            timer: 1800,
                            showConfirmButton: false, // No mostrar el botón de confirmación
                        });

                        // Espera unos minutos antes de redirigir (en este ejemplo, 2 minutos = 120000 ms)
                        await delay(1500);
                        window.location.href = '/menu'
                    } else {
                        Swal.fire("No fue posible cancdelar la orden", "", "error")
                    }
                } catch (error) {
                    if (error.response) {
                        Swal.fire("Problemas al cancelar la orden", "", "error")
                        console.log('error', error);

                    } else {
                        console.log('error', error);
                        Swal.fire("Error al cancelar orden", "Error desconocido", "danger");
                    }
                }

            }


        } catch (error) {
            console.log('error', error);
        }
    }

    const [rowSelected, setRowSelected] = useState(null)
    const openModal = (row) => {
        setRowSelected(row)
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
                                            <h2 className='text-center text-danger'>No hay ordenes creadas</h2> :
                                            (

                                                // roblesAdmin89
                                                // roblesAdmin89.$


                                                CartsByUser.map((cart) => {
                                                    return (

                                                        <div className="prodCarr" key={cart.id}>
                                                            {console.log('----------------------', cart)}
                                                            <div className="titu">
                                                                <small>Id</small>
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
                                                                            (cart.customer.firstName.toUpperCase() + ' ' + cart.customer.lastName.toUpperCase())
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <small>Tipo</small>
                                                                <p>{cart.orderType}</p>
                                                            </div>
                                                            <div>
                                                                <small>Mesa</small>
                                                                <p>{cart.tableNumber === 0 ? '' : cart.tableNumber}</p>
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
                                                            {/* <div>
                                                                <small>Productos</small>
                                                                <button className="  mb-2 "  data-bs-toggle="modal" data-bs-target="#modalOrderCustomer" onClick={() => openModal(cart)}>
                                                                    <i className="bi bi-eye fs-4"></i>
                                                                </button>

                                                            </div> */}
                                                            <div>
                                                                <small>Agregar productos</small>
                                                                <Link className="  mb-2 " to={`/cart/`} onClick={() => { forEdit(cart._id) }}>
                                                                    <i className="bi bi-cart-plus fs-4"></i>
                                                                </Link>

                                                            </div>

                                                            <div >
                                                                <small>Crear tiket</small>
                                                                <Link className=" mb-2 " to={`/dash/order/${cart._id}`}>
                                                                    <i className=" bi bi-ticket-perforated fs-4"></i>
                                                                </Link>

                                                            </div>

                                                            <div >
                                                                <small>Cancelar</small>
                                                                <button className=" mb-2 " onClick={() => { changeStateCanceled(cart._id) }}>
                                                                    <i className=" bi bi-x-circle fs-4"></i>
                                                                </button>

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
                        {/* <ModalDataOrder rowSelected={rowSelected} /> */}

                    </div>
                </div>
            </div>
        </>
    )

}