import axiosD from "./axios"

export const getCustomers = async () => axiosD.get(`/customers`, );
export const updateCustomer = async (id, customer) => axiosD.put(`/customers/${id}`, customer);
export const deleteCustomer = async (id) => axiosD.delete(`/customers/${id}`)
export const createCustomer = async (customer) => axiosD.post(`/customers/register`, customer)
// export const getCustomerCarts = async (cuid) => axiosD.get(`/customer/${cuid}` );

export async function getCustomerCarts(cuid){
    // return await axios.get(`https://apimocha.com/burguerrobles/products/${id}`);
    // return await axios.get(`https://apimocha.com/burgrob/products/${id}`);

    try {
        return await axiosD.get(`/carts/customer/${cuid}`);
        
    } catch (error) {
        console.log('url not found', error);
    }
    
}

export async function sscreateCustomer(data){
    try{
        // console.log('ffffffffffffff', product);
        const resp = await axiosD({
            url: '/customers/register',
            // url: 'http://localhost:8080/api/products',
            // url: 'https://burguerappbackend.up.railway.app/api/products',
            method: 'POST',
            data: data,
            // withCredentials: true
        })
        // console.log('true');
        return resp
    }catch(error){
        // console.log('false');
        console.log('Erroro al conextarse al servidor paa crear producto', error);
        throw error
        return false
    }
}