import React from 'react'
import { withSiteData, Link, withRouteData } from 'react-static'

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
import LazyHero from 'react-lazy-hero';
import ReactHtmlParser from 'react-html-parser';
import EventSearch from '../sections/EventSearch';
import PageSearch from '../sections/PageSearch';
import StoreSearch from '../sections/StoreSearch';


export default withRouteData(class SearchResults extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
      }
  }

  componentDidMount(){
    let urlResult = window.location.search.substring(2);

    this.setState({
      term: urlResult,
    });
  }

  render() {

      return (
        <article id="Search">
            { (this.state.term != '') ?
         <div>
           <PageSearch searchResult={this.state.term} />
           <EventSearch searchResult={this.state.term} />
           <StoreSearch searchResult={this.state.term} />
         </div> : <h1>No results</h1> }
        </article>
      )

  }
})
