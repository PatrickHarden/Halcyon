import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ retailer, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+retailer.id + ' ' + retailer.slug} />
      {(retailer.yoast_meta.yoast_wpseo_title) ? <title>{retailer.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(retailer.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={retailer.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(retailer.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={retailer.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{retailer.title.rendered}</h1>
          {ReactHtmlParser(retailer.acf.post_copy)}
        </Col>
      </Row>
    </Container>
  </section>
))
