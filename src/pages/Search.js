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
import LazyHero from 'react-lazy-hero';
import ReactHtmlParser from 'react-html-parser';


export default withRouteData(class EventSearch extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {

      return (
        <article id="Search">
            <p>test</p>
        </article>
      )

  }
})
