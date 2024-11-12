import { useEffect, useState } from 'react'
import { endPurchase, getCartsById } from '../../services/cartsServices';
import { Link, useParams } from 'react-router-dom';
import NavDash from './components/NavDash';
import DataUser from './components/DataUser';



function EditOrder() {

    const [productsOrder, setProductsOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState([])
    const { cid } = useParams()


    useEffect(() => {
        const getCarts = async () => {

            const carts = await getCartsById(cid)

            setProductsOrder(carts.data.payload.products)
            setTotalPrice(carts.data.payload.totalPrice)
        }


        getCarts()

    }, [])

    let total = 0;
    //Calcula total
    productsOrder.map(producto => { total += (producto.pid.precio * producto.quantity) })

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const purchase = async (id) => {
        try {

            const result = await endPurchase(id)
            if (result) {
                Swal.fire({
                    title: 'Acción realizada con éxito',
                    text: 'Serás redirigido en unos momentos...',
                    icon: 'success',
                    timer: 2500, 
                    showConfirmButton: false, // No mostrar el botón de confirmación
                });
        
                // Espera unos minutos antes de redirigir (en este ejemplo, 2 minutos = 120000 ms)
                await delay(2000);
                window.location.href = '/menu'

                // const clonProds = structuredClone(productsOrder);
                // const index = clonProds.findIndex(prod => prod.id === id);
                // clonProds.splice(index, 1);
                // setProductsOrder(clonProds);
            }

            

        } catch (error) {
            console.log(error);

        }
    }


    return (

        // <>

        <div className="wrapper ">
            <NavDash />
            <div className="contMen " >

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
                        {/* <form onSubmit={handleSubmit()} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-100"> */}

                        <h3 className='d-flex justify-content-center align-items-center w-100 mb-3'> Finalizar compra</h3>

                        {



                            productsOrder.length > 0 ?

                                <div>
                                    <div id="productsCarr" className="productsCarr ">
                                        {
                                            productsOrder.map((producto, index) => {


                                                return (
                                                    <div className="prodCarr" key={index}>
                                                        <img className="imgPro" src={producto.pid.thumbnail} alt="" />
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
                                                              <p className="text-end fst-italic text-body-secondary">
                                                                - {producto.size.nombre} +${producto.size.precio}
                                                              </p>
                                                            </>
                                                            : null
                                                        }
                    
                                                        {
                                                          producto.selectedRevolcado != null ?
                                                            <>
                                                              <span >Sabor revolcado: </span>
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
                                                              <ul className="text-end fst-italic text-body-secondary">
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
                                                        <p>$
                                                          {/* {console.log(producto.pid.precio)}
                                                          {console.log(producto.size ? producto.size.precio : 0)}
                                                          {console.log(producto.selectedRevolcado ? producto.selectedRevolcado.precio : 0)}
                                                          {console.log(producto.ingredientesExtra.length > 0 ? producto.ingredientesExtra.reduce((acc, prod) => acc + prod.precio, 0) : 0)}
                                                          {console.log(producto.quantity)}
                                                          {console.log('vvvvvvvvvvvvvvvvvvvvvvvvvv')} */}
                                                          {
                                                            ((producto.pid.precio) +
                                                              (producto.size ? producto.size.precio : 0) +
                                                              (producto.selectedRevolcado ? producto.selectedRevolcado.precio : 0) +
                                                              (producto.ingredientesExtra.length > 0 ? producto.ingredientesExtra.reduce((acc, prod) => acc + prod.precio, 0) : 0)) *
                                                            (producto.quantity)
                                                          }
                                                        </p>
                                                      </div>
                                                      {/* <button className="btnEliminar" onClick={() => deleteProdCart(index)}><i className="bi bi-trash-fill"></i></button> */}
                                                    </div>
                                                  )

                                            })

                                        }


                                    </div>

                                    <div id="accCarr" className="accCarr ">
                                        <div className="dvVaciar">
                                        </div>
                                        <div className="dvCalcu">
                                            <div className="total">
                                                <p>Total</p>
                                                <p>💲 {totalPrice} </p>
                                            </div>
                                            <button className="btn-prin btnComprar" onClick={() => { purchase(cid) }}>Fianalizar comprar</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <h2 id="carVacio" className="carVacio ">
                                    No hay productos.
                                    <i className="bi bi-emoji-frown"></i>
                                </h2>

                        }


                    </div>


                }


            </div>
        </div>
        // </>

    )
}

export default EditOrder