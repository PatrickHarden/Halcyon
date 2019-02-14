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
        const section = this.props.section

        return (
            <div className='contentArea'>
                {(section.display_options == "fullwidth") ? 
                <div>Full width</div>
                : ""}
            </div>
        
        );
  }
}