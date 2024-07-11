import { useState, useEffect } from "react";
import axios from 'axios'
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
 
function showwallet() {
    const email = localStorage.getItem('email');
    console.log(email)
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/fetchwallet')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <table className="table">
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>wallet_id</th>
                            <th>bank</th>
                            <th>amount</th>
                            <th>test</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                if (user.email === "a@a"){
                                return (<tr>
                                    <td>{user.email}</td>
                                    <td>{user.wallet_id}</td>
                                    <td>{user.bank}</td>
                                    <td>{user.amount}</td>

                                </tr>

                                )}
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default showwallet;