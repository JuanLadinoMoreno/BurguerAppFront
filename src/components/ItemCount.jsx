import React, { useContext, useState } from 'react'
import Toastify from 'toastify-js'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import { CarContext } from '../context/CarContext'



export const ItemCount = ({ productData, productId, productName }) => {

    //count es el arreglo de productos del carrito
    const { count, setCount } = useContext(CarContext);
    const [countItem, setCountItem] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    // const [selectedSize, setSelectedSize] = useState('');
    const [selectedRevolcado, setSelectedRevolcado] = useState(null);
    const [selectedIngerExtra, setSelectedIngerExtra] = useState([]);


    const handleAddItem = () => {
        setCountItem(countItem + 1);
    }

    const handleRemoveItem = () => {
        if (countItem === 1) return;

        setCountItem(countItem - 1);
    }

    const handleSelectedZise = (event) => {
        console.log('eeeeeeeeeeeee', e);

        const size = productData.tamanos.find(size => size._id === event.target.value);
        setSelectedSize(size);
    }

    const handleIngreExtra = (event) => {

        console.log('event.target', event.target.value);
        if (event.target.checked === true) {
            const ingrediente = productData.ingredientesExtra.find(ingrediente => ingrediente.id === event.target.value);
            //APush aon nuevo ingre
            setSelectedIngerExtra([
                ...selectedIngerExtra,
                ingrediente
            ])
        }
        if (event.target.checked === false) {
            setSelectedIngerExtra(
                selectedIngerExtra.filter(a => a.id !== event.target.value)
            )
        }
        // console.log('ingre', ingre);

    }
    const addCart456 = () => {
        console.log('selectedSize', selectedSize);
        console.log('selectedIngerExtra', selectedIngerExtra);
        console.log('selectedRevolcado', selectedRevolcado);

        setCount(prevState => ([
            ...prevState,
            {
                pid: productId,
                quantity: countItem,
                size: selectedSize,
                ingredientesExtra: selectedIngerExtra,
                selectedRevolcado: selectedRevolcado

            }
        ]))
        console.log('count', count);

    }

    function productsEquals(product1, product2) {
        let sizeSin_Id = null
        
        console.log('product2.size', product2.size)
        console.log('product1.size', product1.size)
        
        
        // (product1.size || product1.size.length > 0) ?? product1.size 
        // product1.size || product1.size.length > 0 ? { _id, ...sizeSin_Id } = product1.size  : null
        // product1.size != null ?? ({ _id, ...sizeSin_Id } = product1.size)
        if (product1.size) {
            const { _id, ...restoSinId } = product1.size;
            sizeSin_Id = restoSinId;
          }
        console.log('sizeSin_Id', sizeSin_Id)
        // const { _id, ...sizeSin_Id } = product1.size  ?? null
        // const { _id, ...sizeSin_Id } = product1.size  || {}
        return product1.pid === product2.pid &&
            // sizeSin_Id === product2.size 
            JSON.stringify(sizeSin_Id) === JSON.stringify(product2.size) &&
            JSON.stringify(product1.ingredientesExtra) === JSON.stringify(product2.ingredientesExtra) &&
            product1.selectedRevolcado === product2.selectedRevolcado;
    }

    const addCart = () => {
        // setCount(count + countItem);
        console.log('selectedSizehajklsgdhjk-------------------------agskdghaksjdgkajsdgagagkasgkasdg');
        

        const newProductAdd =
        {
            pid: productId,
            quantity: countItem,
            size: selectedSize,
            ingredientesExtra: selectedIngerExtra,
            selectedRevolcado: selectedRevolcado

        }

        if (!selectedSize) {
            
        }
        //verifica que el producto ya exista en count(carrito) en caso de no existir (else) se crea el producto con su cantidad en count (carrito)
        //en caso de existir suma la cantidad
        // const IndexFind = count.findIndex(item => item.pid == productId)

        // const pFind = count.find(item => console.log('itemakjsdhajksddasdasdasdasdasdasd', item))

        const countSinQuantity = count.map(({ quantity, ...resto }) => resto)
        console.log('countSinQuantity', countSinQuantity);

        console.log('newProductAdd', newProductAdd);
        //elimina quantity
        const { quantity, ...ProductAddSinQuantity } = newProductAdd
        console.log('ProductAddSinQuantity', ProductAddSinQuantity);

        //busca en al arreglo que sean
        // const pFind = countSinQuantity.find(item => item === newProductAdd)
        // const pFind = countSinQuantity.find(item => JSON.stringify(item) === JSON.stringify(ProductAddSinQuantity));
        const pFind = countSinQuantity.find(item => productsEquals(item , ProductAddSinQuantity));
        // const IndexFind = countSinQuantity.findIndex(item => JSON.stringify(item) === JSON.stringify(ProductAddSinQuantity));
        const IndexFind = countSinQuantity.findIndex(item => productsEquals(item , ProductAddSinQuantity));
        console.log('>>>>>>>>>>>>', IndexFind);
        console.log('pFind ------>>>>>>>>>>>>', pFind);

        

        // Buscar en el array usando la función de comparación
        // const pFind = countSinQuantity.find(item => deepEqual(item, newProductAdd));


        // const { quantity, ...productDataSinQuantity } = productData
        // console.log('productDataSinQuantity', productDataSinQuantity);

        // if(pFind!= undefined && pFind !== productData) console.log('no es igual jslñkdjfsñlkdjfsñlkjdfñlksjdñfksjdf');
        // if(pFind != undefined && pFind !== productData){
        //     setCount(prevState => ([
        //         ...prevState,
        //         {
        //             pid: productId,
        //             quantity: countItem,
        //             size: selectedSize,
        //             ingredientesExtra: selectedIngerExtra,
        //             selectedRevolcado: selectedRevolcado

        //         }
        //     ]))
        //     console.log('no es igual jslñkdjfsñlkdjfsñlkjdfñlksjdñfksjdf');
        // }else 
        // if (IndexFind >= 0 ) {
        if (pFind != undefined) {
            console.log('entraaaaaaaaaaaaaaaaaaad');


            const newCart = structuredClone(count);
            console.log('newCart', newCart);

            newCart[IndexFind].quantity += countItem
            setCountItem(1);

            // toast.success('Producto agregado2!     ' + toString(productName).toUpperCase() );
            Toastify({
                text: "Producto agregado " + productName.toUpperCase(),
                duration: 1800,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "toastAgregarP"

            }).showToast();
            return setCount(newCart)
            // return

        } else {
            setCount(prevState => ([
                ...prevState,
                {
                    pid: productId,
                    quantity: countItem,
                    size: selectedSize,
                    ingredientesExtra: selectedIngerExtra,
                    selectedRevolcado: selectedRevolcado

                }
            ]))

            setCountItem(1);

            // toast.success('Producto agregado !!!   ' + productName.toUpperCase());

            Toastify({
                text: "Producto agregado " + productName.toUpperCase(),
                duration: 1800,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "toastAgregarP"

            }).showToast();

        }


    }

    return (
        <>
            <section className="contMen">
            {console.log('productData.............', productData)}

                <div className="dvProductDetail">

                    <div className="dvProducto" key={productData._id}>
                        <h3>{productData.nombre}</h3>

                        <div className="datProd">
                            <div className='d-flex jsutify-content-center align-items-center'>
                                <img className="imgProducto" src={productData.thumbnail} alt="" height='180px' />
                                <ul className="ulIngre">
                                    <span className='text-warning text-center'>Ingredientes</span>
                                    <li >{productData.ingrePrep}</li>
                                    <li >{productData.pan}</li>
                                    {
                                        productData.aderesos.length > 0 ? productData.aderesos.map((adereso, index) => (<li key={productData.nombre + index}> {adereso} </li>)) : null
                                    }
                                    {
                                        productData.vegetales.length > 0 ? productData.vegetales.map((vegetal, index) => (<li key={productData.nombre + index}> {vegetal} </li>)) : null
                                    }
                                    {/* <li>
                                    <span className='text-danger text-center'>Precio: 💲</span>
                                        {productData.precio}
                                    </li> */}
                                    <h5>
                                        <span className='text-danger text-center'>Precio: </span>
                                        {'$' + productData.precio}
                                    </h5>
                                </ul>

                            </div>


                            {/* <div className="d-flex flex-column my-2">
                                <h4 className="text-warning">Tamaños</h4>

                                <div className="d-flex justify-content-around align-item-center">

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                    </div>

                                    {

                                        productData.tamanos ? productData.tamanos.map((tamano, index) =>
                                        (

                                            <>
                                                
                                                <div class="form-check">
                                                    <input onChange={(e) => console.log(e)} class="form-check-input" type="radio" name="flexRadioDefault" value={tamano.precio} id={tamano.nombre} />
                                                    <label class="form-check-label" for={tamano.nombre}>
                                                        {tamano.nombre}
                                                        <br />
                                                        $ {tamano.precio}
                                                    </label>
                                                </div>


                                            </>


                                        )) : null
                                    }

                                </div>

                            </div> */}

                            {/* <div className='row'> */}

                            {/* Tamaños */}
                            {productData.tamanos.length > 0 ?
                                <div className="sizes d-flex flex-column jsutify-content-center align-items-center my-2">

                                    <h5 className='text-warning text-center'>Selecciona tamaño:</h5>
                                    <div className="mb-3 d-flex  jsutify-content-center align-items-center">
                                        {/* Opción por defecto */}
                                        <div className="form-check d-flex jsutify-content-center align-items-center flex-column">
                                            <label className="form-check-label">Sencilla</label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size"
                                                value=""
                                                checked={selectedSize === null}
                                                onChange={() => setSelectedSize(null)}
                                            // onChange={handleSubmit}
                                            />
                                        </div>

                                        {
                                            productData.tamanos.map(size => (
                                                <div key={size._id} className="form-check d-flex jsutify-content-center align-items-center flex-column">
                                                    {console.log('size.............', size)}
                                                    <label className="form-check-label">{size.nombre} (+${size.precio})</label>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        value={size.id}
                                                        checked={selectedSize && selectedSize.id === size.id}
                                                        onChange={() => setSelectedSize(size)}
                                                        // checked={selectedSize && selectedSize === size._id}
                                                        // onChange={(e) => setSelectedSize(e.target.defaultValue)}
                                                    // onChange={() => handleSubmit(size)}
                                                    // onChange={(e) => console.log(e.target.defaultValue)}


                                                    />
                                                </div>
                                            ))
                                        }
                                        <hr />
                                    </div>
                                </div>
                                : null
                            }

                            {/* Ingrediente Revolcado */}
                            {productData.ingredientesRevolcado.length > 0 ?
                                <div className="sizes d-flex flex-column jsutify-content-center align-items-center my-2">

                                    <h5 className='text-warning text-center'>Selecciona revolcado:</h5>
                                    <div className="mb-3 d-flex  jsutify-content-center align-items-center">
                                        {/* Opción por defecto */}
                                        <div className="form-check d-flex jsutify-content-center align-items-center flex-column">
                                            <label className="form-check-label">Sin revolcar</label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="ingredientesRevolcado"
                                                value=""
                                                checked={selectedRevolcado === null}
                                                onChange={() => setSelectedRevolcado(null)}
                                            // onChange={handleSubmit}
                                            />
                                        </div>

                                        {
                                            productData.ingredientesRevolcado.map(revolcado => (
                                                <div key={revolcado.id} className="form-check d-flex jsutify-content-center align-items-center flex-column">
                                                    {/* {console.log('size._id.$oid', size.precio)} */}
                                                    <label className="form-check-label">{revolcado.nombre} (+${revolcado.precio})</label>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="ingredientesRevolcado"
                                                        // value={size.precio}
                                                        value={revolcado.id}
                                                        checked={selectedRevolcado && selectedRevolcado.id === revolcado.id}
                                                        onChange={() => setSelectedRevolcado(revolcado)}
                                                    // onChange={() => handleSubmit(size)}
                                                    // onChange={(e) => console.log(e.target.defaultValue)}


                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                                : null
                            }

                            {/* Ingrediente extra */}
                            {
                                productData.ingredientesExtra.length > 0 ?
                                    <div className="d-flex flex-column justify-content-center align-item-center">

                                        <h5 className="text-warning text-center">Ingredientes extra</h5>

                                        <div className="gap-4 d-flex justify-content-between align-item-center ">

                                            {
                                                productData.ingredientesExtra.map((ingrediente, index) =>
                                                (

                                                    <>
                                                        <div className="mb-3 d-flex flex-column jsutify-content-center align-items-center">
                                                            <p>
                                                                {ingrediente.nombre} (+${ingrediente.precio})
                                                                {/* {ingrediente.nombre}
                                                                    <br />
                                                                    $ {ingrediente.precio} */}

                                                            </p>
                                                            <input type="checkbox"
                                                                // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                                                                value={ingrediente.id}
                                                                onChange={handleIngreExtra}
                                                            // onClick={handleIngreExtra}
                                                            // checked= {watchAllAde}
                                                            // {...register("aderesos")}
                                                            />
                                                        </div>
                                                        {/* <li key={productData.nombre + index}> {adereso} </li> */}
                                                    </>


                                                ))
                                            }

                                        </div>
                                    </div>
                                    : null
                            }
                            {/* </div> */}

                        </div>
                        <div className="itemCount">
                            <button className="btnAnadirP" onClick={handleRemoveItem}><i className="bi bi-cart-plus-fill"></i> ➖ </button>
                            <span> {countItem} </span>
                            <button className="btnAnadirP" onClick={handleAddItem}><i className="bi bi-cart-plus-fill"></i> ➕ </button>
                            <button className="btnAnadirP" onClick={addCart}><i className="bi bi-cart-plus-fill"></i>Agregar al Carrito</button>
                            {/* <ToastContainer 
                    position="top-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition: Bounce
                    /> */}
                        </div>

                    </div>
                </div>




            </section>


        </>
    )
}
