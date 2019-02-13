import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(class Sale extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const sale = this.props.sale
    const siteRoot = this.props.siteRoot
    const title = this.props.title
    const metaDescription = this.props.metaDescription

  if (typeof document !== 'undefined') {
      return (
        <section>
        <Head>
          <body className={'single-blog blog-id-'+sale.id + ' ' + sale.slug} />
          {(sale.yoast_meta.yoast_wpseo_title) ? <title>{sale.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
          {(sale.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={sale.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(sale.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={sale.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
        </Head>
        <Container>
          <Row>
            <Col xs="12">
              <h1>{sale.title.rendered}</h1>
              {/* {ReactHtmlParser(sale.acf.post_copy)} */}
            </Col>
          </Row>
        </Container>
      </section>
      )
  } else {
    return null
  }
}})
