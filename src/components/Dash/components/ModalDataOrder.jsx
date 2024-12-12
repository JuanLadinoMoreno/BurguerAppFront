import React from 'react'

function ModalDataOrder({ rowSelected }) {
    return (
        <>
            <section className="container d-flex justify-content-center align-item-center pb-4 mt-0 w-75">

                <div className="contCarr container">

                    {

                        <div>

                            {
                                rowSelected != null ?
                                    <>
                                        <div className="d-flex justify-content-end align-items-center gap-5  ">

                                            <h3 className='float-start '> Orden: <span className='font-monospace text-success'>{rowSelected._id.substr(-4, 4)}</span> </h3>

                                            <div className='fs-5'>
                                                <p className='fw-lighter'>Cliente:
                                                    <br />
                                                    <span className='fw-lighter text-uppercase fs-6'>

                                                        {rowSelected.customer != null ? ' ' + rowSelected.customer.firstName + ' ' + rowSelected.customer.lastName : ' Sin Cliente'}
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
                                                    { console.log('producto', producto) }
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

        </>
    )
}

export default ModalDataOrder