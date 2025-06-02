import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'


const App = () =>{
    useEffect(() => {
    //   setLocalStorage()
    getLocalStorage()
    },)
    
    return(
       <>
       <Login  hello/> 
       {/* <EmployeeDashboard /> */}
       {/* <AdminDashboard/> */}
       </>
    )
}
export default App