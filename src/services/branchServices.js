import axiosD from "./axios";

export async function getBranches(){

    try {
        return await axiosD.get('/branches');
        
    } catch (error) {
        console.log('url not found');
    }
    
}
export async function getBranchesAvailable(){

    try {
        return await axiosD.get('/branches/available');
        
    } catch (error) {
        console.log('url not found');
    }
    
}

export const createBranch = async (branch) => axiosD.post(`/branches`, branch);

export const updateBranch = async (bid, branch) => axiosD.put(`/branches/${bid}`, branch);

// cambia sucursal de usuario
export const changeUserBranch = async (userId, branchId) => axiosD.patch(`/branches/users/${userId}/sucursal`, {branchId: branchId});
