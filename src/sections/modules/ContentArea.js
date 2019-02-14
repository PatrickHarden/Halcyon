import React from "react";
import Slider from "react-slick";
import { Container } from 'reactstrap';

export default class ContentArea extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        console.log(this.props.section)
    }

    render() {

        return (
            <div className='contentArea'>
                Content Area
            </div>
        
        );
  }
}