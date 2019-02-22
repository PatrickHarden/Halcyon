import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ restaurant, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+restaurant.id + ' ' + restaurant.slug} />
      {(restaurant.yoast_meta.yoast_wpseo_title) ? <title>{restaurant.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(restaurant.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={restaurant.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(restaurant.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={restaurant.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{restaurant.title.rendered}</h1>
          {ReactHtmlParser(restaurant.acf.post_copy)}
        </Col>
      </Row>
    </Container>
  </section>
))
