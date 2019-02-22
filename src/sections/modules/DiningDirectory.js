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
  import { faPhone, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import helpers from '../../helpers.js'

import '../../css/modules/diningDirectory.css'

var globalHours = [];
var globalHolidayHours = [];
var storeCounter;

export default withSiteData(class DiningDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 8
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(){
        this.setState({
            amount: this.state.amount + 10
        })
    }

    componentWillMount() {
        if (this.props.centerInfo.acf.standard_hours) {
            for (var i = 0; i < this.props.centerInfo.acf.standard_hours.length; i++) {
                globalHours.push(this.props.centerInfo.acf.standard_hours[0])
            }
        }
        if (this.props.centerInfo.acf.alternate_hours) {
            for (var i = 0; i < this.props.centerInfo.acf.alternate_hours.length; i++) {
                globalHolidayHours.push(this.props.centerInfo.acf.alternate_hours[0])
            }
        }
        storeCounter = this.props.stores.map(store => {
            if (store.acf.store_type == "restaurant") {
                return <div></div>
            }
        })
        storeCounter = storeCounter.filter(function (el) {
            return el != null;
        });
        console.log(storeCounter.length)
    }

    componentWillUpdate(){
        if (storeCounter.length <= this.state.amount){
            document.getElementById('loadMore').style.display = 'none';
        }
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
                {console.log(this.state.amount)}
                    {stores.slice(0, this.state.amount).map((store, index) => (
                        (store.acf.store_type == "restaurant") ? 
                        <div key={index} className='store-single'>
                            <div className='image-wrapper'>
                                <img className='hidden-xs' src={store.acf.featured_image} />
                            </div>
                            <div className='content-wrapper'>
                                <h4 className='store-title'>{ReactHtmlParser(store.title.rendered)}</h4>
                                <div className='hours'>Hours: {helpers.getHours(store, globalHours, globalHolidayHours)}</div>
                                {(store.acf.store_copy) ? <div className='hidden-xs'>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 200))}</div> : ''}
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
                    <div class="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                </Container>
            </div>
        );
  }
})