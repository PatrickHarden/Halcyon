import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
import ModuleController from '../sections/modules/ModuleController.js';
//

export default withRouteData(({ restaurant, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+restaurant.id + ' ' + restaurant.slug} />
      {(restaurant.yoast_meta.yoast_wpseo_title) ? <title>{restaurant.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(restaurant.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={restaurant.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(restaurant.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={restaurant.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <div>
    {console.log(restaurant)}
    <div id="heroSection">
      {(restaurant.acf.hero_image_desktop) ? <img className="hidden-xs" src={restaurant.acf.hero_image_desktop.url} alt={restaurant.acf.hero_image_desktop.alt} /> : ""}
      {(restaurant.acf.hero_image_mobile)? <img className="visible-xs" src={restaurant.acf.hero_image_mobile.url} alt={restaurant.acf.hero_image_mobile.alt} />  : ""}
      <div className="store-container">
        {(restaurant.acf.featured_image) ? <img className="featuredImage" src={restaurant.acf.featured_image} /> : "" }
        <div className="featuredContent">
          {(restaurant.acf.subheading)? <h5>{ReactHtmlParser(restaurant.acf.subheading)}</h5> : ""}
          {(restaurant.acf.blurb) ? <p>{ReactHtmlParser(restaurant.acf.blurb)}</p> : "" }
          {(restaurant.acf.street_address)? <a href={'//maps.google.com/?q=' + restaurant.acf.street_address} target="_blank">Location</a>: ""}
          {(restaurant.acf.website)? <a href={restaurant.acf.website} target="_blank">website</a>: ""}
          {(restaurant.acf.phone)? <a href={restaurant.acf.phone} target="_blank">phone</a>: ""}
          {(restaurant.acf.facebook)? <a href={restaurant.acf.facebook} target="_blank">facebook</a>: ""}
          {(restaurant.acf.instagram)? <a href={restaurant.acf.instagram} target="_blank">instagram</a>: ""}
          {(restaurant.acf.twitter)? <a href={restaurant.acf.twitter} target="_blank">twitter</a>: ""}
        </div>
    </div>  
    </div>
    </div>
    <div class="container text-center">
      <Row>
        <Col xs="12">
          {(restaurant.title.rendered)? <h1>{restaurant.title.rendered}</h1> : ""}
          <p>1234 Magnolia Ave, Forsyth, GA 31029  |  Hours:  M-F 8:00am - 9pm, Sat & Sun 11am - 6pm  |  (972)000-1234  |  www.ninandleigh.com</p>
          {ReactHtmlParser(restaurant.acf.store_copy)}
        </Col>
      </Row>
    </div>
    <ModuleController page={restaurant} />
  </section>
))
