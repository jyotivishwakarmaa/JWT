import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
const navigate = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/')
    }
  return (
    
    <>
    
    <h1>welcome to user dashboard</h1>

   {/* welcome : {localStorage.setItem('username')} */}
   
   <a href="#" onClick={logout}>Logout!</a>
   </>
  )
}

export default Dashboard