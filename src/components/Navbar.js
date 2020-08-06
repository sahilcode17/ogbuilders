import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Logo from "../logo.png"

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
             <Link to="/">
             <div className="navbar-brand">
             <h1 className="is-size-3 has-text-weight-bolder has-text-black pl-4" >OGB</h1>
                </div>
                </Link>
                <div id="menu" className="has-text-centered pt-3">
                <a id="home" class="navbar-item ">
         Home 
         
      </a>
      <a class="navbar-item ">
            About
      </a>
      <a class="navbar-item  ">
            Help
      </a>
                </div>
               
      
                <div className="navbar-end">
                <div class="navbar-item">
        
        <div class="control">
        <button class="button is-success " id="btn-nav">
            Log In
          </button>
        
          
        </div>
        </div>
                </div>
            </nav>
            
        )
    }
}
