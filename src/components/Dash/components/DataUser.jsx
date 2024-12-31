import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { onLogout } from '../../../services'
import { useGetBranchesAvailables } from '../../../Hooks/useBranchs'
import { changeUserBranch } from '../../../services/branchServices'


function DataUser() {

    const { user, setUser } = useAuth()
    const { branches } = useGetBranchesAvailables()
    const [selectedBranch, setSelectedBranch] = useState('')

    useEffect(() => {
        if (user.branch.id) {

            setSelectedBranch(user.branch.id);
        }
    }, [user.branch.id]);

    //cambio de sucrsal de usuraio en el select
    const handleChangeBranch = async (e) => {
        try {
            const resp = await changeUserBranch(user.id, e.target.value)

            if (resp.data && resp.data.payload) {

                setSelectedBranch(e.target.value)

                setUser((prevUser) => ({
                    ...prevUser,
                    branch: {
                        id: resp.data.payload.branch._id,
                        name: resp.data.payload.branch.address,
                    }, // Actualiza solo el campo branch
                }))

                // user.branch.id = resp.data.payload.branch
            }

        } catch (error) {
            console.log('error change banch', error);

        }
    }

    const logOut = async () => {
        try {
            const response = await onLogout({})
            if (response && response.status === 200) {
                // navigate('/menu');
                window.location.href = '/session/login'
            } else {
                console.log('Error al cerrar sesión, código de estado:', response.status);
            }
        } catch (error) {
            console.log('Error al cerrar sesión:', error)
        }
    }


    return (
        <div className=" d-flex flex-row-reverse align-items-center p-2 border-bottom border-warning border-2 w-100 gap-3">
            <button className="btn-prin d-flex align-items-center justify-content-center" onClick={() => logOut()} >
                <i className="bi bi-person-x p-2 fs-4"></i>
                LogOut
            </button>
            <div className='d-flex flex-column justify-content-center align-items-center'>

                    <span className='fs-6 mb-1 fst-italic'>Sucursal a ordenar</span>
                <select className='form-select text-uppercase' style={{ maxWidth: '200px' }} value={selectedBranch} onChange={handleChangeBranch}>
                    {
                        branches.map((branch) => (
                            <option value={branch.id}> {branch.name} </option>

                        ))
                    }
                </select>

            </div>
            <h5>
                {
                    user.fisrtsName
                }
                {/* {
                    user.payload
                        ? user.payload.fisrtsName
                        : user.fisrtsName
                } */}

            </h5>

            {/* <p className=''>Usuario:</p> */}
        </div>
    )
}

export default DataUser