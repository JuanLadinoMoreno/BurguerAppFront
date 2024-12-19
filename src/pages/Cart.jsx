
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../context/CarContext"
import { obtenerDetallesProductos, useGetProductsById, useGetProductsCart } from "../Hooks/useProducts";
import { Head } from "../components/Head";
import BanEventos from "../components/Pages/Home/BanEventos";
import { Link } from "react-router-dom";
import MenuProducts from "../components/Pages/Menu/MenuProducts";
import { useForm } from 'react-hook-form';
import { getProductById, handlePurchase, onRegister, saveCart } from "../services";
import Cookies from 'js-cookie'
import NavDash from "../components/Dash/components/NavDash";
import { UpdateCart } from "../services/cartsServices";
import DataUser from "../components/Dash/components/DataUser";
import { useGetCustomers } from "../Hooks/useCustomers";
import { useAuth } from "../context/AuthContext";


// const deleteProd = (ob, func, id) => {

//   const newOb = structuredClone(ob);
//   const indexOb = newOb.findIndex(producto => producto.id === id);
//   newOb.splice(indexOb,1);
//   func(newOb);


//   // const newCart = structuredClone(cart);
//   // const indexFind = newCart.findIndex(producto => producto.id === id);
//   // newCart.splice(indexFind,1);
//   // setCart(newCart);
// }





