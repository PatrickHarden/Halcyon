import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import BarIcon from '../../images/barIcon.png'
import FoodHallIcon from '../../images/foodHallIcon.png'
import RestaurantIcon from '../../images/restaurantIcon.png'
import OpenTableIcon from '../../images/icon-open-table.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'
import { faPhone, faMapMarkerAlt, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import helpers from '../../helpers.js'

import '../../css/modules/diningDirectory.css'

var globalHours = [];
var globalHolidayHours = [];
var storeCounter;
var salesArray = [];


export default withSiteData(class DiningDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 4,
            search: ''
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState({
            amount: this.state.amount + 10
        })
    }

    handleSearch(query) {
        this.setState({ search: query })
    }

    isSale(store) {
        var result = false;
        for (var i = 0; i < salesArray.length; i++) {
            if (salesArray[i].acf.related_store.post_name == store.slug) {
                result = true;
            }
        }
        return result
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
    }

    componentWillUpdate() {
        if (storeCounter.length <= this.state.amount) {
            var loadButton = document.getElementById('loadMore');
            if (typeof (loadButton) != 'undefined' && loadButton != null) {
                loadButton.style.display = 'none';
            }
        }
    }

    render() {
        const stores = this.props.stores

        return (
            <div className='diningDirectory'>
                {(this.props.section.heading) ?
                    <div className='heading-container'>
                        <Container>
                            <h2>{this.props.section.heading}</h2>
                            <div className='restaurant-legend hidden-xs'>
                                <div className='legend-row'>
                                    <div className='legend-icon'><img src={BarIcon} alt="Bar Icon" className="barIcon icon" /></div>
                                    <h2>Bar</h2>
                                </div>
                                <div className='legend-row'>
                                    <div className='legend-icon'><img src={RestaurantIcon} alt="Restaurant Icon" className="diningIcon icon" /></div>
                                    <h2>Restaurant</h2>
                                </div>
                                <div className='legend-row'>
                                    <div className='legend-icon'><img src={FoodHallIcon} alt="Food Hall Icon" className="foodHallIcon icon" /></div>
                                    <h2>Food Hall</h2>
                                </div>
                            </div>
                        </Container>
                    </div> : ""}
                <div className='restaurant-legend visible-xs'>
                    <div className='legend-row'>
                        <Container>
                            <div className='legend-icon'><img src={BarIcon} alt="Bar Icon" className="barIcon icon" /></div>
                            <h2>Bar</h2>
                        </Container>
                    </div>
                    <div className='legend-row'>
                        <Container>
                            <div className='legend-icon'><img src={RestaurantIcon} alt="Restaurant Icon" className="diningIcon icon" /></div>
                            <h2>Restaurant</h2>
                        </Container>
                    </div>
                    <div className='legend-row'>
                        <Container>
                            <div className='legend-icon'><img src={FoodHallIcon} alt="Food Hall Icon" className="foodHallIcon icon" /></div>
                            <h2>Food Hall</h2>
                        </Container>
                    </div>
                </div>
                <Container className='controls-container'>
                    <div className='search'>
                        <label for="search-dining" className="sr-only">Search through the restaurants</label>
                        <input className='search-bar' type="submit" id="search-dining" title="search dining" placeholder="Search..." value={this.state.search} onChange={event => this.handleSearch(event.target.value)} />
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                    </div>
                </Container>
                <Container className="diningRows">
                    {(this.state.search == '') ?
                        <div>
                            {stores.slice(0, this.state.amount).map((store, index) => (
                                (store.acf.store_type == "restaurant") ?
                                    <div key={index} className='store-single'>
                                        <div className='image-wrapper'>
                                            <Link to={`/dining/${store.slug}/`}><img className='hidden-xs' src={store.acf.featured_image} alt="featured store image" /></Link>
                                        </div>
                                        <div className='content-wrapper'>
                                            <Link className='store-title-link' to={`/dining/${store.slug}/`}><h4 className='store-title'>{ReactHtmlParser(store.title.rendered)}</h4></Link>
                                            <div className='hours'>Hours: {helpers.getHours(store, globalHours, globalHolidayHours)}</div>
                                            <div className='red-text'>{(store.acf.flags) ? <div>{store.acf.flags[0] + '!'}</div> : ""}{(this.isSale(store)) ? <div>Offer Available</div> : ""}</div>
                                            {(store.acf.store_copy) ? <div className='hidden-xs'>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 200))}</div> : ''}
                                        </div>
                                        <div className='action-corner'>
                                            <div className='social-container hidden-xs'>
                                                {(store.acf.open_table) ? <a className='open-table' href={store.acf.open_table} target="_blank"><img src={OpenTableIcon} alt='open table logo' /></a> : ""}
                                                {(store.acf.twitter) ? <a className='social-icon' href={store.acf.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a> : ""}
                                                {(store.acf.facebook) ? <a className='social-icon' href={store.acf.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a> : ""}
                                                {(store.acf.instagram) ? <a className='social-icon' href={store.acf.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon' /></a> : ""}
                                            </div>
                                            <div className='icon-container'>
                                                <div className='restaurant-type'>
                                                    {(store.acf.restaurant_type == 'restaurant') &&
                                                        <div className='restaurant icon-wrap'><img src={RestaurantIcon} alt="Restaurant Icon" className="diningIcon icon" /></div>
                                                    }
                                                    {(store.acf.restaurant_type == 'bar') &&
                                                        <div className='bar icon-wrap'><img src={BarIcon} alt="Bar Icon" className="barIcon icon" /></div>
                                                    }
                                                    {(store.acf.restaurant_type == 'food-hall') &&
                                                        <div className='foodHall icon-wrap'><img src={FoodHallIcon} alt="Food Mall Icon" className="foodHallIcon icon" /></div>
                                                    }
                                                </div>
                                                {(store.acf.street_address) ? <a className='visible-xs' href={"//maps.google.com/?q=" + store.acf.street_address} target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /></a> : ""}
                                                {(store.acf.phone_number) ? <a className='visible-xs' href={store.acf.phone_number}><FontAwesomeIcon icon={faPhone} className='icon' /></a> : ""}
                                            </div>
                                            <div className='button-wrapper'>
                                                <Link to={`/dining/${store.slug}/`} className="halcyon-button arrow">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            ))}
                            <div className="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                        </div>
                        :
                        <div>
                            {stores.map((store, index) => (
                                (store.acf.store_type == "restaurant") ?
                                    (store.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) ?
                                        <div key={index} className='store-single'>
                                            <div className='image-wrapper'>
                                                <Link to={`/dining/${store.slug}/`}><img className='hidden-xs' alt="featured store image" src={store.acf.featured_image} /></Link>
                                            </div>
                                            <div className='content-wrapper'>
                                                <Link className='store-title-link' to={`/dining/${store.slug}/`}><h4 className='store-title'>{ReactHtmlParser(store.title.rendered)}</h4></Link>
                                                <div className='hours'>Hours: {helpers.getHours(store, globalHours, globalHolidayHours)}</div>
                                                <div className='red-text'>{(store.acf.flags) ? <div>{store.acf.flags[0] + '!'}</div> : ""}{(this.isSale(store)) ? <div>Offer Available</div> : ""}</div>
                                                {(store.acf.store_copy) ? <div className='hidden-xs'>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 200))}</div> : ''}
                                            </div>
                                            <div className='action-corner'>
                                                <div className='social-container hidden-xs'>
                                                    {(store.acf.open_table) ? <a className='open-table' href={store.acf.open_table} target="_blank"><img src={OpenTableIcon} alt='open table logo' /></a> : ""}
                                                    {(store.acf.twitter) ? <a className='social-icon' href={store.acf.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a> : ""}
                                                    {(store.acf.facebook) ? <a className='social-icon' href={store.acf.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a> : ""}
                                                    {(store.acf.instagram) ? <a className='social-icon' href={store.acf.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon' /></a> : ""}
                                                </div>
                                                <div className='icon-container'>
                                                    <div className='restaurant-type'>
                                                        {(store.acf.restaurant_type == 'restaurant') &&
                                                            <div className='restaurant icon-wrap'><img src={RestaurantIcon} alt="Restaurant Icon" className="diningIcon icon" /></div>
                                                        }
                                                        {(store.acf.restaurant_type == 'bar') &&
                                                            <div className='bar icon-wrap'><img src={BarIcon} alt="Bar Icon" className="barIcon icon" /></div>
                                                        }
                                                        {(store.acf.restaurant_type == 'food-hall') &&
                                                            <div className='foodHall icon-wrap'><img src={FoodHallIcon} alt="Food Mall Icon" className="foodHallIcon icon" /></div>
                                                        }
                                                    </div>
                                                    {(store.acf.street_address) ? <a className='visible-xs' href={"//maps.google.com/?q=" + store.acf.street_address} target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /></a> : ""}
                                                    {(store.acf.phone_number) ? <a className='visible-xs' href={store.acf.phone_number}><FontAwesomeIcon icon={faPhone} className='icon' /></a> : ""}
                                                </div>
                                                <div className='button-wrapper'>
                                                    <Link to={`/dining/${store.slug}/`} className="halcyon-button arrow">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                    : ""
                            ))}
                        </div>
                    }
                </Container>
            </div>
        );
    }
})