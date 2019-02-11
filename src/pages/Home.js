import React from 'react'
import { withSiteData, Link, withRouteData, Head } from 'react-static'
import {Helmet} from "react-helmet";
import ReactHtmlParser from 'react-html-parser';
import { 
  Container,
} from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
  import { Redirect } from 'react-router-dom'

import HeroSlider from '../sections/homepage/HeroSlider';
import HappeningsSlider from '../sections/homepage/HappeningsSlider';
import TenantSlider from '../sections/homepage/TenantSlider';
import ImageGrid from '../sections/homepage/ImageGrid';
import TintSocialFeed from '../oldComponents/TintSocialFeed';

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
    // this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount(){
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
  }

//   keyPress(e){
//     if(e.keyCode == 13){
//       this.props.history.push("/search-results?=" + e.target.value)
//     }
//  }

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
                 <div className='hidden-xs hidden-lg'>Directions</div>
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
            <div className='tenant-spotlight'>
              <div class='heading-container'>
                <Container>
                  <h2>{home.acf.tenant_spotlight.heading}</h2>
                </Container>
              </div>
              <Container>
                <TenantSlider stores={this.props.stores} />
              </Container>
            </div>
            <ImageGrid images={this.state.imageGridData} />
            <div className='events-container'>
              <div class='heading-container'>
                <Container>
                  <h2>{home.acf.halcyon_happenings.heading}</h2>
                </Container>
              </div>
              <Container>
                <HappeningsSlider events={this.props.events} />
              </Container>
            </div>
            <Container className='social-feed-container'>
            <h2>@HALCYONFORSYTH</h2>
              {/* <TintSocialFeed optionsData={this.props.property_options} /> */}
            </Container>
          </div>
          </div>
        </article>
      )

  }
})
