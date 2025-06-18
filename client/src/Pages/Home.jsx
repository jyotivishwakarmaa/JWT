import React, { useEffect } from 'react'
import axios from 'axios';

const Home = () => {

const userAuthentication=async()=>{

    const token = localStorage.getItem('token');

    if(token){
     
        let api = "http://localhost:8000/user/authentication";
        const response= await axios.post(api, null, {headers:{'token':token}})
        console.log(response.data);

        localStorage.setItem('username', response.data.name);
        localStorage.setItem('email', response.data.email);
        
    }
    
}

    useEffect(()=>{
      userAuthentication()
    }, [])
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

export default Home