import React, { useContext, useEffect, useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () =>{
    const [User, setUser] = useState(null)
    const [loggedInuserData, setLoggedinUserData] = useState(null)
    const authData = useContext(AuthContext)
    
    // Initialize localStorage when component mounts
    useEffect(() => {
        setLocalStorage()
    }, [])
    
    // Check for logged in user on page load or refresh
    useEffect(() => {
        const loggedInUserStr = localStorage.getItem('loggedInUser')
        if(loggedInUserStr){
            const userData = JSON.parse(loggedInUserStr)
            setUser(userData.role)
            setLoggedinUserData(userData.data)
        }
    }, [])
    const HandleLogin = (email, password) => {
        // Check admin login
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin')
            localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
            return; // Exit function after successful admin login
        }
        
        // Get employees data
        const employeesData = localStorage.getItem('employees') ? 
            JSON.parse(localStorage.getItem('employees')) : [];
            
        // Find matching employee
        const employee = employeesData.find(emp => 
            emp.email === email && emp.password === password
        );
        
        if (employee) {
            setUser('employee')
            setLoggedinUserData(employee)
            localStorage.setItem('loggedInUser', JSON.stringify({
                role: 'employee',
                data: employee
            }))
            return; // Exit function after successful employee login
        }
        
        // If no match found
        alert("Invalid Credentials")
    }

    
      return(
       <>
       {!User ? <Login handleLogin={HandleLogin} /> : ''} 
       {User === 'admin' ? <AdminDashboard/> : (User === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInuserData}/> : null)}
    </>
    )
}
export default App