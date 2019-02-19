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
import ImageCarousel from '../sections/modules/ImageCarousel.js'
import GlobalImageGrid from '../sections/modules/GlobalImageGrid.js'
import FeaturedEvents from '../sections/modules/FeaturedEvents.js'
import ContentArea from '../sections/modules/ContentArea.js'
import FeaturedStores from '../sections/modules/FeaturedStores.js'
import TintSocialFeed from '../sections/homepage/TintSocialFeed.js';
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

    convertLink(url){
    var words = url.split('/');
    if (words[4] == ""){
      return words[3]
    } else {
      if (words[3] == "events") {
        return "/events/" + words[4]
      } else if (words[3] == "sales"){
        return "/sales/" + words[4]
      }  else if (words[3] == "stores"){
        return "/stores/" + words[4]
      } else if (words[3] == "blog"){
        return "/blogs/" + words[4]
      }
    }
  }

  getTitleFromUrl(url){
    var words = url.split('/');
    if (words[4] == ""){
      return words[3].replace(/-/g, ' ')
    } else {
      return words[4].replace(/-/g, ' ')
    }
  }

  componentWillMount(){

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
            <div>{ReactHtmlParser(this.compressText(store.acf.post_copy))}</div>
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
            <body className={'home ' + home.acf.global_page_color} />
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
                {(home.acf.button) ? <Link className="halcyon-button" to={this.convertLink(home.acf.button.url)} target={home.acf.button.target}>{ReactHtmlParser(home.acf.button.title)}</Link> : ""}           
            </Container>
            {(home.acf.layout) ? 
              <div>
                {home.acf.layout.map((section, index) => {
                  if (section.acf_fc_layout == 'content_area'){
                    return <Container key={index}><ContentArea section={section} /></Container>
                  } else if (section.acf_fc_layout == 'image_carousel'){
                    return <div key={index}><ImageCarousel section={section} /></div>
                  } else if (section.acf_fc_layout == 'image_grid') {
                    return <div key={index}><GlobalImageGrid section={section} /></div>
                  } else if (section.acf_fc_layout == 'featured_events') {
                    return <div key={index}><FeaturedEvents section={section} /></div>
                  } else if (section.acf_fc_layout == 'featured_stores') {
                    return <div key={index}><FeaturedStores pageData={home} section={section} /></div>
                  }
                })}
              </div> : "" }
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
