import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ store, siteRoot, title, metaDescription }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+store.id + ' ' + store.slug} />
      {(store.yoast_meta.yoast_wpseo_title) ? <title>{store.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(store.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={store.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(store.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={store.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{store.title.rendered}</h1>
          {ReactHtmlParser(store.acf.post_copy)}
        </Col>
      </Row>
    </Container>
  </section>
))
