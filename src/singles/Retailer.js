import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Button, Popover, PopoverBody, PopoverHeader, Row, Col, UncontrolledPopover } from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
import ModuleController from '../sections/modules/ModuleController.js';
let moment = require('moment');

import helpers from '../helpers.js'
import DownArrow from '../images/downArrrow.png'
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
      return <div>{(index == 0) ? <span><strong>{days[counter]}</strong></span> : <span>{days[counter]}</span>}: {helpers.getWeekHours(this.props.retailer, days[counter], index, globalHours, globalHolidayHours)}<div class="hidden">{counter++}</div></div>
    })

    const siteRoot = 'https://halycon.netlify.com';
    // If sales array is full, do nothing, otherwise build out sales arraay.
    if (sales) {
    } else {
      sales = salesArray.map((sale, index) => {
        return (<div key={index} className="sale-single row">
          <div className="col-sm-2">{(sale.acf.end_date) ? <span>Ends<br />{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>
          <div className='image-wrapper col-sm-3'>
            <img className='hidden-xs' src={sale.acf.featured_image} />
          </div>
          <div className="col-sm-5">
            <div>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {this.props.retailer.title.rendered}</div>
            <h5>{sale.title.rendered}</h5>
            {(sale.acf.post_copy) ? <div>{ReactHtmlParser(sale.acf.post_copy)}</div> : ""}
          </div>
          <div className="col-sm-2">
            <a href={'mailto:?body=' + siteRoot + '/dining/' + this.props.retailer.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
              mail
                      </a>
            <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
              twitter
                      </a>
            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
              facebook
                      </a>
            <Link to={'/sales/' + sale.slug} className="halcyon-button">More Info ></Link>
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
          <body className={'single-blog blog-id-' + retailer.id + ' ' + retailer.slug} />
          {(retailer.yoast_meta.yoast_wpseo_title) ? <title>{retailer.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
          {(retailer.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={retailer.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(retailer.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={retailer.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
        </Head>
        <div>
          <div id="heroSection">
            {(retailer.acf.hero_image_desktop) ? <img className="hidden-xs" src={retailer.acf.hero_image_desktop.url} alt={retailer.acf.hero_image_desktop.alt} /> : ""}
            {(retailer.acf.hero_image_mobile) ? <img className="visible-xs" src={retailer.acf.hero_image_mobile.url} alt={retailer.acf.hero_image_mobile.alt} /> : ""}
            <div className="store-container">
              {(retailer.acf.featured_image) ? <img className="featuredImage" src={retailer.acf.featured_image} /> : ""}
              <div className="featuredContent">
                {(retailer.acf.subheading) ? <h5>{ReactHtmlParser(retailer.acf.subheading)}</h5> : ""}
                {(retailer.acf.blurb) ? <p>{ReactHtmlParser(retailer.acf.blurb)}</p> : ""}
                {(retailer.acf.street_address) ? <a href={'//maps.google.com/?q=' + retailer.acf.street_address} target="_blank">Location</a> : ""}
                {(retailer.acf.website) ? <a href={retailer.acf.website} target="_blank">website</a> : ""}
                {(retailer.acf.phone) ? <a href={retailer.acf.phone} target="_blank">phone</a> : ""}
                {(retailer.acf.facebook) ? <a href={retailer.acf.facebook} target="_blank">facebook</a> : ""}
                {(retailer.acf.instagram) ? <a href={retailer.acf.instagram} target="_blank">instagram</a> : ""}
                {(retailer.acf.twitter) ? <a href={retailer.acf.twitter} target="_blank">twitter</a> : ""}
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <Row>
            <Col xs="12">
              {(retailer.title.rendered) ? <h1>{retailer.title.rendered}</h1> : ""}
              <p>1234 Magnolia Ave, Forsyth, GA 31029  |  (972)000-1234  |  www.ninandleigh.com  |  Today's Hours: {todaysHours} <img src={DownArrow} id="hourPopover" type="button" onClick={this.toggle} />
              </p>
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
            </Container>
          </div> : ""}
        <ModuleController page={retailer} />
      </section>
    )
  }
})