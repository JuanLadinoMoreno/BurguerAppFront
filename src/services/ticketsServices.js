import axios from "./axios.js";




export async function getTotalAmount(){
    try {
        return await axios.get(`tickets/totalamount`)
        
    } catch (error) {
        console.log('url not found' , error)
    }
}

export async function getMonthSales(){
    try {
        return await axios.get(`tickets/totalamountmonth`)
        
    } catch (error) {
        console.log('url not found' , error)
    }
}

export async function getAllSales(){
    try {
        return await axios.get(`tickets`)
        
    } catch (error) {
        console.log('url not found' , error)
    }
}


// export async function getProductByCategory(id){
//     try {
//         // return await axios.get(`https://apimocha.com/burguerrobles/menu/category/${id}`);
//         return await axiosD.get(`/products/category/${id}`);
        
//     } catch (error) {
//         console.log('url not found');
//     }

// }ddd

