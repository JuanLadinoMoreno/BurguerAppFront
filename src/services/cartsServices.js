import axiosD from "./axios";


export async function getAllCarts(){
    try {
        return await axiosD.get(`carts/`);
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export async function getCartsByUserId(uid){
    try {
        return await axiosD.get(`carts/user/${uid}`);
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export async function getCartsById(cid){
    try {
        return await axiosD.get(`carts/${cid}`);
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export const updCartToCanceled = async (cid) => axiosD.put(`/carts/cancel/${cid}`);

export async function UpdateCart(cid, cart, total){
    try{
        const res = await axiosD({
            url: 'http://localhost:8080/api/carts',
            method: 'PUT',
            data: { cart: cart , cid: cid, totalPrice: total},
            // data: cart ,
            // withCredentials: true
        })
        // console.log('true');
        return res
    }catch(error){
        // console.log('false');
        console.log('Erroro al conextarse al servidor para actualizar carrito', error);
        throw error
        // return false
    }
}

export async function endPurchase(cid){
    try {
        return await axiosD.get(`carts/${cid}/purchase`);
        
    } catch (error) {
        console.log(error);
    }
    
}

// export const saveProductttt = async (product) => axiosD.post(`/products`, product);

// export async function endPurchase(product){
//     try{
//         const resp = await axiosD({
//             url: '/carts/',
//             method: 'POST',
//             data: product,
//             // withCredentials: true
//         })
//         // console.log('true');
//         return resp
//     }catch(error){
//         // console.log('false');
//         console.log('Erroro al conextarse al servidor paa crear producto', error);
//         throw error
//         return false
//     }
// }