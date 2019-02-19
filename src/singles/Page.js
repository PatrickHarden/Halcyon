
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import '../css/components/pageContent.css'

import ReactHtmlParser from 'react-html-parser'
import ModuleController from '../sections/modules/ModuleController.js';

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
        return "/shopping/" + words[4]
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
        </Head>
        {(page.acf.desktop_image) ?
          <div id="heroSection">
            <img className="hidden-xs" src={page.acf.desktop_image.url} alt={page.acf.desktop_image.alt} />
            <img className="visible-xs" src={page.acf.mobile_image.url} alt={page.acf.mobile_image.alt} />
            {page.acf.additional_content &&
            <div className='button-container hidden-xs'>
              {page.acf.button_1 &&
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_1.url)}>{(page.acf.button_1.title) ? <div>{ReactHtmlParser(page.acf.button_1.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_1.url)}</div>}</Link>
                </div>
              }
              {page.acf.button_2 &&
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_2.url)}>{(page.acf.button_2.title) ? <div>{ReactHtmlParser(page.acf.button_2.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_2.url)}</div>}</Link>
                </div>
              }
              {page.acf.button_3 &&
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_3.url)}>{(page.acf.button_3.title) ? <div>{ReactHtmlParser(page.acf.button_3.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_3.url)}</div>}</Link>
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
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_1.url)}>{(page.acf.button_1.title) ? <div>{ReactHtmlParser(page.acf.button_1.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_1.url)}</div>}</Link>
                </div>
              }
              {page.acf.button_2 &&
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_2.url)}>{(page.acf.button_2.title) ? <div>{ReactHtmlParser(page.acf.button_2.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_2.url)}</div>}</Link>
                </div>
              }
              {page.acf.button_3 &&
                <div class='button-wrap'>
                  <Link className="halcyon-button" to={this.convertLink(page.acf.button_3.url)}>{(page.acf.button_3.title) ? <div>{ReactHtmlParser(page.acf.button_3.title)}</div> : <div>{this.getTitleFromUrl(page.acf.button_3.url)}</div>}</Link>
                </div>
              }
            </div>
          </Container> : ""}
          <ModuleController page={page} />
      </section>
    )
  }
})
