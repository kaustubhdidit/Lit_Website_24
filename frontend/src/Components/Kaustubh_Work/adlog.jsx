import React from 'react'
import { useState } from "react";
import {useNavigate} from "react-router-dom";

import { Link, useLocation } from "react-router-dom";

const adlog = () => {

    const [credentials, setCredentials] = useState({email:"" , password:""})
    const navigate= useNavigate();
  
    const handleSubmit= async(e)=>{
        e.preventDefault();
  
        const response = await fetch("http://localhost:3001/api/v1/admin/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
             
            },
            
            body: JSON.stringify({email:credentials.email, password:credentials.password}),
          });
          
          const json = await response.json()
          console.log(json)
          if(json.success){
            
            // const userId = extractUserIdFromToken(token);
            
            
            localStorage.setItem('token', json.authtoken);
            const token = localStorage.getItem('token');
            console.log(token);
            // props.showAlert("Logged in successfully", "success")
            // console.log(localStorage.getItem('token').json)
            navigate("/");
         
          }
          else{
            props.showAlert("Invalid details", "danger")
          }
    }
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

  return (
    <>
  
  
  <form onSubmit={handleSubmit} style={{ width: '9cm', margin: 'auto' }}>
    <div className="mb-3" >
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={credentials.email}
          onChange={onChange}
        />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
    </div>
    <button style={{backgroundColor:'#0d6efd'}} type="submit" className="btn btn-primary">Submit</button>
  </form>

  </>
  )
}

export default adlog