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


export default withSiteData(class storeSearch extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
        pageExist: false,
        storeExist: false,
        storeExist: false,
    };
  }

  render() {


      return (
        <article id="searchPage">
        <h4>Stores:</h4>
        {(this.props.searchResult != '') ? 
          <div>
            {this.props.stores.map(store => (
              (store.slug.includes(this.props.searchResult.toLowerCase())) ? 
              <div>
              <Card key={store.id} className={"card-" + store.id}>
                <Link to={`/shopping/${store.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/shopping/${store.slug}/`}>
                      <CardTitle>{(store.title.rendered) ? <div>{store.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(store.acf.post_copy)}</CardText>
                    <CardText><small>{store.date}</small></CardText>
                  </CardBody>
              </Card>
              </div>
            : ""))}</div> : <p>Content</p>
            }
        </article>
      )

  }
})
