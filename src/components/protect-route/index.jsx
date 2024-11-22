import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({children,token}) => {
    if(!token){
        return <Navigate to={"/"} replace/>
    }
    return <>{children}</>
}

export default ProtectRoute