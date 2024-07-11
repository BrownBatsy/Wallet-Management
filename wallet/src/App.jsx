import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login'
import Home from './Home'
import AddWallet from './AddWallet'
import ShowWallet from './showwallet'
import Transfer from './transferwallet'
import Loan from './loan'



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/AddWallet" element={<AddWallet/>}></Route>
          <Route path="/ShowWallet" element={<ShowWallet/>}></Route>
          <Route path="/transferwallet" element={<Transfer/>}></Route>
          <Route path="/loan" element={<Loan/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
