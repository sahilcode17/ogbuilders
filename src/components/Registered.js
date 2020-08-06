import React, { Component } from 'react'
import Reg from "../reg.png"
import Conf from "../conf.png"
import Ver from "../ver.png"

export default class Registered extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <div class="content has-text-centered pb-3 pt-2">
                        <h3>Your application has been <strong className="has-text-primary-dark">registered</strong>  <br/>A representative from OGB will contact you within a week for verification</h3>
                    </div>
                    <div className="columns">
                    <div className="column ">
                    <img src={Reg}   />
                    </div>
                    <div className="column">
                    <img src={Ver}   /> 
                    </div>
                    <div className="column">
                   <img src={Conf}   />
                    </div>
                    </div>

                    </div>
                </div>
            </section>
        )
    }
}
