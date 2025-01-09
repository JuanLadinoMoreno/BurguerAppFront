import React from 'react'
import { updCartToCanceled } from '../../../services'
import Swal from 'sweetalert2'

function ModalDataOrder({ rowSelected }) {

    const updCartToCancel = async (id) => {
        const resp = await updCartToCanceled(id)
        if(resp) {
            // Swal.fire("Cambiado correctamente","","success")
            window.location.reload()
        }else{
            Swal.fire("Error al cambiar estado","","error")
        }
    }


    return (
        <>
            <div className="modal fade" id="modalOrderCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    {/* <div className="row"></div> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <section className="container d-flex justify-content-center align-item-center pb-4 mt-0">

                                <div className="contCarr container">

                                    {

                                        <div>

                                            {
                                                rowSelected != null ?
                                                    <>
                                                        <div className="d-flex justify-content-end align-items-center gap-5  ">
                                                            {/* <p> */}
                                                            <h3 className='float-start '> No. <span className='font-monospace text-success'>{rowSelected._id.substr(-4, 4)}</span> </h3>
                                                            {
                                                                rowSelected.status === 'created' ?
                                                                    // <button className='btn btn-danger'> <i className='bi bi-x-circle fs-4'></i></button> :
                                                                    <div class="form-check form-switch ">
                                                                        <p className='text-uppercase fs-4'>Estado: 
                                                                            <span className='badge rounded-pill text-bg-primary'>

                                                                            {rowSelected.status}
                                                                            </span>
                                                                            </p>
                                                                        <input class="form-check-input fs-4" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => {updCartToCancel(rowSelected._id)}} />
                                                                        <label class="form-check-label text-danger fs-6 text-uppercase" for="flexSwitchCheckDefault">Cancelar orden</label>
                                                                    </div> :
                                                                    <p className='text-uppercase fs-4 d-flex flex-column'>
                                                                        Estado:
                                                                        <span className={`fs-6 ${
                                                                                                rowSelected.status === 'canceled' ? 'badge rounded-pill text-bg-danger' : 
                                                                                                rowSelected.status === 'finalized' ? 'badge rounded-pill text-bg-success' : 
                                                                                                rowSelected.status === 'created' ? 'badge rounded-pill text-bg-success' : 
                                                                                                ''
                                                                                        }
                                                                                        `}>
                                                                            {rowSelected.status}

                                                                        </span>
                                                                    </p>
                                                            }
                                                            {/* </p> */}


                                                            <div className='fs-5'>
                                                                <p className='fw-lighter'>Cliente:
                                                                    <br />
                                                                    <span className='fw-lighter text-uppercase fs-6'>

                                                                        {rowSelected.customer != null ? ' ' + rowSelected.customer.firstName + ' ' + rowSelected.customer.lastName : ' Sin Cliente'}
                                                                    </span>

                                                                </p>

                                                            </div>
                                                            
                                                            <div className='fs-5'>
                                                                <p className='fw-lighter'>Tipo:
                                                                    <br />
                                                                    <span className='fw-lighter text-uppercase fs-6'>
                                                                        {rowSelected.orderType }
                                                                    </span>

                                                                </p>

                                                            </div>

                                                            <div className='fs-5'>
                                                                <p className='fw-lighter'>Mesa:
                                                                    <br />
                                                                    <span className='fw-lighter text-uppercase fs-6'>
                                                                        {rowSelected.tableNumber}
                                                                        {/* {rowSelected.tableNumber == 0 ? rowSelected.tableNumber : 'N/A'} */}
                                                                    </span>

                                                                </p>

                                                            </div>

                                                            <div className="dvCalcu ">
                                                                <div className="total fs-4">
                                                                    <p>Total</p>
                                                                    <p>💲 {rowSelected.totalPrice} </p>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* <div className=""> */}
                                                        <div className="productsCarr ">

                                                            {

                                                                rowSelected.products.map((producto, index) => {
                                                                    return (
                                                                        <div className="prodCarr" key={index}>
                                                                            {/* <img className="imgPro" src={producto.productData.urlImg} alt="" /> */}
                                                                            <div className="titu">
                                                                                <small>Producto</small>

                                                                                <p>{producto.pid.nombre}</p>

                                                                            </div>

                                                                            <div>
                                                                                <small>Extras</small>

                                                                                {
                                                                                    producto.size != null ?
                                                                                        <>
                                                                                            <sapn>Tamaño</sapn>
                                                                                            {/* <br /> */}
                                                                                            <p className="text-end fst-italic text-body-secondary">
                                                                                                {/* <span className="fs-5">Tamaño: </span> */}
                                                                                                - {producto.size.nombre} +${producto.size.precio}
                                                                                            </p>
                                                                                        </>
                                                                                        : null
                                                                                }

                                                                                {
                                                                                    producto.selectedRevolcado != null ?
                                                                                        <>
                                                                                            <span >Sabor revolcado: </span>
                                                                                            {/* <br /> */}
                                                                                            <p className="text-end fst-italic text-body-secondary">
                                                                                                - {producto.selectedRevolcado.nombre} +${producto.selectedRevolcado.precio}
                                                                                            </p>
                                                                                        </>
                                                                                        : null
                                                                                }

                                                                                {
                                                                                    producto.ingredientesExtra.length > 0 ?
                                                                                        <>
                                                                                            <span>Ingredientes extra: </span>
                                                                                            {/* <br /> */}
                                                                                            <ul className="text-end fst-italic text-body-secondary">
                                                                                                {/* <li> */}
                                                                                                {
                                                                                                    producto.ingredientesExtra.map(ingre => (

                                                                                                        <li className="text-end">
                                                                                                            {
                                                                                                                ' - ' + ingre.nombre + ' +$' + (ingre.precio)
                                                                                                            }

                                                                                                        </li>

                                                                                                    ))
                                                                                                }
                                                                                            </ul>

                                                                                        </>

                                                                                        : null
                                                                                }





                                                                            </div>
                                                                            <div className="cantidad">
                                                                                <small>Cantidad</small>
                                                                                <p>{producto.quantity}</p>

                                                                            </div>
                                                                            <div className="precio">
                                                                                <small>Precio</small>
                                                                                <p>$ {producto.pid.precio}</p>
                                                                            </div>
                                                                            <div className="subtotal">
                                                                                <small>Subtotal</small>
                                                                                {/* <p>$ {producto.productData.precio * producto.quantity}</p> */}
                                                                                <p>$
                                                                                    {
                                                                                        //  carrito.reduce((acc, producto) => acc + 

                                                                                        ((producto.pid.precio) +
                                                                                            (producto.size ? producto.size.precio : 0) +
                                                                                            (producto.selectedRevolcado ? producto.selectedRevolcado.precio : 0) +
                                                                                            (producto.ingredientesExtra.length > 0 ? producto.ingredientesExtra.reduce((acc, prod) => acc + prod.precio, 0) : 0)) *
                                                                                        (producto.quantity)

                                                                                        // (producto.quantity > 1 ? producto.quantity : 1)
                                                                                        // (producto.ingredientesExtra.length > ? )
                                                                                        // , 0)
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            {/* <button className="btnEliminar" onClick={() => deleteProdCart(index)}><i className="bi bi-trash-fill"></i></button> */}
                                                                        </div>
                                                                    )

                                                                })

                                                            }


                                                        </div>
                                                        {/* </div> */}
                                                    </>



                                                    : ''
                                            }



                                        </div>


                                    }


                                </div>

                            </section>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalDataOrder