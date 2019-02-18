import React from "react";
import { withSiteData } from 'react-static'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import CryptoJS from 'crypto-js';

export default withSiteData(class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: ''
        }
    }

    componentDidMount() {
        let component = this;
        let signature = component.gformAuth('1', '04f7c94448', '16658bbbf1acf17', "GET");
        let gformURL = 'https://halcyon.dev.v3.imaginuitycenters.com/gravityformsapi/forms/1?api_key=04f7c94448&signature=' + signature;
        
        let formData;

        axios.all([
            axios.get(gformURL),
        ])
        .then(axios.spread(function (form) {
            formData = form;
        }))    
        .catch((err) => {
            console.log(err);
        });
        this.setState({
            form: formData
        })
    }
    

    gformAuth(gform, pubkey, privkey, ajaxMethod){
        let component = this;
        // Generate an HMAC SHA1 hash, then convert it to a URL-encoded base64 string.
        // One of these authentication URLs must be generated to:
        //      1) to retrieve a list of form IDs based on the form name (this.props.gformTitle)
        //      2) to retrieve the fields and variables associated with the specified form
        function CalculateSig(stringToSign, privateKey){
            let hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
            let base64 = hash.toString(CryptoJS.enc.Base64);
            return encodeURIComponent(base64);
        }
      
        let d = new Date,
            expiration = 3600, // 1 hour
            unixtime = parseInt(d.getTime() / 1000),
            future_unixtime = unixtime + expiration,
            route = "forms/" + gform;
      
        let stringToSign = pubkey + ":" + ajaxMethod + ":" + route + ":" + future_unixtime;
        let sig = CalculateSig(stringToSign, privkey);
        return sig + '&expires=' + future_unixtime;
      }

    render() {

        return (
            <div className='imageCarousel'>
                <div className='heading-container'>
                        <h2>{this.props.section.heading}</h2>
                </div>  
                {console.log(this.state.formData)}
            </div>
        );
    }
})