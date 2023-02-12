import React from 'react'
import{Outlet, Navigate} from 'react-router-dom'

const PvRoutes = () =>{
    const auth = localStorage.getItem("login")
    if(auth)
    {
        return <Outlet/>
    }
    else{
        return <Navigate to={"/register2"}/>
    }
}
export default PvRoutes