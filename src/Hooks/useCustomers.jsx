import { useEffect, useState } from "react";
import { createCustomer, deleteCustomer, getCustomers, updateCustomer } from "../services/customersService";

export const useGetCustomers = () => {
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    
    useEffect(() => {
        
        const obtenerUsuarios = async () => {
            try {
                const resp = await getCustomers();
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

export const useCreateCustomerwe = async (user) => {
    const [usersData, setUsersData] = useState([])
    try {
        // console.log('userP', userP);
        return resp = await createCustomer(user)
     
        // console.log('resp.data', resp.data);

        // setIsAuthenticated(true)
    } catch (error) {
        console.log(error);
    }
}

export const useCreateCustomer = () => {
    const [isCreated, setIsCreated] = useState(false);

    const creaCustomer = async (data) => {
        try {
            const resp = await createCustomer(data); // Aquí llamas a la API
            if (resp) {
                setIsCreated(true);
            }
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    };

    return { isCreated, creaCustomer };
};

export const useUpdateCustomer = async (id, customer) => {

    try {
        return  await updateCustomer(id, customer)
    } catch (error) {
        
    }

}

export const useDeleteCustomer = async (id) => {
    try {

        return  await deleteCustomer(id)
     

    } catch (error) {
        console.log(error);

    }
}