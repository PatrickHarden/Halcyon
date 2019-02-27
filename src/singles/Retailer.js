import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Button, Popover, PopoverBody, PopoverHeader, Row, Col, UncontrolledPopover } from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
import ModuleController from '../sections/modules/ModuleController.js';

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

  componentWillMount() {
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
        <ModuleController page={retailer} />
      </section>
    )
  }
})
