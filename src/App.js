import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51I99H7LvmKKU7Q0SiHRWTK4mvOYkjEed3wzO0aHbJdjuxpblzr32Iz6OzAtRX3wS3i06D6pFO24JXBhJLtvbzyzJ00jrIywGxW");



function App() {

  const [{}, dispatch]= useStateValue();
  
  //listner useEffect which always going to keep tha track of people who is signed in 

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); //run only ones when the app runs


  return (
    <Router><div className="app">
    
    <Switch>
    <Route path="/login"> 
    <Login/>

    </Route>
    <Route path="/checkout">
    <Header/>
     <Checkout/>
    </Route>

    <Route path="/orders">
    <Header/>
    <Orders/>
     
    </Route>

    <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>
      <Payment/>
    </Elements>
    
    </Route>

    <Route path="/">
    <Header/>
    <Home/>
    </Route>
    
    </Switch>
    
  </div></Router>
    
  );
}

export default App;
