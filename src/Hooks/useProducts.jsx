
import { useState, useEffect } from 'react';
import { getProducts, getProductById, deleteProduct, saveProduct, getCategories, getProductByCategory, updateProduct } from '../services'


export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {

        const obtenerProductos = async () => {
            try {
                const resp = await getProducts();
                setProductsData(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }


        setTimeout(() => {

            obtenerProductos()

            setIsLoading(false);
        }, 1500);

    }, []);

    return { productsData, setProductsData, isLoading, setIsLoading }
}

export const useGetProductsCat = (id) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const obtenerProducto = async (id) => {
            try {
                const resp = await getProductByCategory(id);
                setProductsData(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }

        obtenerProducto(id)

    }, [id]);

    return { productsData }
}


//obtiene los productos del carrito
export const useGetProductsCart = (carrito) => {


    const [isLoading, setIsLoading] = useState(true)
    const [cart, setCart] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const getAllProductsCart = async () => {
                try {
                    const products = await getProducts();
            
                    const arrCart = products.data.payload.reduce((acc, product) => {
                        const itemInCart = carrito.find(item => item.pid === product.id);
                        if (itemInCart) {
                            acc.push({
                                product,
                                id: product.id,
                                quantity: itemInCart.quantity,
                                size: itemInCart.size,
                                ingredientesExtra: itemInCart.ingredientesExtra,
                                selectedRevolcado: itemInCart.selectedRevolcado
                            });
                        }
                        return acc;
                    }, []);
                                
                    setCart(arrCart);
                    setIsLoading(false);
            
                } catch (err) {
                    console.log(err);
                }
            }

            getAllProductsCart()

                // console.log('cartUse',cart);

                // const db = getFirestore();
                // const productsCollection = collection(db, 'products');
                // getDocs(productsCollection).then((snapshot) => {

                //     snapshot.docs.map((doc) => {

                //         for (let i = 0; i < carrito.length; i++) {
                //             if (doc.id === carrito[i].id) {
                //                 arrCart.push({ ...doc.data(), id: doc.id, quantity: carrito[i].quantity })
                //             }

                //         }


                //     })


                //     setCart(arrCart);
                //     // setProductsData(arrCart);
                //     setIsLoading(false);

            // })

        }, 1000);

    }, [carrito]);

    return { cart, setCart, isLoading }
}

export const obtenerDetallesProductos = async (carrito) => {
    const productosConDetalles = await Promise.all(
        carrito.map(async (item) => {
            // Hacer una petición a la API para obtener el producto por ID
            const response = getProductById(item.pid)
            // const response = await fetch(`/api/productos/${item.pid}`);
            // const producto = await response.json();

            // Devolver el objeto original del carrito con los detalles del producto
            return {
                ...item,
                response // Aquí se añade el detalle del producto a cada item
            };
        })
    );
    return productosConDetalles;
};


//   const obtenerDetallesProductos = async (carrito) => {
//     const productosConDetalles = await Promise.all(
//       carrito.map(async (item) => {
//         // Hacer una petición a la API para obtener el producto por ID
//         const response = await fetch(`/api/productos/${item.pid}`);
//         const producto = await response.json();

//         // Reemplazar el pid con el objeto completo del producto
//         return {
//           ...item,
//           producto // Aquí se agregan todos los detalles del producto al item
//         };
//       })
//     );
//     return productosConDetalles;
//   };


// export const useGetProductsById = (id, collectionName = "products") => {
export const useGetProductsById = (id) => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    try {
        useEffect(() => {
            setTimeout(async () => {

                const resp = await getProductById(id)
                const prodData = resp.data.payload

                // Filtra `_id` de los subdocumentos
                const filteredProduct = {
                    ...prodData,
                    tamanos: prodData.tamanos.map(size => ({
                        id: size.id,   // Solo mantenemos el campo `id`
                        nombre: size.nombre,
                        precio: size.precio
                    })),
                    ingredientesExtra: prodData.ingredientesExtra.map(ingredient => ({
                        id: ingredient.id,  // Solo mantenemos el campo `id`
                        nombre: ingredient.nombre,
                        precio: ingredient.precio
                    })),
                    ingredientesRevolcado: prodData.ingredientesRevolcado.map(ingredient => ({
                        id: ingredient.id,  // Solo mantenemos el campo `id`
                        nombre: ingredient.nombre,
                        precio: ingredient.precio
                    }))
                };

                // setProductData(resp.data.payload)
                setProductData(filteredProduct)

                //     const db = getFirestore();
                //     const docRef = doc(db, collectionName, id)
                //     getDoc(docRef).then((doc) => {
                //         setProductData({ id: doc.id, ...doc.data() });
                //     })

                setIsLoading(false);
            }, 1000);

        }, []);
    } catch (error) {
        console.log(error)
    }

    return { productData, isLoading }
}



//LLENA EL MENU DE CATEGORIAS
export const useGetCategories = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setTimeout(() => {}, 3200);

        const loadCategories = async () => {
            try {
                const resp = await getCategories()
                setCategories(resp.data.payload)
            } catch (error) {
                console.log(error);
            }

        }

        loadCategories()


        // getCategories()
        //     .then((resp) => {
        //         setCategories(resp.data.payload)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        // setIsLoading(false);

    }, []);

    return { categories, isLoading }
}


export const useCreateProd = (product) => {
    const [isCreated, setIsCreated] = useState(false)
    saveProduct(product)
        .then((resp) => {
            console.log("guardado");
            setIsCreated(true)
        })
        .catch((err) => {
            console.log(err);
        })
    return { isCreated }
}

export const useUpdateProduct = async (pid, product) => {

    try {
        return await updateProduct(pid, product)
    } catch (error) {
        console.log(error);
    }


    // const [isCreated, setIsCreated] = useState(false)
    // saveProduct(product)
    //     .then((resp) => {
    //         console.log("guardado");
    //         setIsCreated(true)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // return { isCreated }
}

export const useDeleteProduct = async (id) => {
    try {

        // const [isDelete, setIsDelete] = useState({})

        return await deleteProduct(id)
        // setIsDelete(resp)

        // useEffect(() => {}, [])
        // deleteProduct(id)
        //     .then((resp) => {
        //         console.log("Producto eliminado");
        //         setIsDelete(true)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })



        // return { isDelete }

    } catch (error) {
        console.log(error);

    }

}