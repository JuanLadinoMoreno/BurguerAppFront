import { useEffect, useState } from "react";
import { getBranches } from "../services/branchServices";

export const useGetBranches = () => {
    const [branches, setBranches] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    
    
    
    useEffect(() => {
        
        const useBranches = async () => {
            try {
                
                const resp = await getBranches();
                
                setBranches(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }
        
        useBranches()
        
        // setTimeout(() => {
            
            
        //     setIsLoading(false);
        // }, 1000);
        
    }, []);
    
    return { branches }
}