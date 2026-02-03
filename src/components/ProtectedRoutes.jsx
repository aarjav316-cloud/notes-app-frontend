import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext)
    

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default ProtectedRoute