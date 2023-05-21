

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    return (
        localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRoutes