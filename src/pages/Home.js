import React from 'react'
import { withSiteData, Link, withRouteData } from 'react-static'
import {Helmet} from "react-helmet";
import ReactHtmlParser from 'react-html-parser';
import { 
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import PageSearch from '../sections/PageSearch';
import EventSearch from '../sections/EventSearch';
import StoreSearch from '../sections/StoreSearch';
import HeroSlider from '../sections/homepage/HeroSlider';
import HappeningsSlider from '../sections/homepage/HappeningsSlider';
import ImageGrid from '../sections/homepage/ImageGrid';
import TintSocialFeed from '../components/TintSocialFeed';

const fullWidth = {
  width: '100%'
}

var homeJSON = [];

export default withRouteData(class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
        pageExist: false,
        eventExist: false,
        storeExist: false,
        imageArray: [],
    };
  }

  componentDidMount(){
    console.log(this.props.home);
  }

  render() {

    const home = this.props.home[0];

      return (
        <article id="home">
          <Helmet>
            <body className="home" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
          <HeroSlider />
          <div id="searchBar">  
            <div id="searchAddress">{(this.props.property_options.acf.address_1) ? <p>{this.props.property_options.acf.address_1} {(this.props.property_options.acf.address_2)? <span>{this.props.property_options.acf.address_2}</span>: ""} </p>: ""} </div>
            <div id="searchEmail">{this.props.property_options.acf.email}</div>
            <div id="searchPhone">{this.props.property_options.acf.phone}</div>
            <input value={this.state.term} onChange = {event => this.setState({term : event.target.value})}/>
          </div>
          <div id="results">
          { (this.state.term != '') ? 
          <div>
            <PageSearch searchResult={this.state.term} />
            <EventSearch searchResult={this.state.term} /> 
            <StoreSearch searchResult={this.state.term} />
          </div>: 
          <div>
            <h1>{home.acf.title_h1}</h1>
            <div>{ReactHtmlParser(home.acf.content_area)}</div>
            <Link to={home.acf.button.url}><Button>{home.acf.button.title}</Button></Link>
            <h1>{home.acf.tenant_spotlight.heading}</h1>
            <HappeningsSlider events={this.props.events} />
            <h1>{home.acf.halcyon_happenings.heading}</h1>
            {/* <TintSocialFeed optionsData={this.props.property_options} /> */}
          </div> 
          }
          </div>
        </article>
      )

  }
})
