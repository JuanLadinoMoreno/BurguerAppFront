import { useEffect, useState } from "react";
import { createBranch, getBranches, getBranchesAvailable, updateBranch } from "../services/branchServices";

export const useGetAllBranches = () => {
    const [allBranches, setAllBranches] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    
    useEffect(() => {
        
        const useBranches = async () => {
            try {
                
                const resp = await getBranches();
                
                setAllBranches(resp.data.payload)
                console.log('resp', resp);
                
            } catch (error) {
                console.log(error);
            }
        }
        
        
        setTimeout(() => {
            
            useBranches()
            
            setIsLoading(false);
        }, 1000);
        
    }, []);
    
    return { allBranches, setAllBranches, isLoading }
}

export const useGetBranchesAvailables = () => {
    const [branches, setBranches] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    
    
    
    useEffect(() => {
        
        const useBranches = async () => {
            try {
                
                const resp = await getBranchesAvailable();
                
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

export const useCreateBranch = async (branch) => {
    try {
        return await createBranch(branch)
    } catch (error) {
        console.log('error', error)
    }
}
export const useUpdateBranch = async (bid, branch) => {
    try {
        return await updateBranch(bid, branch)
    } catch (error) {
        console.log('error', error)
    }
}