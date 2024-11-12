import { useContext, useState } from 'react'
import { useGetProductsById } from '../../../Hooks/useProducts'
import { Link, useParams } from 'react-router-dom'
import MenuProducts from './MenuProducts'
import { CarContext } from '../../../context/CarContext'
import ProdBig from '../../ProdBig'
import { ItemCount } from '../../ItemCount'
import DataUser from '../../Dash/components/DataUser'



export default function ItemDetailContainer() {

    const { id } = useParams() //Obtiene id de la ruta para mostrar el producto
    // const { productData, isLoading } = useGetProductsById(id, 'products') //firestore
    const { productData, isLoading } = useGetProductsById(id)
    
    // console.log('productData', productData);

    

    return (

        <>
            <DataUser />

            <section className="contMen d-block top-0 w-100">
                <MenuProducts />

                {
                    isLoading ?
                        <>
                            <div className='container d-flex justify-content-center align-items-center h-50'>
                                <l-dot-spinner
                                    size="80"
                                    speed="1.1"
                                    color="#0F1854"
                                ></l-dot-spinner>
                            </div>
                        </> :

                        // <section className="contMen">


                        //     <div className="dvProductDetail">

                        //         <div className="dvProducto" key={productData._id}>
                        //             <h3>{productData.nombre}</h3>


                        //             <div className="datProd">

                        //                 <img className="imgProducto" src={productData.thumbnail} alt="" width='180px' />
                        //                 <ul className="ulIngre">
                        //                     <li >{productData.ingrePrep}</li>
                        //                     <li >{productData.pan}</li>
                        //                     {
                        //                         productData.aderesos ? productData.aderesos.map((adereso, index) => (<li key={productData.nombre + index}> {adereso} </li>)) : null
                        //                     }
                        //                     {
                        //                         productData.vegetales ? productData.vegetales.map((vegetal, index) => (<li key={productData.nombre + index}> {vegetal} </li>)) : null
                        //                     }
                        //                     <li>{productData.precio}</li>
                        //                 </ul>

                        //                 <div className="d-flex flex-column my-2">
                        //                     <h4 className="text-warning">Tamaños</h4>

                        //                     <div className="d-flex justify-content-around align-item-center">

                        //                         <div class="form-check">
                        //                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        //                             <label class="form-check-label" for="flexRadioDefault1">
                        //                                 Default radio
                        //                             </label>
                        //                         </div>

                        //                         {

                        //                             productData.tamanos ? productData.tamanos.map((tamano, index) =>
                        //                             (

                        //                                 <>
                        //                                     {/* <div className="mb-3">
                        //                                         <p>
                        //                                             {tamano.nombre}
                        //                                             <br />
                        //                                             $ {tamano.precio}

                        //                                         </p>
                        //                                         <input type="radio"
                        //                                             // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                        //                                             value={tamano.precio}
                        //                                         // checked= {watchAllAde}
                        //                                         // {...register("aderesos")}
                        //                                         />
                        //                                     </div> */}

                        //                                     {/* <div class="form-check">
                        //                                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        //                                             <label class="form-check-label" for="flexRadioDefault1">
                        //                                                 Default radio
                        //                                             </label>
                        //                                     </div> */}
                        //                                     <div class="form-check">
                        //                                         <input onChange={(e) => console.log(e)} class="form-check-input" type="radio" name="flexRadioDefault" value={tamano.precio} id={tamano.nombre} />
                        //                                         <label class="form-check-label" for={tamano.nombre}>
                        //                                             {tamano.nombre}
                        //                                             <br />
                        //                                             $ {tamano.precio}
                        //                                         </label>
                        //                                     </div>


                        //                                     {/* <li key={productData.nombre + index}> {adereso} </li> */}
                        //                                 </>


                        //                             )) : null
                        //                         }

                        //                     </div>

                        //                 </div>



                        //                 {/* Tamaños */}
                        //                 <div className="sizes">
                        //                     <h4>Selecciona el tamaño:</h4>
                        //                     {/* Opción por defecto */}
                        //                     <div className="form-check">
                        //                         <input
                        //                             className="form-check-input"
                        //                             type="radio"
                        //                             name="size"
                        //                             value=""
                        //                             checked={selectedSize === null}
                        //                             onChange={() => setSelectedSize(null)}
                        //                         // onChange={handleSubmit}
                        //                         />
                        //                         <label className="form-check-label">Sin tamaño</label>
                        //                     </div>

                        //                     {productData.tamanos.map(size => (
                        //                         <div key={size._id} className="form-check">
                        //                             {console.log('size._id.$oid', size.precio)}
                        //                             <input
                        //                                 className="form-check-input"
                        //                                 type="radio"
                        //                                 name="size"
                        //                                 value={size.precio}
                        //                                 checked={selectedSize && selectedSize._id === size._id}
                        //                                 // onChange={() => setSelectedSize(size) }
                        //                                 onChange={() => handleSubmit(size)}
                        //                             // onChange={(e) => console.log(e.target.defaultValue)}


                        //                             />
                        //                             <label className="form-check-label">{size.nombre} (+${size.precio})</label>
                        //                         </div>
                        //                     ))}
                        //                 </div>






                        //                 <div className="d-flex flex-column my-2">
                        //                     <h4 className="text-warning">Ingredientes extra</h4>

                        //                     <div className="d-flex justify-content-around align-item-center">

                        //                         {
                        //                             productData.ingredientesExtra ? productData.ingredientesExtra.map((ingrediente, index) =>
                        //                             (

                        //                                 <>
                        //                                     <div className="mb-3">
                        //                                         <p>
                        //                                             {ingrediente.nombre}
                        //                                             <br />
                        //                                             $ {ingrediente.precio}

                        //                                         </p>
                        //                                         <input type="checkbox"
                        //                                             // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                        //                                             value={ingrediente.precio}
                        //                                         // checked= {watchAllAde}
                        //                                         // {...register("aderesos")}
                        //                                         />
                        //                                     </div>
                        //                                     {/* <li key={productData.nombre + index}> {adereso} </li> */}
                        //                                 </>


                        //                             )) : null
                        //                         }

                        //                     </div>

                        //                 </div>


                        //             </div>

                                    
                        //         </div>
                        //     </div>



                        // </section>
                        <ItemCount productData={productData} productId={productData.id} productName={productData.nombre} />
                }

            </section>






            {/* <ProdBig /> */}

        </>
    )




    //   const [selectedRevolcado, setSelectedRevolcado] = useState(''); // Sabor revolcado
    // const [selectedExtras, setSelectedExtras] = useState([]); // Ingredientes extra seleccionados

    // // Manejar la selección de ingredientes extra
    // const handleExtraChange = (e) => {
    //   const value = e.target.value;
    //   if (e.target.checked) {
    //     setSelectedExtras([...selectedExtras, value]);
    //   } else {
    //     setSelectedExtras(selectedExtras.filter((extra) => extra !== value));
    //   }
    // };

    // return (
    //   <div>
    //     <h1>{product.nombre}</h1>
    //     <p>Precio Base: {product.precioBase} MXN</p>

    //     {/* Si es un hotdog y tiene opción de revolcado */}
    //     {product.tipo === 'hotdog' && product.esRevolcadoDisponible && (
    //       <div>
    //         <h3>¿Deseas Revolcado?</h3>
    //         {product.saboresRevolcados.map((sabor) => (
    //           <div key={sabor.nombre}>
    //             <input
    //               type="radio"
    //               id={sabor.nombre}
    //               name="revolcado"
    //               value={sabor.nombre}
    //               onChange={(e) => setSelectedRevolcado(e.target.value)}
    //             />
    //             <label htmlFor={sabor.nombre}>
    //               {sabor.nombre} (+{sabor.precioAdicional} MXN)
    //             </label>
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     {/* Ingredientes extra */}
    //     <div>
    //       <h3>Ingredientes Extras:</h3>
    //       {product.ingredientesExtras.map((ingrediente) => (
    //         <div key={ingrediente.nombre}>
    //           <input
    //             type="checkbox"
    //             id={ingrediente.nombre}
    //             value={ingrediente.nombre}
    //             onChange={handleExtraChange}
    //           />
    //           <label htmlFor={ingrediente.nombre}>
    //             {ingrediente.nombre} (+{ingrediente.precio} MXN)
    //           </label>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Información seleccionada */}
    //     <div>
    //       <h4>Resumen de la selección:</h4>
    //       <p>Sabor Revolcado: {selectedRevolcado || 'Ninguno'}</p>
    //       <p>Ingredientes Extras: {selectedExtras.join(', ') || 'Ninguno'}</p>
    //     </div>
    //   </div>
    // );




}
