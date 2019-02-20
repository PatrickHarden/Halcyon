import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import BarIcon from '../../images/barIcon.png'
import FoodHallIcon from '../../images/foodHallIcon.png'
import RestaurantIcon from '../../images/restaurantIcon.png'
import OpenTableIcon from '../../images/icon-open-table.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFacebook, faTwitter, faInstagram} from '@fortawesome/fontawesome-free-brands'
  import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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
                        <Row key={index}>
                            <Col sm={3}>
                                <img className='hidden-xs' src={store.acf.featured_image} />
                            </Col>
                            <Col sm={6}>
                                <h4>{ReactHtmlParser(store.title.rendered)}</h4>
                                <small>Hours: Mon-Sun 8am-10pm</small>
                                {(store.acf.store_copy) ? <div className='hidden-xs'>{ReactHtmlParser(store.acf.store_copy)}</div> : ''}
                            </Col>
                            <Col sm={3}>
                                <img src={RestaurantIcon} className="diningIcon" />
                                {(store.acf.open_table) ? <a href={store.acf.open_table} target="_blank"><img src={OpenTableIcon} alt='open table logo'/></a> : ""}
                                {(store.acf.twitter) ? <a className='social-icon' href={store.acf.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a> : ""}
                                {(store.acf.facebook) ? <a className='social-icon' href={store.acf.facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} className='icon' /></a> : ""}
                                {(store.acf.instagram) ? <a className='social-icon' href={store.acf.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon' /></a> : ""}
                                {(store.acf.street_address) ? <a href={"//maps.google.com/?q="+store.acf.street_address} target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /></a> : ""}
                                {(store.acf.phone_number) ? <a href={store.acf.phone_number}><FontAwesomeIcon icon={faPhone} className='icon' /></a> : ""}
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