import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { onLogout } from '../../../services'

function DataUser() {

    const { user } = useAuth()
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