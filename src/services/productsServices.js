import axios from "axios";
import axiosD from "./axios";

export async function getProducts(){
    // return await axios.get('https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc');
    // return await axios.get('https://apimocha.com/burguerrobles/products');
    // return await axios.get('https://run.mocky.io/v3/d4883467-9de7-4fb4-97d6-9c985bcbaa5e');
    try {
        return await axiosD.get('/products');
        
    } catch (error) {
        console.log('url not found');
    }
}

export async function getProductById(id){
    // return await axios.get(`https://apimocha.com/burguerrobles/products/${id}`);
    // return await axios.get(`https://apimocha.com/burgrob/products/${id}`);

    try {
        return await axiosD.get(`/products/${id}`);
        
    } catch (error) {
        console.log('url not found');
    }
    
}


export async function getProductByCategory(id){
    try {
        // return await axios.get(`https://apimocha.com/burguerrobles/menu/category/${id}`);
        return await axiosD.get(`/products/category/${id}`);
        
    } catch (error) {
        console.log('url not found');
    }

}

// export const saveProduct = async (product) => axiosD.post(`/products`, product);

export async function saveProduct(product){
    try{
        // console.log('ffffffffffffff', product);
        const resp = await axiosD({
            url: '/products',
            // url: 'http://localhost:8080/api/products',
            // url: 'https://burguerappbackend.up.railway.app/api/products',
            method: 'POST',
            data: product,
            // withCredentials: true
        })
        // console.log('true');
        return resp
    }catch(error){
        // console.log('false');
        console.log('Erroro al conextarse al servidor paa crear producto', error);
        throw error
    }
}

export const saveProductttt = async (product) => axiosD.post(`/products`, product);

export const updateProduct = async (pid, product) => axiosD.put(`/products/${pid}`, product);

// export async function updateProduct(id){
//     try {
//         const response = await axiosD.delete(`/products/${id}`);
//         return response.data.payload
//         //  return true
//         // return getProducts()
//     } catch (error) {
//         throw error
//         console.log('url not found for delete');
//         return false
//     }
// }

export async function deleteProduct(id){

    // console.log('deleteProduc llamada axios', id);
    try {
        const response = await axiosD.delete(`/products/${id}`);
        return response.data.payload
        //  return true
        // return getProducts()
    } catch (error) {
        throw error
        console.log('url not found for delete');
        return false
    }

    // try {
    //      await axios.delete(`http://localhost:8080/api/products/${id}`);
    //     // return getProducts()
    // } catch (error) {
    //     console.log('url not found for delete');
    // }

//     try {
//         await axios.delete(`http://localhost:8080/api/products/${id}`).then(resp => {
//            return getProducts()
//         })
//    } catch (error) {
//        console.log('url not found for delete');
//    }
}


export async function getCategories(){
    // return await axios.get('https://run.mocky.io/v3/51e38cd8-db77-42a0-b891-f4a98e36c770');
    // return await axios.get('https://apimocha.com/burgrob/menu/categories');
    // return await axios.get('https://run.mocky.io/v3/aa14650b-9ca7-4c98-871b-6933386f9de9');

    try {
        return await axiosD.get('/categories');
        // return await axios.get('http://localhost:8080/api/categories');
        // return await axios.get('https://burguerappbackend.up.railway.app/api/categories');
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export async function getProductsInCart(){
    // return await axios.get('https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc');
    // return await axios.get('https://apimocha.com/burguerrobles/products');
    // return await axios.get('https://run.mocky.io/v3/d4883467-9de7-4fb4-97d6-9c985bcbaa5e');
    try {
        return await axios.get('http://localhost:8080/api/carts');
        
    } catch (error) {
        console.log('url not found');
    }
}

export async function saveCart(cart, customer, total, branch){
    try{
        
        const res = await axiosD({
            url: 'http://localhost:8080/api/carts',
            method: 'POST',
            data: { 
                products: cart,
                customer,
                totalPrice: total,
                branch: branch
            },
            // data: cart ,
            // withCredentials: true
        })
        // console.log('true');
        return res
    }catch(error){
        // console.log('false');
        console.log('Erroro al conextarse al servidor paa guardar carrito', error);
        throw error
        // return false
    }
}

// export const saveCart = async (user) => axiosD.post(`/carts`, user);

//falta usa
export async function handlePurchase(cart) {
    try {
        const response = await axios.post('/carts', { products: cart });
        return response
        // Procesar la respuesta, redireccionar, etc.
    } catch (error) {
        console.error('Error al procesar la compra', error);
        throw error
    }
};