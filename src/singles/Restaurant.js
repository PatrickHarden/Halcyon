import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Button, Popover, PopoverBody, PopoverHeader, Row, Col, UncontrolledPopover } from 'reactstrap';
import ModuleController from '../sections/modules/ModuleController.js';
import ReactHtmlParser from 'react-html-parser'
import helpers from '../helpers.js'
import DownArrow from '../images/downArrrow.png'
let moment = require('moment');
//
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
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

        this.offerAvailable(this.props.restaurant.slug);

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
                todaysHours = <span>{helpers.getWeekHours(this.props.restaurant, days[day], index, globalHours, globalHolidayHours)}</span>
                temp++;
            }
            return <div>{(index == 0) ? <span><strong>{days[counter]}</strong></span> : <span>{days[counter]}</span>}: {helpers.getWeekHours(this.props.restaurant, days[counter], index, globalHours, globalHolidayHours)}<div class="hidden">{counter++}</div></div>
        })

        console.log(salesArray[0])
    }

    componentDidMount(){
        sales = salesArray.map((sale, index) => {
            return (<div key={index} className="sale-single row">
                <div className="col-sm-2">{(sale.acf.end_date)? <span>Ends<br/>{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>         
                <div className='image-wrapper col-sm-3'>
                    <img className='hidden-xs' src={sale.acf.featured_image} />
                </div>
                <div className="col-sm-5">
                    <div>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {this.props.restaurant.title.rendered}</div>
                    <h5>{sale.title.rendered}</h5>
                    {(sale.acf.post_copy)? <div>{ReactHtmlParser(sale.acf.post_copy)}</div>:""}
                </div>
                <div className="col-sm-2">
                    {/* <a href={'mailto:?body=' + window.location.href + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                        mail
                    </a>
                    <a to={'https://twitter.com/home?status=' + window.location.href} target="_blank">
                        twitter
                    </a>
                    <a to={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href} target="_blank">
                        facebook
                    </a> */}
                    <Link to={'/sales/' + sale.slug} className="halcyon-button">More Info ></Link>
                </div>
            </div>)
        })
    }

    render() {
        const restaurant = this.props.restaurant
        const siteRoot = this.props.siteRoot
        const title = this.props.title
        const metaDescription = this.props.metaDescription

        return (
            <section>
                <Head>
                    <body className={'single-blog blog-id-' + restaurant.id + ' ' + restaurant.slug} />
                    {(restaurant.yoast_meta.yoast_wpseo_title) ? <title>{restaurant.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
                    {(restaurant.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={restaurant.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
                    {(restaurant.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={restaurant.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
                </Head>
                <div>
                    <div id="heroSection">
                        {(restaurant.acf.hero_image_desktop) ? <img className="hidden-xs" src={restaurant.acf.hero_image_desktop.url} alt={restaurant.acf.hero_image_desktop.alt} /> : ""}
                        {(restaurant.acf.hero_image_mobile) ? <img className="visible-xs" src={restaurant.acf.hero_image_mobile.url} alt={restaurant.acf.hero_image_mobile.alt} /> : ""}
                        <div className="store-container">
                            {(restaurant.acf.featured_image) ? <img className="featuredImage" src={restaurant.acf.featured_image} /> : ""}
                            <div className="featuredContent">
                                {(restaurant.acf.subheading) ? <h5>{ReactHtmlParser(restaurant.acf.subheading)}</h5> : ""}
                                {(restaurant.acf.blurb) ? <p>{ReactHtmlParser(restaurant.acf.blurb)}</p> : ""}
                                {(restaurant.acf.street_address) ? <a href={'//maps.google.com/?q=' + restaurant.acf.street_address} target="_blank">Location</a> : ""}
                                {(restaurant.acf.website) ? <a href={restaurant.acf.website} target="_blank">website</a> : ""}
                                {(restaurant.acf.phone) ? <a href={restaurant.acf.phone} target="_blank">phone</a> : ""}
                                {(restaurant.acf.facebook) ? <a href={restaurant.acf.facebook} target="_blank">facebook</a> : ""}
                                {(restaurant.acf.instagram) ? <a href={restaurant.acf.instagram} target="_blank">instagram</a> : ""}
                                {(restaurant.acf.twitter) ? <a href={restaurant.acf.twitter} target="_blank">twitter</a> : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <Row>
                        <Col xs="12">
                            {(restaurant.title.rendered) ? <h1>{restaurant.title.rendered}</h1> : ""}
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
                            {ReactHtmlParser(restaurant.acf.store_copy)}
                        </Col>
                    </Row>
                </div>
                <div className='heading-container'>
                    <Container>
                        <h2>Featured Promotions</h2>
                        {/* {salesArray[0].slug} */}
                    </Container>
                </div>
                <Container className="diningRows">
                    {sales}
                </Container>
                <ModuleController page={restaurant} />
            </section>
        )
    }
})
