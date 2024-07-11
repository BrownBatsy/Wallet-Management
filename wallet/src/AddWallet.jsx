import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";


function addwallet() {
        const [wallet_id, setWallet_ID] = useState()
        const [bank, setBank] = useState()
        const [amount, setAmount] = useState()
        const navigate = useNavigate()
        const email = localStorage.getItem('email');
        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/AddWallet', {email, wallet_id, bank, amount})
            .then(result => {console.log(result)
            navigate('/home')
            })
            .catch(err => console.log(err))
        }

        
    return (
        <div className="d-flex justify-content-center align-item-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Add Wallet</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Wallet ID</strong>
                    </label>
                    <input type="text" placeholder="Enter ID" autoComplete="off" 
                        name="email" className="form-control rounded-0" onChange={(e) => setWallet_ID(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Bank</strong>
                    </label>
                    <input type="text" placeholder="Enter Bank" autoComplete="off" 
                        name="email" className="form-control rounded-0" onChange={(e) => setBank(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Amount</strong>
                    </label>
                    <input type="number" placeholder="Enter Amount" 
                        name="email" className="form-control rounded-0" onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Add Wallet</button>
                </form>
                <Link to='/home' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Return Home</Link>
            </div>
        </div>
    );
}

export default addwallet;