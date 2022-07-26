import React ,{useEffect} from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"

const PrivateRoutes = ({children}) => {
    
    const {userId } = useSelector((state)=>state.login_reducer)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userId) {
             navigate("/login")
        }
    }, [userId])
    return children
}

export default PrivateRoutes;