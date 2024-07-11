import React from 'react'
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function transfer() {
        const [email, setEmail] = useState()
        const [source, setsource] = useState()
        const [dest, setdest] = useState()
        const [amount, setamount] = useState()
        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/transfer', {email,source,dest,amount})
            .then(result => {
                console.log(result)
                if(result.data==="Success") {
                    localStorage.setItem('email', email);
                    navigate("/home")
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className = 'bg-white p-3 rounded w-25'>
        <h2>Transfer</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type="email" 
                  placeholder="Enter Email" 
                  autoComplete="off" 
                  name="email" 
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Source wallet</strong>
                </label>
                <input type="number" 
                  placeholder="Enter source"  
                  name="source" 
                  className="form-control rounded-0"
                  onChange={(e) => setsource(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>destination wallet</strong>
                </label>
                <input type="number" 
                  placeholder="Enter destination"  
                  name="destination" 
                  className="form-control rounded-0"
                  onChange={(e) => setdest(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>
                    <strong>destination wallet</strong>
                </label>
                <input type="number" 
                  placeholder="Enter amount"  
                  name="amount" 
                  className="form-control rounded-0"
                  onChange={(e) => setamount(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Transfer
            </button>
        </form>
        <p>Want to go back?</p>
        <Link to="/home" className="btn btn-default border w-100 bg-light rounded-0 text-default">
          Go back
        </Link>
        
        
    </div>  
</div>
    );

}

export default transfer;