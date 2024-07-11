import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function limitEx() {
        const [limit_amount, setLimAm] = useState()
        const [pass, setPassword] = useState()
        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/limitEx', {limit_amount, pass})
            .then(result => {
                console.log(result)
                if(result.data==="Success") {
                    localStorage.setItem('limitAmount', limit_amount);
                    navigate("/home")
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className = 'bg-white p-3 rounded w-25'>
        <h2><b>Set the limit</b></h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='limitAmount'>
                    <strong>Enter your amount:</strong>
                </label>
                <input type="number" 
                  placeholder="Amount" 
                  autoComplete="on" 
                  name="limitAmount" 
                  className="form-control rounded-0"
                  onChange={(e) => setLimAm(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Password</strong>
                </label>
                <input type="password" 
                  placeholder="Enter Password"  
                  name="password" 
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Submit
            </button>
        </form>
        <p>Don't Have an Account?</p>
        <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-default">
          Sign Up
        </Link>
        
        
    </div>  
</div>
    );

}

export default limitEx;