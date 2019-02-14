
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import '../css/components/pageContent.css'
import ImageCarousel from '../sections/modules/ImageCarousel.js'
import GlobalImageGrid from '../sections/modules/GlobalImageGrid.js'
import FeaturedEvents from '../sections/modules/FeaturedEvents.js'
import ContentArea from '../sections/modules/ContentArea.js'

import ReactHtmlParser from 'react-html-parser'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default withRouteData(class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  convertLink(url){
    var words = url.split('/');
    console.log(words)
    if (words[4] == ""){
      
    }
  }

  render(){
    const page = this.props.page
    const siteRoot = this.props.siteRoot
    const title = this.props.title
    const metaDescription = this.props.metaDescription

    return(
      <section>
        <Head>
          <body className={'single-page page-id-'+page.id + ' ' + page.slug} />
          {(page.yoast_meta.yoast_wpseo_title) ? <title>{page.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
          {(page.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={page.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(page.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={page.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
          {(page.acf.layout) ? <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> : ""}
        </Head>
          {(page.acf.additional_content) ? <Container>
            {(page.acf.subheading) ? <h2>{ReactHtmlParser(page.acf.subheading)}</h2> : ""}
            {(page.acf.content) ? <div>{ReactHtmlParser(page.acf.content)}</div> : ""}
            {(page.acf.button_1) ? <Link className="halcyon-button" to={this.convertLink(page.acf.button_1.url)} target={page.acf.button_1.url}>{ReactHtmlParser(page.acf.button_1.title)}</Link> : ""}
          </Container> : ""}
        {(page.acf.layout) ? 
        <div>
          {page.acf.layout.map((section, index) => {
            if (section.acf_fc_layout == 'content_area'){
              return <Container key={index}><ContentArea section={section} /></Container>
            } else if (section.acf_fc_layout == 'image_carousel'){
              return <div key={index}><ImageCarousel section={section} /></div>
            } else if (section.acf_fc_layout == 'image_grid') {
              return <div key={index}><GlobalImageGrid section={section} /></div>
            } else if (section.acf_fc_layout == 'featured_events') {
              return <Container key={index}><FeaturedEvents section={section} /></Container>
            } else if (section.acf_fc_layout == 'featured_stores') {
              return <Container key={index}>featured stores</Container>
            }
          })}
        </div> : 
          <Container>
          <Row>
            <Col xs="12">
              <h1>{ReactHtmlParser(page.title.rendered)}</h1>
              {ReactHtmlParser(page.content.rendered)}
            </Col>
          </Row>
        </Container>
      }
      </section>
    )
  }
})
