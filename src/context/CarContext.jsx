import { createContext, useState } from "react"

export const CarContext = createContext();

export const CarProvider = ({children}) => {


    const [count, setCount] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [idCard, setIdCard ] = useState('')
    const [idCustomer, setIdCustomer ] = useState('')

    // const handleAdd = () =>{
    //     setCount (count + 1);
    // }

    // const handleRemove = () =>{
    //     if (count === 0) return;
        
    //     setCount (count - 1);
    // }

    return(
        <CarContext.Provider value = {{count, setCount, isEdit, setIsEdit, idCard, setIdCard, idCustomer, setIdCustomer}}>
            {children}
        </CarContext.Provider>
    )
}