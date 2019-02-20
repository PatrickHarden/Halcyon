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
            <div className='diningDirectory'>
                <div className='heading-container'>
                    <Container>
                            <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                <Container className="diningRows">
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
                                {(store.acf.open_table) ? <a href={store.acf.open_table}>open table</a> : ""}
                                {(store.acf.twitter) ? <a href={store.acf.twitter}>twitter</a> : ""}
                                {(store.acf.facebook) ? <a href={store.acf.facebook}>facebook</a> : ""}
                                {(store.acf.instagram) ? <a href={store.acf.instagram}>instagram</a> : ""}
                                <Link to={`/dining/${store.slug}/`} className="halcyon-button arrow">View Details</Link>
                            </Col>
                        </Row>
                        : "" 
                    ))}
                </Container>
            </div>
        );
  }
})