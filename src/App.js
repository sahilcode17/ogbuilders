import React from 'react';

import './App.css';
import {Switch,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Registered from "./components/Registered"
function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Hero}  />
     <Route exact path="/register" component={Registered}  />
     </Switch>
     <Footer/>

   </React.Fragment>
  );
}

export default App;
