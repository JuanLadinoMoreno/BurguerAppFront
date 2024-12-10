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

export async function getSalesforMonth(){
    try {
        return await axios.get(`tickets/salesformonth`)
        
    } catch (error) {
        console.log('url not found' , error)
    }
}

// export async function getSalesForCategoriesMonth(){
//     try {
//         return await axios.get(`tickets/salescategorymonth`)
        
//     } catch (error) {
//         console.log('url not found' , error)
//     }
// }

// export const getSalesForCategoriesMonth = async (category) => axios.get(`/tickets/salescategorymonth`, { category: category });

export async function getSalesForCategoriesMonth(cid){
    try {
        return await axios.get(`tickets/salescategorymonth/${cid}`);
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export async function mmmgetSalesForCategoriesMonth(category){
    try{
        const res = await axios({
            url: 'http://localhost:8080/api/tickets/salescategorymonth',
            method: 'GET',
            data: { category: category },
            // data: cart ,
            // withCredentials: true
        })
        // console.log('true');
        return res
    }catch(error){
        // console.log('false');
        console.log('Erroro al conextarse al servidor para obtener ventar por categoria', error);
        throw error
        // return false
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

