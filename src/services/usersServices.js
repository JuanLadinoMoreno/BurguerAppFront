import axiosD from "./axios"

export const getUsers = async () => axiosD.get(`/users`, );

export const registerUser = async (user) => axiosD.post(`/users/register`, user);

export const deleteUser = async (id) => axiosD.delete(`/users/${id}`)

export const updateUser = async (id, user) => axiosD.put(`/users/${id}`, user);

export async function onRegisterUser(user){
    try{
        // console.log('ffffffffffffff', product);
        const resp = await axiosD({
            url: '/users/register',
            // url: 'http://localhost:8080/api/products',
            // url: 'https://burguerappbackend.up.railway.app/api/products',
            method: 'POST',
            data: user,
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

export async function getAllUserCarts(uid){
    // return await axios.get(`https://apimocha.com/burguerrobles/products/${id}`);
    // return await axios.get(`https://apimocha.com/burgrob/products/${id}`);

    try {
        return await axiosD.get(`/carts/all/user/${uid}`);
        
    } catch (error) {
        console.log('url not found', error);
    }
    
}