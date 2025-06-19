import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const [inp, setInp] = useState({});
    const navigate = useNavigate();


    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setInp((values) => ({ ...values, [name]: value }));
  
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inp)

      let api = "http://localhost:8000/user/registration";

      try {
        const response = await axios.post(api,inp);
        console.log(response);
        
        navigate('/')

      } catch (error) {
        console.log(error);
        
       }
    };

  return (
    <>
       <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" name='name' value={inp.name} onChange={handleInput}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name='email'  value={inp.email} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" name='password'  value={inp.password} onChange={handleInput} />
        </Form.Group>

        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Registration