import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";

const Login = () => {

  const[email, setEmail]=useState('')
  const[password, setPassword] = useState('')
    

  const handleSubmit = async(e)=>{
    e.preventDefault();

    let api = "http://localhost:8000/user/login";
      
    try {
      
        const response = await axios.post(api, {email, password});
        console.log(response.data);

        localStorage.setItem('token',response.data.Token)
    }   catch (error) {
        console.log(error);
      
    }
  }

  return (
    <>
      <Form>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Login