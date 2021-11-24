import React, {useState,useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { useSelector } from 'react-redux'
import HomePage from './components/HomePage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const isLoggedInState:boolean = useSelector((state: any) => state.loginState.loggedIn)
  useEffect(()=> {
    setIsLoggedIn(isLoggedInState)
  },[isLoggedInState])
  
  return (
    <Router>
      <div style={{ backgroundColor: '#f7f8fc', height: '100vh', padding: '10%'}}>
        <Switch>
          <Route path="/login">
            {!isLoggedIn ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {isLoggedIn ? <HomePage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
