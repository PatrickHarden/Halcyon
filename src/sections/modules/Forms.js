import React from "react";
import { withSiteData } from 'react-static'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default withSiteData(class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: []
        }
    }

    // componentDidMount() {
    //     axios.get('https://halcyon.dev.v3.imaginuitycenters.com/gravityformsapi/forms/1/?api_key=04f7c94448&signature=QGZALH2bJfsMzxM9K%2BFy7LTIDiM%3D&expires=1553135455').then(form => {
    //             this.setState({
    //                 formData: form.data
    //             })
    //         }
    //     )
    // }

    render() {

    return (
        <div className='imageCarousel'>
            <div className='heading-container'>
                     <h2>{this.props.section.heading}</h2>
            </div>  
            {console.log(this.props.forms)}
        </div>
    );
  }
})