export const Cart = () => {

  // count es el arreglo de los productos del carrito, solo viene el id y la cantidad
  const { count, setCount, isEdit, setIsEdit, idCard, setIdCard, idCustomer, setIdCustomer } = useContext(CarContext);
  // const [cartP, setCartP] = useState({})
  const { register, formState: { errors }, handleSubmit, watch, setValue } = useForm()

  const { usersData, setUsersData } = useGetCustomers()
  const { user } = useAuth()


  const { cart, setCart, productsData, isLoading } = useGetProductsCart(count)

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [customer, setCustomer] = useState('');

  const [quantityProd, setQuantityProd] = useState(0);


  // obtenerDetallesProductos(count)
  // .then((productosConDetalles) => {
  //   console.log('productosConDetalles', productosConDetalles);
  // })
  // .catch((error) => {
  //   console.error("Error al obtener los detalles de los productos:", error);
  // });


  const obtenerDetallesProductos = async (carrito) => {
    try {
      // Iterar sobre cada producto en el carrito y obtener sus detalles
      const productosConDetalles = await Promise.all(
        carrito.map(async (item) => {
          // Hacer una petición a la API para obtener los detalles del producto por su `pid`
          // const producto = useGetProductsById(item.pid);
          const producto = await getProductById(item.pid);
          const productData = producto.data.payload;



          // const response = await fetch(`/api/productos/${item.pid}`);
          // // Asegurarse de que la respuesta es válida
          // if (!response.ok) {
          //   throw new Error(`Error al obtener el producto con ID ${item.pid}`);
          // }

          // const producto = await response.json();


          // Devolver el objeto original del carrito, pero con los detalles del producto en lugar del `pid`
          return {
            ...item,
            productData // Aquí se agrega el objeto completo del producto
          };
        })
      );

      return productosConDetalles;
    } catch (error) {
      console.error('Error al obtener los detalles de los productos:', error);
      throw error;
    }
  };

  // let productosConDetalles 
  // const mostrarCarritoConDetalles = async () => {
  //   try {
  //        return await obtenerDetallesProductos(count);

  //     // return await obtenerDetallesProductos(count);
  //     console.log('productosConDetalles', productosConDetalles); // Aquí puedes usar los productos con detalles
  //   } catch (error) {
  //     console.error("Error al mostrar los productos:", error);
  //   }
  // };

  // const sumarExtras = () => {
  //   count.map((producto) => {
  //     producto.
  //   })
  // }

  useEffect(() => {
    const mostrarCarritoConDetalles = async () => {
      try {
        const newCart = structuredClone(count);
        const productosDetalles = await obtenerDetallesProductos(newCart);
        setCarrito(productosDetalles)
        calcularTotal(productosDetalles)
        // return await obtenerDetallesProductos(count);
        // console.log('productosConDetalles', productosDetalles); // Aquí puedes usar los productos con detalles
      } catch (error) {
        console.error("Error al mostrar los productos:", error);
      }
      !isEdit ? "" : setCustomer(idCustomer)
    }

    mostrarCarritoConDetalles()
  }, [count])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const productosConDetalles = await mostrarCarritoConDetalles();
  //       setCarrito(productosConDetalles); // Guardar los productos en el estado
  //       // setIsLoading(false); // Terminar la carga
  //       calcularTotal(productosConDetalles); // Calcular el total
  //     } catch (error) {
  //       console.error('Error al obtener los detalles del carrito:', error);
  //       // setIsLoading(false); // Asegurarse de quitar el estado de carga incluso si hay error
  //     }
  //   };

  //   fetchData();
  // }, []);



  const calcularTotal = (carrito) => {

    const totalCalculado = carrito.reduce((acc, producto) => acc +
      // ((producto.productData.precio * producto.quantity) + 
      ((producto.productData.precio) +
        (producto.size ? producto.size.precio : 0) +
        (producto.selectedRevolcado ? producto.selectedRevolcado.precio : 0) +
        (producto.ingredientesExtra.length > 0 ? producto.ingredientesExtra.reduce((acc, prod) => acc + prod.precio, 0) : 0)) *
      (producto.quantity)
      // (producto.quantity > 1 ? producto.quantity : 1)
      // (producto.ingredientesExtra.length > ? )
      , 0);


    setTotal(totalCalculado);
  };




  const conv = () => {
    let arr = []
    arr.push({ products: count })
    return arr
  }


  const incrementQuantity = (index) => {
    setCount((prevCount) => {
      const updatedCount = [...prevCount];
      updatedCount[index].quantity += 1;
      // calcularTotal(updatedCount); // Calculamos el total después de actualizar count
      return updatedCount;
    });
  };
  
  const decrementQuantity = (index) => {
    setCount((prevCount) => {
      const updatedCount = [...prevCount];
      if (updatedCount[index].quantity > 1) {
        updatedCount[index].quantity -= 1;
        // calcularTotal(updatedCount); // Calculamos el total después de actualizar count
      }
      return updatedCount;
    });
  };
  




  // const total = cart.reduce((acc, prod) => acc + prod.precio, 0);
  // let total = 0;
  // //Calcula total
  // cart.map(producto => { total += (producto.product.precio * producto.quantity) })


  const deleteProdCart = (index) => {


    if (count.length === 1)
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "No se puede quedar vacio el carrito al actualizar, si requiere cancelar dirijase a sus ordenes ",
        showConfirmButton: true,
        // timer: 4000
      });

    Swal.fire({
      title: "Desea eliminar el producto del carrito?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#FC0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {



        const newCart = structuredClone(carrito);
        const newCount = structuredClone(count);
        // const indexCount = newCart.findIndex(producto => console.log(' <<<<<<<<<<<<<<<', producto[index]));
        // const indexCount = newCart.findIndex(producto,i => producto[i] === index);
        // console.log('indexCount ++++++++++++', indexCount);

        // const indexCount = newCart.findIndex(producto => producto.id === id);
        newCart.splice(index, 1);
        newCount.splice(index, 1);

        setCarrito(newCart);
        setCount(newCount);

        // calcularTotal(carrito)





        // const newCount = structuredClone(count);
        // const indexCount = newCount.findIndex(producto => producto.id === id);
        // newCount.splice(indexCount, 1);
        // setCount(newCount);



        // const newCart = structuredClone(cart);
        // const indexFind = newCart.findIndex(producto => producto.id === id);
        // newCart.splice(indexFind, 1);
        // setCart(newCart);

        // setProductsData(newCart);



        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto eliminado",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });



    return (count, cart)
  }

  const clearsObjects = () => {
    setCount([]);
    setCart([]);
    setIsEdit(false)
    setIdCard('')
    setCustomer('')
    setIdCustomer('')
    // total = 0;
  }

  const clearCart = () => {

    Swal.fire({
      title: "Desea vaciar el carrito?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#FC0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar!"
    }).then((result) => {
      if (result.isConfirmed) {
        clearsObjects();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El carrito está vacío",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });

  }

  const buyCartttt = () => {

    Swal.fire({
      title: "Desea realizar la compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#FC0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprar!"
    }).then((result) => {

      if (result.isConfirmed) {

        const prodCar = conv()

        handlePurchase(count)
          .then((resp) => {
            // if (resp == true){
            clearsObjects();
            // Swal.fire("Producto creado!", "", "info");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Compra realizada",
              text: "Gracias por confiar en nosotros",
              showConfirmButton: true,
              // timer: 1500
            });
            // }

          })
          .catch((err) => {
            Swal.fire("Error guardar el carrrito", "", "danger");
          })



      }
    });
  }

  const buyCart = async () => {
    try {

      const title = isEdit ?
        `Desea actualizar la orden ${idCard}` :
        'Desea crear la orden'
      const result = await Swal.fire({
        title: title,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#FC0",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar!"
      });
      // .then((result) => {

      if (result.isConfirmed) {
        try {
          // const prodCar = conv()
          if (!isEdit === true) {

            
            const resp = await saveCart(count, customer, total, user.branch.id)
            if (resp) {
              clearsObjects();
              // Swal.fire("Producto creado!", "", "info");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Orden creada",
                // text: "Gracias por confiar en nosotros",
                showConfirmButton: true,
                // timer: 1500
              });
            }

          } else {

            const resp = await UpdateCart(idCard, count, total)
            if (resp) {
              clearsObjects();
              // Swal.fire("Producto creado!", "", "info");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Orden actualizada",
                text: idCard,
                // text: "Gracias por confiar en nosotros",
                showConfirmButton: true,
                // timer: 1500
              });
            }

          }


        } catch (error) {

          if (error.response) {

            if (error.response.status === 400) {
              Swal.fire("Permiso denegado", error.response.data.error, "warning");
            } else if (error.response.status === 409) {
              // Swal.fire("Permiso denegado", error.response.data.error, "warning");
              Swal.fire(error.response.data.error, "Actualice stock", "warning");
            }
            else {
              Swal.fire("Permiso denegado", error.response.data.message, "warning");
              //   Swal.fire("Permiso denegado", error.response.data.message, "warning");
            }
          } else {
            Swal.fire("Error al crear la orden", "Error desconocido", "danger");
          }

        }



      } else if (result.isDenied) {
        Swal.fire("Cart are not saved", "", "info");
      }
    } catch (error) {
      Swal.fire("Error guardar el carrrito", "", "danger");
    }
  }


  return (
    <>

      {/* <Head title={"Carrito"} /> */}




      <div className="wrapper ">
        <NavDash />
        <div className="contMen " >

          <DataUser />

          <MenuProducts />

          {
            isLoading ?

              <l-dot-spinner
                size="80"
                speed="1.1"
                color="#0F1854"
              >
              </l-dot-spinner> :

              <>
                <div className="col-md-4 col-sm-10 align-self-end me-4">

                  <span className="fs-5 text-start">Cliente</span>
                  <select
                    className="form-select text-uppercase mt-2"
                    // value={!isEdit ? idCustomer : ""}
                    value={idCustomer}
                    onChange={(e) => {
                      const value = e.target.value;
                      setCustomer(value)
                      setIdCustomer(value)

                    }}>

                    <option value="">-Sleccione Cliente-</option>
                    {/* cupon neubox NBXSPINUDAJ */}
                    {
                      usersData.map(customer => (
                        <option key={customer._id} value={customer._id}> {customer.firstName} {customer.lastName} </option>
                      ))
                    }
                  </select>
                </div>

                <div className="contCarr container">

                  {


                    carrito.length > 0 ?

                      <div>

                        <div id="productsCarr" className="productsCarr ">
                          {
                            carrito.map((producto, index) => {
                              return (
                                <div className="prodCarr" key={index}>
                                  {/* <img className="imgPro" src={producto.productData.urlImg} alt="" /> */}
                                  <div className="titu">
                                    <small>Producto</small>

                                    <p>{producto.productData.nombre}</p>

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

                                    {/* {setQuantityProd(producto.quantity)} */}

                                    {/* <p>{quantityProd}</p> */}
                                    <p>{producto.quantity}</p>
                                    <div className="d-flex flex-row justify-content-center align-items-center ">
                                      <button className="" onClick={() => decrementQuantity(index)}><i className="bi bi-dash-lg"></i></button>
                                      <button className="" onClick={() => incrementQuantity(index)}><i className="bi bi-plus-lg"></i></button>
                                    </div>
                                  </div>
                                  <div className="precio">
                                    <small>Precio</small>
                                    <p>$ {producto.productData.precio}</p>
                                  </div>
                                  <div className="subtotal">
                                    <small>Subtotal</small>
                                    {/* <p>$ {producto.productData.precio * producto.quantity}</p> */}
                                    <p>$
                                      
                                      {
                                        //  carrito.reduce((acc, producto) => acc + 
                                        ((producto.productData.precio) +
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
                                  <button className="btnEliminar" onClick={() => deleteProdCart(index)}><i className="bi bi-trash-fill"></i></button>
                                </div>
                              )

                            })


                          }


                        </div>

                        <div id="accCarr" className="accCarr ">
                          <div className="dvVaciar">
                            {
                              !idCard ?
                                <button onClick={clearCart} className="btnVaciar btn btn-danger"><i className="bi bi-cart-dash-fill"></i> Vaciar carrito</button>
                                :
                                <Link to={'/menu'} className="btnVaciar btn btn-danger"><i className="bi bi-cart-dash-fill"></i> Cancelar</Link>
                            }

                          </div>
                          <div className="dvCalcu">
                            <div className="total">
                              <p>Total</p>
                              <p>💲 {total} </p>
                            </div>
                            <button className="btn-prin btnComprar" onClick={buyCart}>
                              {
                                !isEdit ? 'Crear orden' : 'Actualizar orden'
                              }
                            </button>
                          </div>
                        </div>

                        <Link to={"/menu"} className="btnVaciar btn btn-prin">
                          Seguir comprando
                        </Link>
                      </div>
                      :
                      <h2 id="carVacio" className="carVacio ">
                        Tu carrito está vacío.
                        <i className="bi bi-emoji-frown"></i>
                      </h2>

                  }


                </div>

              </>


          }



        </div>
      </div>
    </>
  )






}



//  [{id: '660dba3063b4664603416291', quantity: 1}, {id: '660dba3063b4664603416299', quantity: 10}]