import axiosD from "./axios";

export async function getBranches(){

    try {
        return await axiosD.get('/branches/available');
        
    } catch (error) {
        console.log('url not found');
    }
    
}

// cambia sucursal de usuario
export const changeUserBranch = async (userId, branchId) => axiosD.patch(`/branches/users/${userId}/sucursal`, {branchId: branchId});
