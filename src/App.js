import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OneProduct from './Components/OneProduct/OneProduct';
import Admin from './Components/Admin/Admin';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/product/:productKey">
              <OneProduct></OneProduct>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
                <Admin></Admin>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
