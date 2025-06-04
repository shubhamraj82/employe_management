import React, { useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () =>{
    const [User, setUser] = useState(null)
     const authData =useContext(AuthContext)
    
    const HandleLogin=(email,password)=>{
        if(email=='raj.subham3004@gmail.com' && password=='123'){
            setUser('admin')
        }else if( email=='raj.shubh8216@gmail.com' && password=='123'){
           setUser('employee')
        }else{
            alert("Invalid Credentials")
        }
    }

    // useEffect(()=>{
    //    HandleLogin('raj.subham3004@gmail.com','123')
    // },[])
    
   
    return(
       <>
       {!User? <Login handleLogin={HandleLogin} />:''} 
       {User =='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
       </>
    )
}
export default App