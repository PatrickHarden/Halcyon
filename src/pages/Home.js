import React from 'react'
import { withSiteData, Link, withRouteData } from 'react-static'
import {Helmet} from "react-helmet";

//
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
import ReactHtmlParser from 'react-html-parser';
import PageSearch from '../sections/PageSearch';
import EventSearch from '../sections/EventSearch';
import StoreSearch from '../sections/StoreSearch';
import SimpleSlider from '../sections/Slider';

var headerImg = 'https://i.imgur.com/D68KvFY.jpg';

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
        imageArray: []
    };
  }

  componentWillMount(){
    this.props.Home
  }

  render() {

      return (
        <article id="home">
          <Helmet>
            <body className="home" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
          <SimpleSlider />
          <div id="searchBar">        
            <input value={this.state.term} onChange = {event => this.setState({term : event.target.value})}/>
          </div>
          <div id="results">
          { (this.state.term != '') ? 
            <PageSearch searchResult={this.state.term} /> : "" 
          }
          { (this.state.term != '') ? 
            <EventSearch searchResult={this.state.term} /> : ""
          }
          { (this.state.term != '') ? 
            <StoreSearch searchResult={this.state.term} /> : 
            <p>Home Content</p>
          }
          </div>
        </article>
      )

  }
})
