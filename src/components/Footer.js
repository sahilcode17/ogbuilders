import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
           <footer className="footer pb-0 " >
           <div className="columns ml-6">
           <div className="column">
                   <h3 className="title is-4">Our Generation <br/>Builders</h3>
                   <p>123456,NoName Street <br/> Jaipur, <br/>Rajasthan ,India.</p>
                   <p className="text is-light has-text-grey mt-3">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2020 OCB </p>
               </div>
               <div className="column">
                   <h3 className="title is-4">Need help? <br/>Contact us</h3>
                   <p className="mb-3"><i class="fa fa-phone" aria-hidden="true"></i> +919876543210</p>
                   <p><i class="fa fa-envelope" aria-hidden="true"></i> support@ogbuilders.com</p>
               </div>
               <div className="column">
                   <h3 className="title is-4">Social</h3>
                   
                   <i class="fa fa-facebook-official pr-2 is-size-4" aria-hidden="true"></i>
                    <i class="fa fa-instagram pr-2 is-size-4" aria-hidden="true"></i> 
                    <i class="fa fa-twitter is-size-4" aria-hidden="true"></i>
                    <p className="mt-6 "> <a className="has-text-grey" >Privacy Policy</a> <a className="has-text-grey">Terms of Use</a>  </p>
               </div>
           </div>
               
               
           </footer>
        )
    }
}
