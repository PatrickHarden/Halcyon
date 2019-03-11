
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container } from 'reactstrap'
import '../css/components/pageContent.css'
import '../css/components/mobileFloatingNav.css'

import ReactHtmlParser from 'react-html-parser'
import ModuleController from '../sections/modules/ModuleController.js';
import MobileFloatingNav from '../sections/MobileFloatingNav.js'
import helpers from '../helpers'

export default withRouteData(class Page extends React.Component {

  constructor(props) {
    super(props);
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
          {(page.yoast_meta.yoast_wpseo_title) ? <title>{page.yoast_meta.yoast_wpseo_title}</title> : <title>{page.title.rendered}</title>}
          {(page.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={page.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(page.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={page.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} />}
          <meta property="og:title" content={page.title.rendered} />
          <meta property="og:url" content={this.props.siteRoot + page.slug} />
          {page.acf.desktop_image && <meta property="og:image" content={page.acf.desktop_image.url} /> }
          {page.yoast_meta.yoast_wpseo_metadesc && <meta property="og:description" content={page.yoast_meta.yoast_wpseo_metadesc} />}
        </Head>
        {(page.acf.desktop_image) ?
          <div id="heroSection">
            <img className="hidden-xs" src={page.acf.desktop_image.url} alt={page.acf.desktop_image.alt} />
            <img className="visible-xs" src={page.acf.mobile_image.url} alt={page.acf.mobile_image.alt} />
            {page.acf.additional_content &&
            <div className='button-container hidden-xs'>
              {page.acf.button_1 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_1.target) ? "_blank" : ""}  to={helpers.convertLink(page.acf.button_1.url, this.props.title.toLowerCase())}>{(page.acf.button_1.title) ? <div>{ReactHtmlParser(page.acf.button_1.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_1.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {page.acf.button_2 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_2.target) ? "_blank" : ""}  to={helpers.convertLink(page.acf.button_2.url, this.props.title.toLowerCase())}>{(page.acf.button_2.title) ? <div>{ReactHtmlParser(page.acf.button_2.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_2.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {page.acf.button_3 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_3.target) ? "_blank" : ""}  to={helpers.convertLink(page.acf.button_3.url, this.props.title.toLowerCase())}>{(page.acf.button_3.title) ? <div>{ReactHtmlParser(page.acf.button_3.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_3.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
            </div>
            }
            <div className="hero-container">
              {page.acf.additional_content &&
                <div className="hero-content hidden-xs">
                  {(page.acf.subheading) ? <h2>{ReactHtmlParser(page.acf.subheading)}</h2> : ""}
                  {(page.acf.content) ? <div>{ReactHtmlParser(page.acf.content)}</div> : ""}
                </div>
              }
              <div className="hero-heading">{(page.acf.title_h1) ? <h1>{page.acf.title_h1}</h1> : <h1>{page.title.rendered}</h1>}</div>
            </div>
          </div>
          : ""}
        {(page.acf.additional_content) ?
          <Container className='additional-content text-center'>
            {(page.acf.subheading) ? <h2 className='visible-xs hero-subhead'>{ReactHtmlParser(page.acf.subheading)}</h2> : ""}
            {(page.acf.content) ? <div className='visible-xs'>{ReactHtmlParser(page.acf.content)}</div> : ""}
            <div className='button-container visible-xs'>
            {page.acf.button_1 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_1.target) ? "_blank" : ""} to={helpers.convertLink(page.acf.button_1.url, this.props.title.toLowerCase())}>{(page.acf.button_1.title) ? <div>{ReactHtmlParser(page.acf.button_1.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_1.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {page.acf.button_2 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_2.target) ? "_blank" : ""} to={helpers.convertLink(page.acf.button_2.url, this.props.title.toLowerCase())}>{(page.acf.button_2.title) ? <div>{ReactHtmlParser(page.acf.button_2.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_2.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {page.acf.button_3 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(page.acf.button_3.target) ? "_blank" : ""}  to={helpers.convertLink(page.acf.button_3.url, this.props.title.toLowerCase())}>{(page.acf.button_3.title) ? <div>{ReactHtmlParser(page.acf.button_3.title)}</div> : <div>{helpers.getTitleFromUrl(page.acf.button_3.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
            </div>
          </Container> : ""}
          <ModuleController page={page} />
          {(page.acf.mobile_floating_nav) ? <MobileFloatingNav /> : ""}
      </section>
    )
  }
})
