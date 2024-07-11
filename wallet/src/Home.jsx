import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";



function Home() {
    const email = localStorage.getItem('email');
    const [wallet, setWallets] = useState([])
    const handleLogout = () => {
        localStorage.removeItem('email');
        history.push('/login'); // Navigate to login page after logout
      };
    // useEffect(() => {
    //     axios.get('https://localhost:3001/home')
    //     .then(result => setWallets(result.data))
    //     .catch(err => console.log(err))
    // }, [])
    return(
<div className = 'bg-white p-3 rounded w-25'>
        <h2>Welcome </h2>
        {/* <table className='table'>
            <thead>
                <tr>
                    <th>Wallet ID</th>
                    <th>Bank</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table> */}
        <p>Want to add a new wallet?</p>
        <Link to="/AddWallet" className="btn btn-default border w-100 bg-light rounded-0 text-default">
          Add Wallet
        </Link>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-default" onClick={handleLogout}>
        Sign Out</Link>
        <Link to="/showwallet" className="btn btn-default border w-100 bg-light rounded-0 text-default" onClick={handleLogout}>
        See My Wallets</Link>
        <Link to="/transferwallet" className="btn btn-default border w-100 bg-light rounded-0 text-default" onClick={handleLogout}>
        Transfer</Link>
        <p>Want to request for a loan?</p>
        <Link to="/loan" className="btn btn-default border w-100 bg-light rounded-0 text-default" onClick={handleLogout}>
        Ask for a loan</Link>
        
        
        </div> 
    );

}

export default Home;