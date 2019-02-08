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

var counter = 0;
var cards;

export default withRouteData(class pageSearch extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
        pageExist: false,
        pageExist: false,
        storeExist: false,
        pageCounter: 0
    };
  }

//   componentDidMount(){
//       this.componentDidUpdate();
//   }

//   componentWillUpdate(){
//       cards = document.getElementsByClassName("counter");
//       counter = cards.length;
//   }

  render() {


      return (
        <article id="searchPage">
        <h4>Pages: </h4>
        {(this.props.searchResult != '') ? 
          <div>
            {this.props.pages.map(page => (
              (page.slug.includes(this.props.searchResult.toLowerCase())) ? 
              <div>
              <Card key={page.id} className={"card-" + page.id}>
                <Link to={`/pages/${page.slug}/`}>
                </Link>
                  <CardBody className="counter">
                    <Link to={`/pages/${page.slug}/`}>
                      <CardTitle>{(page.title.rendered) ? <div>{page.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(page.acf.post_copy)}</CardText>
                    <CardText><small>{page.date}</small></CardText>
                  </CardBody>
              </Card>
              </div>
            : ""))}</div> : <div></div>
            }
        </article>
      )

  }
})
