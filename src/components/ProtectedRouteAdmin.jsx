import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function ProtectedRouteAdmin() {
    const { user } = useAuth()
    const location = useLocation()

    if (user.role !== 'admin') return <Navigate to={"/menu"} replace state={{ from: location }} />;
    
    return <Outlet/>;
}

export default ProtectedRouteAdmin