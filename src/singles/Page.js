
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import '../css/components/pageContent.css'
import ImageCarousel from '../sections/modules/ImageCarousel.js';
//

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
        {(page.acf.layout) ? 
        <Container>
          {page.acf.layout.map((section, index) => {
            if (section.acf_fc_layout == 'content_area'){
              return <div className="pageContentArea" key={index}>
                <h1>{ReactHtmlParser(section.heading)}</h1>
                <div>{ReactHtmlParser(section.content)}</div>
              </div>
            } else if (section.acf_fc_layout == 'image_carousel'){
              return <div key={index}><ImageCarousel section={section} /></div>
            } else if (section.acf_fc_layout == 'image_grid') {
              return <div>image grid</div>
            } else if (section.acf_fc_layout == 'featured_events') {
              return <div>featured events</div>
            } else if (section.acf_fc_layout == 'featured_stores') {
              return <div>featured stores</div>
            }
          })}
        </Container> : 
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
