import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Button, Popover, PopoverBody, PopoverHeader, Row, Col } from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
import ModuleController from '../sections/modules/ModuleController.js';
let moment = require('moment');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'
import { faMapMarkerAlt, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import helpers from '../helpers.js'
import DownArrow from '../images/downArrrow.png'
import PhoneIcon from '../images/phone-icon.png'
import RightArrow from '../images/rightArrow.png'

//
var weeksHours;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = new Date().getDay();
var currentDay = new Date().getDay();
var counter = currentDay;
var globalHours = [];
var globalHolidayHours = [];
var todaysHours;
var temp = 0;
var salesArray = [];
var sales;

export default withRouteData(class Page extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
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

  offerAvailable(slug) {
    this.props.sales.map(sale => {
      if (sale.acf.related_store.post_name == slug) {
        if (this.inDateRange(sale)) {
          salesArray.push(sale)
        }
      }
    })
  }

  inDateRange(sale) {
    var today = new Date().getTime();
    var from = new Date(sale.acf.start_date.substring(0, 4) + '/' + sale.acf.start_date.substring(4, 6) + '/' + sale.acf.start_date.substring(6, 8)).getTime();
    var to = new Date(sale.acf.end_date.substring(0, 4) + '/' + sale.acf.end_date.substring(4, 6) + '/' + sale.acf.end_date.substring(6, 8)).getTime();
    var withinRange = today >= from && today <= to;
    return withinRange
  }

  componentWillMount() {

    this.offerAvailable(this.props.retailer.slug);

    if (this.props.property_options.acf.standard_hours) {
      for (var i = 0; i < this.props.property_options.acf.standard_hours.length; i++) {
        globalHours.push(this.props.property_options.acf.standard_hours[0])
      }
    }
    if (this.props.property_options.acf.alternate_hours) {
      for (var i = 0; i < this.props.property_options.acf.alternate_hours.length; i++) {
        globalHolidayHours.push(this.props.property_options.acf.alternate_hours[0])
      }
    }

    weeksHours = days.map((placeholder, index) => {
      if (counter == 7) {
        counter = 0;
      }
      if (temp == 0) {
        todaysHours = <span>{helpers.getWeekHours(this.props.retailer, days[day], index, globalHours, globalHolidayHours)}</span>
        temp++;
      }
      return <div>{(index == 0) ? <span className='day'><strong>{days[counter]}:</strong></span> : <span className='day'>{days[counter]}:</span>}<span className='hours'>{helpers.getWeekHours(this.props.retailer, days[counter], index, globalHours, globalHolidayHours)}</span><div className="hidden">{counter++}</div></div>
    })

    const siteRoot = 'https://halycon.netlify.com';
    // If sales array is full, do nothing, otherwise build out sales arraay.
    if (sales) {
    } else {
      sales = salesArray.map((sale, index) => {
        return (<div key={index} className="sale-single">
          <div className="date-ball">{(sale.acf.end_date) ? <span><span className='ends'>Ends</span><br />{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>
          <div className='image-wrapper hidden-xs'>
            {sale.acf.featured_image &&
              <Link to={'/sales/' + sale.slug}><img src={sale.acf.featured_image} alt={sale.title.rendered} /></Link>
            }
          </div>
          <div className="content-wrapper">
            <div className='date'>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {this.props.retailer.title.rendered}</div>
            <Link to={'/sales/' + sale.slug}><h5>{sale.title.rendered}</h5></Link>
            {(sale.acf.post_copy) ? <div>{ReactHtmlParser(helpers.compressText(sale.acf.post_copy, 200))}</div> : ""}
          </div>
          <div className='action-corner'>
            <div className="share-links hidden-xs">
              <a href={'mailto:?body=' + siteRoot + '/dining/' + this.props.retailer.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                <FontAwesomeIcon icon={faEnvelope} className='icon' />
              </a>
              <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                <FontAwesomeIcon icon={faTwitter} className='icon' />
              </a>
              <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className='icon' />
              </a>
            </div>
            <Link to={'/sales/' + sale.slug} className="halcyon-button arrow">More Info</Link>
          </div>
        </div>)
      })
    }
  }

  render() {
    const retailer = this.props.retailer
    const siteRoot = this.props.siteRoot
    const title = this.props.title
    const metaDescription = this.props.metaDescription

    return (
      <section>
        <Head>
          <body className={'single-blog light-green blog-id-' + retailer.id + ' ' + retailer.slug} />
          {(retailer.yoast_meta.yoast_wpseo_title) ? <title>{retailer.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
          {(retailer.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={retailer.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(retailer.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={retailer.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
        </Head>
        <div>
          <div id="heroSection">
            {(retailer.acf.hero_image_desktop) ? <img className="hidden-xs hero-image" src={retailer.acf.hero_image_desktop.url} alt={retailer.acf.hero_image_desktop.alt} /> : ""}
            {(retailer.acf.hero_image_mobile) ? <img className="visible-xs hero-image" src={retailer.acf.hero_image_mobile.url} alt={retailer.acf.hero_image_mobile.alt} /> : ""}
            <div className="store-container">
              <div className="logo-wrapper">
                {(retailer.acf.logo) ? <img className="logo" src={retailer.acf.logo} alt={retailer.title.rendered + ' logo'} /> : ""}
              </div>
              <div className="featuredContent">
                <div className="inner-wrapper">
                  {(retailer.acf.subheading) ? <h2 className='subheading'>{ReactHtmlParser(retailer.acf.subheading)}</h2> : ""}
                  {(retailer.acf.blurb) ? <p>{ReactHtmlParser(retailer.acf.blurb)}</p> : ""}
                  <div className='icon-container'>
                    <div className='icon-row'>
                      {(retailer.acf.street_address) ? <a href={'//maps.google.com/?q=' + retailer.acf.street_address} target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className='icon' /></a> : ""}
                      {(retailer.acf.website) ? <a href={retailer.acf.website} target="_blank"><FontAwesomeIcon icon={faGlobe} className='icon' /></a> : ""}
                      {(retailer.acf.phone_number) ? <a href={'tel:' + retailer.acf.phone_number}><img src={PhoneIcon} alt='phone icon' className='icon' /></a> : ""}
                    </div>
                    <div className='icon-row bottom'>
                      {(retailer.acf.facebook) ? <a href={retailer.acf.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a> : ""}
                      {(retailer.acf.instagram) ? <a href={retailer.acf.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon' /></a> : ""}
                      {(retailer.acf.twitter) ? <a href={retailer.acf.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon' /></a> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <Row>
            <Col sm={12}>
              {(retailer.title.rendered) ? <h1>{retailer.title.rendered}</h1> : ""}
              <div className='store-details'>
                {retailer.acf.street_address &&
                  <div className='address'>
                    <a href={'//maps.google.com/?q=' + retailer.acf.street_address} target='_blank'>{retailer.acf.street_address}</a>
                    <span className='hidden-xs'>|</span>
                  </div>
                }
                {retailer.acf.phone_number &&
                  <div className='phone'>
                    <a href={'tel:' + retailer.acf.phone_number}>{retailer.acf.phone_number}</a>
                    <span className='hidden-xs'>|</span>
                  </div>
                }
                {retailer.acf.website &&
                  <div className='website'>
                    <a href={retailer.acf.website} target="_blank">{retailer.acf.website.replace('http://', '').replace('https://', '')}</a>
                    <span className='hidden-xs'>|</span>
                  </div>
                }
                <div className='hours'>
                  Today's Hours: {todaysHours} <img src={DownArrow} id="hourPopover" type="button" onClick={this.toggle} />
                </div>
              </div>
              <div>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="hourPopover" toggle={this.toggle}>
                  <PopoverHeader>This week's hours:</PopoverHeader>
                  <PopoverBody>
                    {weeksHours}
                  </PopoverBody>
                </Popover>
              </div>
              {ReactHtmlParser(retailer.acf.store_copy)}
            </Col>
          </Row>
        </div>
        {this.isSale(retailer) ?
          <div>
            <div className='heading-container'>
              <Container>
                <h2>Featured Promotions</h2>
              </Container>
            </div>
            <Container className="retailerRows">
              {sales}
              <div className="moreSales">
                <Link to="/sales-offers">
                  <span className="viewAll">View All</span>
                  <img src={RightArrow} />
                </Link>
              </div>
            </Container>
          </div> : ""}
        <ModuleController page={retailer} />
      </section>
    )
  }
})