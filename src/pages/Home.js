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

var headerImg = 'https://i.imgur.com/D68KvFY.jpg';

const fullWidth = {
  width: '100%'
}

export default withRouteData(class Search extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
        pageExist: false,
        eventExist: false,
        storeExist: false,
    };
  }

  render() {


      return (
        <article id="home">
          <Helmet>
            <body className="home" />
          </Helmet>
          <img src={headerImg} style={fullWidth} alt="" />
          <div id="searchBar">        
          <input value={this.state.term} onChange = {event => this.setState({term : event.target.value})}/>
          </div>
          <div id="results">
          { (this.state.term != '') ? 
          <div>
            {this.props.pages.map(page => (
              (page.slug.includes(this.state.term.toLowerCase())) ?  
              <div>    
              <Card key={page.id} className={"card-" + page.id}>
              <CardBody>
              <CardTitle>
                <Link to={`/${page.slug}/`}>{(page.title.rendered) ? <div><CardTitle>{ReactHtmlParser(page.title.rendered)}</CardTitle></div>: ""}</Link></CardTitle>
               
                    {ReactHtmlParser(page.content.rendered)}
                    </CardBody>
              </Card>
              </div>
            : ""))}</div> : ""
          }
          { (this.state.term != '') ? 
          <div>
            {this.props.events.map(event => (
              (event.slug.includes(this.state.term.toLowerCase())) ? 
              <div>
                <h4>Events</h4>
              <Card key={event.id} className={"card-" + event.id}>
                <Link to={`/events/${event.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/events/${event.slug}/`}>
                      <CardTitle>{(event.title.rendered) ? <div>{event.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(event.acf.post_copy)}</CardText>
                    <CardText><small>{event.date}</small></CardText>
                  </CardBody>
              </Card>
              </div>
            : ""))}</div> : <p>more content</p>
            }
          { (this.state.term != '') ? 
          <div>
            {this.props.stores.map(store => (
              (store.slug.includes(this.state.term.toLowerCase())) ?   
              <div>
                <h4>Store:</h4>       
              <Card key={store.id} className={"card-" + store.id}>
              <CardBody>
              <CardTitle>
                <Link to={`/shopping/${store.slug}/`}>{(store.title.rendered) ? <div><CardTitle>{ReactHtmlParser(store.title.rendered)}</CardTitle></div>: ""}</Link></CardTitle>  
                    </CardBody>
              </Card>
              </div>
            : ""))}</div> : "" 
          }
          </div>
        </article>
      )

  }
})
