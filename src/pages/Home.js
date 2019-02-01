import React from 'react'
import { withSiteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)


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
  CarouselCaption } from 'reactstrap';
import LazyHero from 'react-lazy-hero';

var headerImg = 'https://i.imgur.com/D68KvFY.jpg';

const fullWidth = {
  width: '100%'
}

export default withSiteData(() => (
  <article id="home">
  <Helmet>
      <body className="home" />
    </Helmet>
    <img src={headerImg} style={fullWidth} alt="" />
<h1>HELLO WORLD</h1>
  </article>
))
