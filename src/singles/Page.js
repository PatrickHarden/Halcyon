
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import '../css/components/pageContent.css'
import ImageCarousel from '../sections/modules/ImageCarousel.js'
import GlobalImageGrid from '../sections/modules/GlobalImageGrid.js'
import FeaturedEvents from '../sections/modules/FeaturedEvents.js'
import ContentArea from '../sections/modules/ContentArea.js'
import FeaturedStores from '../sections/modules/FeaturedStores.js'

import ReactHtmlParser from 'react-html-parser'

export default withRouteData(class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  convertLink(url) {
    var words = url.split('/');
    if (words[4] == "") {
      return words[3]
    } else {
      if (words[3] == "events") {
        return "/events/" + words[4]
      } else if (words[3] == "sales") {
        return "/sales/" + words[4]
      } else if (words[3] == "stores") {
        return "/stores/" + words[4]
      } else if (words[3] == "blog") {
        return "/blogs/" + words[4]
      }
    }
  }

  getTitleFromUrl(url) {
    var words = url.split('/');
    if (words[4] == "") {
      return words[3].replace(/-/g, ' ')
    } else {
      return words[4].replace(/-/g, ' ')
    }
  }

  render() {
    const page = this.props.page
    const siteRoot = this.props.siteRoot
    const title = this.props.title
    const metaDescription = this.props.metaDescription

    return (
      <section>
        <Head>
          <body className={'single-page page-id-' + page.id + ' ' + page.slug + ' ' + page.acf.global_page_color} />
          {(page.yoast_meta.yoast_wpseo_title) ? <title>{page.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
          {(page.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={page.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(page.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={page.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
          {(page.acf.layout) ? <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> : ""}
        </Head>
        {(page.acf.desktop_image) ?
          <div id="heroSection">
            <img className="hidden-xs" src={page.acf.desktop_image.url} alt={page.acf.desktop_image.alt} />
            <img className="visible-xs" src={page.acf.mobile_image.url} alt={page.acf.mobile_image.alt} />
            <div className="hero-heading">{(page.acf.title_h1) ? <h1>{page.acf.title_h1}</h1> : <h1>{page.title.rendered}</h1>}</div>
          </div>
          : ""}
        {(page.acf.additional_content) ? <Container>
          {(page.acf.subheading) ? <h2>{ReactHtmlParser(page.acf.subheading)}</h2> : ""}
          {(page.acf.content) ? <div>{ReactHtmlParser(page.acf.content)}</div> : ""}
          <Row>
            <Col sm={4}>
              {(page.acf.button_1) ? <Link className="halcyon-button" to={this.convertLink(page.acf.button_1.url)}>{(page.acf.button_1.title) ? <div>{ReactHtmlParser(page.acf.button_1.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_1.url)}</div>}</Link> : ""}
            </Col>
            <Col sm={4}>
              {(page.acf.button_2) ? <Link className="halcyon-button" to={this.convertLink(page.acf.button_2.url)}>{(page.acf.button_2.title) ? <div>{ReactHtmlParser(page.acf.button_2.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_2.url)}</div>}</Link> : ""}
            </Col>
            <Col sm={4}>
              {(page.acf.button_3) ? <Link className="halcyon-button" to={this.convertLink(page.acf.button_3.url)}>{(page.acf.button_3.title) ? <div>{ReactHtmlParser(page.acf.button_3.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_3.url)}</div>}</Link> : ""}
            </Col>
          </Row>
        </Container> : ""}
        {(page.acf.layout) ?
          <div>
            {page.acf.layout.map((section, index) => {
              if (section.acf_fc_layout == 'content_area') {
                return <Container key={index}><ContentArea section={section} /></Container>
              } else if (section.acf_fc_layout == 'image_carousel') {
                return <div key={index}><ImageCarousel section={section} /></div>
              } else if (section.acf_fc_layout == 'image_grid') {
                return <div key={index}><GlobalImageGrid section={section} /></div>
              } else if (section.acf_fc_layout == 'featured_events') {
                return <div key={index}><FeaturedEvents section={section} /></div>
              } else if (section.acf_fc_layout == 'featured_stores') {
                return <div key={index}><FeaturedStores pageData={page} section={section} /></div>
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
