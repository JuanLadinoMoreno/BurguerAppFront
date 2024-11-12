import { useEffect, useState } from "react";
import { deleteUser, getUsers, onRegister, updateUser } from "../services";



export const useGetUsers = () => {
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    
    useEffect(() => {
        
        const obtenerUsuarios = async () => {
            try {
                const resp = await getUsers();
                setUsersData(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }
        
        
        setTimeout(() => {
            
            obtenerUsuarios()
            
            setIsLoading(false);
        }, 1500);
        
    }, []);
    
    return { usersData, setUsersData, isLoading, setIsLoading }
}

export const useCreateUser = async (user) => {
    const [usersData, setUsersData] = useState([])
    try {
        // console.log('userP', userP);
        return resp = await onRegister(user)
     
        // console.log('resp.data', resp.data);

        // setIsAuthenticated(true)
    } catch (error) {
        console.log(error);
    }
}

export const useUpdateUser = async (id, user) => {

    try {
        return  await updateUser(id, user)
    } catch (error) {
        
    }

}

export const useDeleteUser = async (id) => {
    try {

        return  await deleteUser(id)
     

    } catch (error) {
        console.log(error);

    }
}