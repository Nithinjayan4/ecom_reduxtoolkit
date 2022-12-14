
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Router,
} from "react-router-dom";
import React from 'react'



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
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/regsiter' component={Register} />
            <Route exact path='/account' component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App
