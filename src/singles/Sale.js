import React from 'react'
import { withRouteData, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import '../css/components/pageContent.css'
import helpers from '../helpers'
import ReactHtmlParser from 'react-html-parser'
import ModuleController from '../sections/modules/ModuleController.js';
import Navigation from '../Nav.js'
//

export default withRouteData(class Sale extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const sale = this.props.sale
    const siteRoot = this.props.siteRoot
    const metaDescription = this.props.metaDescription

  if (typeof document !== 'undefined') {
      return (
        <section>
          <Navigation />
        <Head>
          <body className={'single-blog blog-id-'+sale.id + ' ' + sale.slug + ' red'} />
          {(sale.yoast_meta.yoast_wpseo_title) ? <title>{sale.yoast_meta.yoast_wpseo_title}</title> : <title>{sale.title.rendered}</title>}
          {(sale.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={sale.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(sale.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={sale.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
        </Head>
        {(sale.acf.desktop_image) ?
          <div id="heroSection">
            <img className="hidden-xs" src={sale.acf.desktop_image.url} alt={sale.acf.desktop_image.alt} />
            <img className="visible-xs" src={sale.acf.mobile_image.url} alt={sale.acf.mobile_image.alt} />
            {sale.acf.additional_content &&
            <div className='button-container hidden-xs'>
              {sale.acf.button_1 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(sale.acf.button_1.target) ? "_blank" : ""}  to={helpers.convertLink(sale.acf.button_1.url, this.props.title.toLowerCase())}>{(sale.acf.button_1.title) ? <div>{ReactHtmlParser(sale.acf.button_1.title)}</div> : <div>{helpers.getTitleFromUrl(sale.acf.button_1.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {sale.acf.button_2 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(sale.acf.button_2.target) ? "_blank" : ""}  to={helpers.convertLink(sale.acf.button_2.url, this.props.title.toLowerCase())}>{(sale.acf.button_2.title) ? <div>{ReactHtmlParser(sale.acf.button_2.title)}</div> : <div>{helpers.getTitleFromUrl(sale.acf.button_2.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {sale.acf.button_3 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(sale.acf.button_3.target) ? "_blank" : ""}  to={helpers.convertLink(sale.acf.button_3.url, this.props.title.toLowerCase())}>{(sale.acf.button_3.title) ? <div>{ReactHtmlParser(sale.acf.button_3.title)}</div> : <div>{helpers.getTitleFromUrl(sale.acf.button_3.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
            </div>
            }
            <div className="hero-container">
              {sale.acf.additional_content &&
                <div className="hero-content hidden-xs">
                  {(sale.acf.subheading) ? <h2>{ReactHtmlParser(sale.acf.subheading)}</h2> : ""}
                  {(sale.acf.content) ? <div>{ReactHtmlParser(sale.acf.content)}</div> : ""}
                </div>
              }
              <div className="hero-heading">{(sale.acf.title_h1) ? <h1>{ReactHtmlParser(sale.acf.title_h1)}</h1> : <h1>{ReactHtmlParser(sale.title.rendered)}</h1>}</div>
            </div>
          </div>
          : ""}
        <Container>
          <Row>
            <Col xs="12 mT">
              <h1>{sale.title.rendered}</h1>
              {sale.acf.sale_copy && 
              <div>{ReactHtmlParser(sale.acf.post_copy)}</div>}
            </Col>
          </Row>
        </Container>
        <ModuleController page={sale} />
      </section>
      )
  } else {
    return null
  }
}})
