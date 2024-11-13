import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


function ProtectedRoute() {

    const {isAuthenticated} = useAuth()
    const location = useLocation()

    
    if(!isAuthenticated) return <Navigate to={"/session/login"} replace state={{from: location}}/>;

    return <Outlet/>;

 
}

export default ProtectedRoute