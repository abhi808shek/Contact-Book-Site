import React ,{useEffect} from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

const PrivateRoutes = ({isAuthenticated,children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuthenticated) {
             navigate("/login")
        }
    }, [])
    return children
}

export default PrivateRoutes;