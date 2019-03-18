import React from 'react'
import { withRouteData, Head } from 'react-static'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import helpers from '../helpers'
import ReactHtmlParser from 'react-html-parser'
import ModuleController from '../sections/modules/ModuleController.js';
import '../css/components/pageContent.css'
import Navigation from '../Nav.js'
//

export default withRouteData(class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.event
    const siteRoot = this.props.siteRoot
    const metaDescription = this.props.metaDescription

    if (typeof document !== 'undefined') {
      return (
        <section>
          <Navigation />
          <Head>
            <body className={'single-blog blog-id-' + event.id + ' ' + event.slug + ' dark-brown'} />
            {(event.yoast_meta.yoast_wpseo_title) ? <title>{event.yoast_meta.yoast_wpseo_title}</title> : <title>{event.title.rendered}</title>}
            {(event.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={event.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
            {(event.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={event.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
            <meta property="og:title" content={event.title.rendered} />
            <meta property="og:url" content={this.props.siteRoot + '/events/' + event.slug} />
            {event.acf.desktop_image && <meta property="og:image" content={event.acf.desktop_image.url} /> }
            {event.yoast_meta.yoast_wpseo_metadesc && <meta property="og:description" content={event.yoast_meta.yoast_wpseo_metadesc} />}
          </Head>
          {(event.acf.desktop_image) ?
          <div id="heroSection">
          {console.log(event)}
            <img className="hidden-xs" src={event.acf.desktop_image.url} alt={event.acf.desktop_image.alt} />
            <img className="visible-xs" src={event.acf.mobile_image.url} alt={event.acf.mobile_image.alt + ' mobile'} />
            {event.acf.additional_content &&
            <div className='button-container hidden-xs'>
              {event.acf.button_1 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(event.acf.button_1.target) ? "_blank" : ""}  to={helpers.convertLink(event.acf.button_1.url, this.props.title.toLowerCase())}>{(event.acf.button_1.title) ? <div>{ReactHtmlParser(event.acf.button_1.title)}</div> : <div>{helpers.getTitleFromUrl(event.acf.button_1.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {event.acf.button_2 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(event.acf.button_2.target) ? "_blank" : ""}  to={helpers.convertLink(event.acf.button_2.url, this.props.title.toLowerCase())}>{(event.acf.button_2.title) ? <div>{ReactHtmlParser(event.acf.button_2.title)}</div> : <div>{helpers.getTitleFromUrl(event.acf.button_2.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {event.acf.button_3 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(event.acf.button_3.target) ? "_blank" : ""}  to={helpers.convertLink(event.acf.button_3.url, this.props.title.toLowerCase())}>{(event.acf.button_3.title) ? <div>{ReactHtmlParser(event.acf.button_3.title)}</div> : <div>{helpers.getTitleFromUrl(event.acf.button_3.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
            </div>
            }
            <div className="hero-container">
              {event.acf.additional_content &&
                <div className="hero-content hidden-xs">
                  {(event.acf.subheading) ? <h2>{ReactHtmlParser(event.acf.subheading)}</h2> : ""}
                  {(event.acf.content) ? <div>{ReactHtmlParser(event.acf.content)}</div> : ""}
                </div>
              }
              <div className="hero-heading">{(event.acf.title_h1) ? <h1>{ReactHtmlParser(event.acf.title_h1)}</h1> : <h1>{ReactHtmlParser(event.title.rendered)}</h1>}</div>
            </div>
          </div>
          : ""}
          <Container>
            <Row>
              <Col xs="12 mT">
                <h1>{ReactHtmlParser(event.title.rendered)}</h1>
                {ReactHtmlParser(event.acf.post_copy)}
              </Col>
            </Row>
          </Container>
          <ModuleController page={event} />
        </section>
      )
    } else {
      return null
    }
  }
})
