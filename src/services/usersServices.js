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