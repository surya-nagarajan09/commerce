import React  from "react";


import Home from "./Components/Home"

import Cart from "./Components/Cart"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp"
import Buy from "./Components/Buy";
import {BrowserRouter as Router,Route,Redirect} from "react-router-dom";
import Nav from "./Components/Nav";
import Adress from "./Components/Adress";
import Order from "./Components/ordersummary"
import Display from "./Components/Display"


const  App=()=> {
   const loggedIn=sessionStorage.getItem("logged")
   console.log(loggedIn)

  
  return (
    <div >
      <Nav/>
      <Router>
        <div>
       <Route path="/"  exact component={Home}/>
       <Route path="/products" exact component={Display}/>
       <Route path="/Cart"strict exact render={()=>((loggedIn)? (<Cart/>): (<Redirect to="/Login"/>))} />
       <Route path="/Login" exact component={Login}/>
       <Route path="/Signup" exact component={SignUp}/>
       <Route path="/Buy" exact strict render={()=>((loggedIn)? (<Buy/>): (<Redirect to="/Login"/>))}/>
       <Route path="/adress" excact component={Adress}/>
       <Route path="/placeorder" exact component={Order}/>
       </div>
      </Router>
      
      
    </div>
  );
}

export default App;
