import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import '../css/components/pageContent.css'
import '../css/components/retailerContent.css'
import '../css/components/mobileFloatingNav.css'
//

export default withRouteData(({ retailer, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+retailer.id + ' ' + retailer.slug} />
      {(retailer.yoast_meta.yoast_wpseo_title) ? <title>{retailer.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(retailer.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={retailer.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(retailer.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={retailer.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <div>
    {console.log(retailer)}
    <div id="heroSection">
      {(retailer.acf.hero_image_desktop) ? <img className="hidden-xs" src={retailer.acf.hero_image_desktop.url} alt={retailer.acf.hero_image_desktop.alt} /> : ""}
      {(retailer.acf.hero_image_mobile)? <img className="visible-xs" src={retailer.acf.hero_image_mobile.url} alt={retailer.acf.hero_image_mobile.alt} />  : ""}
      <div className="store-container">
        {(retailer.acf.featured_image) ? <img className="featuredImage" src={retailer.acf.featured_image} /> : "" }
        <div className="featuredContent">
          {(retailer.acf.subheading)? <h5>{ReactHtmlParser(retailer.acf.subheading)}</h5> : ""}
          {(retailer.acf.blurb) ? <p>{ReactHtmlParser(retailer.acf.blurb)}</p> : "" }
          {(retailer.acf.street_address)? <a href={'//maps.google.com/?q=' + retailer.acf.street_address} target="_blank">Location</a>: ""}
          {(retailer.acf.website)? <a href={retailer.acf.website} target="_blank">website</a>: ""}
          {(retailer.acf.phone)? <a href={retailer.acf.phone} target="_blank">phone</a>: ""}
          {(retailer.acf.facebook)? <a href={retailer.acf.facebook} target="_blank">facebook</a>: ""}
          {(retailer.acf.instagram)? <a href={retailer.acf.instagram} target="_blank">instagram</a>: ""}
          {(retailer.acf.twitter)? <a href={retailer.acf.twitter} target="_blank">twitter</a>: ""}
        </div>
    </div>  
    </div>
    </div>
    <div class="container text-center">
      <Row>
        <Col xs="12">
          {(retailer.title.rendered)? <h1>{retailer.title.rendered}</h1> : ""}
          <p>1234 Magnolia Ave, Forsyth, GA 31029  |  Hours:  M-F 8:00am - 9pm, Sat & Sun 11am - 6pm  |  (972)000-1234  |  www.ninandleigh.com</p>
          {ReactHtmlParser(retailer.acf.store_copy)}
        </Col>
      </Row>
    </div>
  </section>
))
