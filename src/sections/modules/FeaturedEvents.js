import React from "react";
import Link from 'react-static';
import ReactHtmlParser from 'react-html-parser';
import Button from 'reactstrap';

//  <SimpleSlider events={this.props.events} />

var eventArray = [];

export default class SimpleSlider extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
    }

    render() {

        return (
        <div className='events-container'>
            {home.acf.halcyon_happenings.heading &&
            <div className='heading-container'>
                <Container>
                <h2>{home.acf.halcyon_happenings.heading}</h2>
                </Container>
            </div>
            }
            <Container>
            <Row>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[0]}
                </Col>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[1]}
                </Col>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[2]}
                </Col>
            </Row>
            <Link to="/events" className="pull-right">View All<img className='arrow' src={rightArrow} alt='right-arrow'/></Link>
            </Container>
        </div>
        );
  }
}