import React, { Component } from 'react'
import image from "../home.png"
import {Link} from "react-router-dom"


export default class hero extends Component {
    render() {
        return (
            
            <section className="hero">
            <div className="columns">
                <div className="column pl-6">
                <img src={image}  width="70%" height="70%" />
                </div>
                <div className="column">
            <h1 className="title is-2 pt-6">Register as a contractor</h1>
            <p className="subtitle is-5 pt-2 has-text-grey">All fields are mandatory</p>
                <div class="field">
            <label class="label">Full Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="John Doe" />
            </div>
            </div>
            <div class="field">
            <label class="label">Emai</label>
            <div class="control">
                <input class="input" type="email" placeholder="johndoe@gmail.com"/>
            </div>
            </div>
            <div class="field">
            <label class="label">Contact Number</label>
            <div class="control">
                <input class="input" type="number" placeholder="+91-0000000000"/>
            </div>
            </div>
            <p>Are you a licensed government contractor?</p>
            <div class="field">
            <div class="control">
                
                <input type="radio" name="question"/>
                <label class="radio pl-2 pr-2">
                Yes
                </label>
                <input type="radio" name="question"/>
                <label class="radio pl-2">
               
                No
                </label>
            </div>
            </div>
            <div class="field">
            <div class="control">
                <label class="checkbox pr-2">
                <input type="checkbox"/>
                {""} I agree to the <a href="#">terms and conditions</a> <br/> and <a href="#">Privacy Policy</a>
                </label>
            </div>
                    </div>
                    <Link to="/register">
                    <div class="control">
             <button class="button is-success pb-4" id="btn-hero">Register</button>
        </div>
    </Link>
                    

            
            </div>
                        </div>
            
</section>
        )
    }
}
