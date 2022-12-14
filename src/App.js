import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import React from 'react'

import "./pages/account/account.css"
import "./pages/details/details.css"
import "./pages/login/login.css"

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/login/Register";
import { Account } from "./pages/account/Account";
import { useSelector } from "react-redux";
import { Login } from "./pages/login/Login";


const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/register' element={<Register />} />
            <Route  path='/account' element={<Account />} />
          </Routes>
          <Footer />
          </BrowserRouter>
  
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App
