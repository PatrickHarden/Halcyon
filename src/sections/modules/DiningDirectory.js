import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import BarIcon from '../../images/barIcon.png'
import FoodHallIcon from '../../images/foodHallIcon.png'
import RestaurantIcon from '../../images/restaurantIcon.png'

import '../../css/modules/diningDirectory.css'

export default withSiteData(class DiningDirectory extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
    const stores = this.props.stores

    return (   
        <Container className='diningDirectory'>
        <br />
        <br />
        <div className='heading-container'>
            <Container>
                    <h2>{this.props.section.heading}</h2>
            </Container>
        </div>
        <div className="diningRows">
        {console.log(stores)}
                {stores.map((store, index) => (
                (store.acf.store_type == "restaurant") ? 
                <Row ley={index}>
                    <Col sm={3}>
                        <img src={RestaurantIcon} className="diningIcon" />
                        <img src={store.acf.featured_image} />
                    </Col>
                    <Col sm={6}>
                        <h4>{ReactHtmlParser(store.title.rendered)}</h4>
                        <small>Hours: Mon-Sun 8am-10pm</small>
                        {(store.acf.store_copy) ? <div>{ReactHtmlParser(store.acf.store_copy)}</div> : ''}
                    </Col>
                    <Col sm={3}>
                        {(store.acf.website) ? <a href={store.acf.website}>website</a> : ""}
                        {(store.acf.twitter) ? <a href={store.acf.twitter}>twitter</a> : ""}
                        {(store.acf.facebook) ? <a href={store.acf.facebook}>facebook</a> : ""}
                        <Link to={`/dining/${store.slug}/`} className="halcyon-button"><h5><div>View Details ></div></h5></Link>
                    </Col>
                </Row>
                : "" 
                ))}
        </div>
        </Container>
    );
  }
})