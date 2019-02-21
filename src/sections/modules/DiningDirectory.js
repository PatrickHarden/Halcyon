import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import BarIcon from '../../images/barIcon.png'
import FoodHallIcon from '../../images/foodHallIcon.png'
import RestaurantIcon from '../../images/restaurantIcon.png'
import OpenTableIcon from '../../images/icon-open-table.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/fontawesome-free-brands'
  import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import '../../css/modules/diningDirectory.css'

var excerpt;
var regex = /(<([^>]+)>)/ig;

export default withSiteData(class DiningDirectory extends React.Component {

    constructor(props) {
        super(props);
    }

    compressText(store){
        excerpt = store.replace(regex, "").substr(0, 200)
        excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
        return excerpt + "...";
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
                        <div key={index} className='store-single'>
                            <div className='image-wrapper'>
                                <img className='hidden-xs' src={store.acf.featured_image} />
                            </div>
                            <div className='content-wrapper'>
                                <h4 className='store-title'>{ReactHtmlParser(store.title.rendered)}</h4>
                                <div className='hours'>Hours: Mon-Sun 8am-10pm</div>
                                {(store.acf.store_copy) ? <div className='hidden-xs'>{ReactHtmlParser(this.compressText(store.acf.store_copy))}</div> : ''}
                            </div>
                            <div className='action-corner'>
                                <div className='social-container hidden-xs'>
                                    {(store.acf.open_table) ? <a className='open-table' href={store.acf.open_table} target="_blank"><img src={OpenTableIcon} alt='open table logo'/></a> : ""}
                                    {(store.acf.twitter) ? <a className='social-icon' href={store.acf.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a> : ""}
                                    {(store.acf.facebook) ? <a className='social-icon' href={store.acf.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a> : ""}
                                    {(store.acf.instagram) ? <a className='social-icon' href={store.acf.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon' /></a> : ""}
                                </div>
                                <div className='icon-container'>
                                    <div className='restaurant-type'>
                                        {(store.acf.restaurant_type == 'restaurant') &&
                                            <img src={RestaurantIcon} className="diningIcon icon" />
                                        }
                                        {(store.acf.restaurant_type == 'bar') &&
                                            <img src={BarIcon} className="barIcon icon" />
                                        }
                                        {(store.acf.restaurant_type == 'food-hall') &&
                                            <img src={FoodHallIcon} className="foodHallIcon icon" />
                                        }
                                    </div>
                                    {(store.acf.street_address) ? <a className='visible-xs' href={"//maps.google.com/?q="+store.acf.street_address} target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /></a> : ""}
                                    {(store.acf.phone_number) ? <a className='visible-xs' href={store.acf.phone_number}><FontAwesomeIcon icon={faPhone} className='icon' /></a> : ""}
                                </div>
                                <div className='button-wrapper'>
                                    <Link to={`/dining/${store.slug}/`} className="halcyon-button arrow">View Details</Link>
                                </div>
                            </div>
                        </div>
                        : "" 
                    ))}
                </Container>
            </div>
        );
  }
})