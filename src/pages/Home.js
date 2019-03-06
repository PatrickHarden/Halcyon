import React from 'react'
import { Link, withRouteData, Head } from 'react-static'
import ReactHtmlParser from 'react-html-parser';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import HeroSlider from '../sections/homepage/HeroSlider';
import ModuleController from '../sections/modules/ModuleController.js'
import helpers from '../helpers.js'


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
        tint: 5,
    };
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
            <div>{ReactHtmlParser(helpers.compressText(store.acf.post_copy, 80))}</div>
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
                {(home.acf.button) ? <Link className="halcyon-button" to={helpers.convertLink(home.acf.button.url, this.props.title.toLowerCase())} target={home.acf.button.target}>{ReactHtmlParser(home.acf.button.title)}</Link> : ""}           
            </Container>
            {(home.acf.layout) ? 
              <div>
              <ModuleController page={home} />
              </div> : "" }
          </div>
          </div>
        </article>
      )
  }
})
