import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Menu from "./Menu";
// import Error from "./Error";

function App() {
  return (
   <>
   <Menu/>
   <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Service" component={Service}></Route>

        <Redirect to ="/" component={Home}></Redirect>

        {/* <Route component={Error}></Route> */}
    </Switch> 
   </>
  )
}
 
export default App;
