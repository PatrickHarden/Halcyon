import React from 'react'
import { withSiteData, Link, withRouteData, Head } from 'react-static'
import {Helmet} from "react-helmet";
import ReactHtmlParser from 'react-html-parser';
import { 
  Container, Row, Col
} from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
  import { Redirect } from 'react-router-dom'

import HeroSlider from '../sections/homepage/HeroSlider';
import TenantSlider from '../sections/homepage/TenantSlider';
import ImageGrid from '../sections/homepage/ImageGrid';
import TintSocialFeed from '../sections/homepage/TenantSlider';
import rightArrow from '../images/rightArrow.png';

const fullWidth = {
  width: '100%'
}

var excerpt;
var regex = /(<([^>]+)>)/ig;
var selectedStores = [];
var featuredStores = [];

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

  compressText(store){
    if (store.length > 80){
      excerpt = store.replace(regex, "").substr(0, 80)
      excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
      return excerpt + "...";
    } else {
      return store;
    }
  }

  componentWillMount(){
    console.log('Home JSON:')
    console.log(this.props.home);
    let component = this;
    let imageData = [];
    let _home = this.props.home[0];

    _home.acf.image_grid ?
    imageData = {
        image_group_1: _home.acf.image_group_1,
        image_group_2: _home.acf.image_group_2,
        image_group_3: _home.acf.image_group_3,
        image_group_4: _home.acf.image_group_4
    } : null;

    component.setState({
      imageGridData: imageData,
    });

    // Generate featured events from events json
    featuredStores = this.props.events.map(store => {
      if (store.acf.featured_image){
        return <div className="featuredEvent">
        <Link to={store.slug}>
          <img src={store.acf.featured_image} className="featuredEventImage" />
          <div className="eventOverlay">
            <h4>{store.title.rendered}</h4>
            <p>{ReactHtmlParser(this.compressText(store.acf.post_copy))}</p>
          </div>
          </Link>
        </div>
      }
    })
    // Remove all nulls/undefined from array
    featuredStores = featuredStores.filter(function (el) {
      return el != null;
    });
    // Pull only 3 featured events per design
    featuredStores = featuredStores.slice(0,3)
  }


  render() {

    const home = this.props.home[0];

      return (
        <article id="home">
          <Head>
            <body className="home" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            {(home.yoast_meta.yoast_wpseo_title) ? <title>{home.yoast_meta.yoast_wpseo_title}</title> : ""}
            {(home.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={home.yoast_meta.yoast_wpseo_metadesc} /> : ""}
            {(home.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={home.yoast_meta.yoast_wpseo_canonical} /> : "" }
          </Head>
          <HeroSlider home={this.props.home} />
          <div id="searchBar">
         <Container>
               <div id="searchAddress">
                 <a href={'//maps.google.com/?q='+ this.props.property_options.acf.address_1 + '+' + this.props.property_options.acf.address_2 } target='_blank'>
                 <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
                 <div className='visible-sm'>Directions</div>
                 <div className='hidden-xs hidden-sm'>{(this.props.property_options.acf.address_1) ? <p>{this.props.property_options.acf.address_1} {(this.props.property_options.acf.address_2)? <span>{this.props.property_options.acf.address_2}</span>: ""} </p>: ""} </div>
                 </a>
               </div>
               <div id="searchEmail">
                 <a href={'mailto:'+this.props.property_options.acf.email}>
                   <FontAwesomeIcon icon={faEnvelope} className='icon' />
                   <div className='hidden-xs'>{this.props.property_options.acf.email}</div>
                 </a>
               </div>
               <div id="searchPhone">
                 <a href={'tel:'+ this.props.property_options.acf.phone}>
                   <FontAwesomeIcon icon={faPhone} className='icon' />
                   <div className='hidden-xs'>{this.props.property_options.acf.phone}</div>
                 </a>
               </div>
               {/* <input className='search-bar hidden-xs' value={this.state.term} onChange = {event => this.setState({term : event.target.value})} onKeyDown={this.keyPress}/> */}
         </Container>
         </div>
         <div id="results">
          <div>
            <Container className='top-cta'>
              <h1>{home.acf.title_h1}</h1>
              <div>{ReactHtmlParser(home.acf.content_area)}</div>
              <Link className='halcyon-button' to={home.acf.button.url} target={home.acf.button.target}>{home.acf.button.title}</Link>
            </Container>
      
                {/* <TenantSlider stores={this.props.stores} pageData={this.props.home}/> */}

            <ImageGrid images={this.state.imageGridData} />
            <div className='events-container'>
              {home.acf.halcyon_happenings.heading &&
                <div class='heading-container'>
                  <Container>
                    <h2>{home.acf.halcyon_happenings.heading}</h2>
                  </Container>
                </div>
              }
              <Container>
                <Row>
                  <Col sm={4} className='event-wrapper'>
                    {featuredStores[0]}
                  </Col>
                  <Col sm={4} className='event-wrapper'>
                    {featuredStores[1]}
                  </Col>
                  <Col sm={4} className='event-wrapper'>
                    {featuredStores[2]}
                  </Col>
                </Row>
                <Link to="/events" className="pull-right">View All<img className='arrow' src={rightArrow} alt='right-arrow'/></Link>
              </Container>
            </div>
            <Container className='social-feed-container'>
            {(this.props.property_options.acf.social_feed_data_id) ? <div>
              <h2>@HALCYONFORSYTH</h2>
              <TintSocialFeed optionsData={this.props.property_options} />
            </div> : ""}
            </Container>
          </div>
          </div>
        </article>
      )

  }
})
