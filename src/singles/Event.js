import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ event, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-blog blog-id-'+event.id + ' ' + event.slug} />
      {(event.yoast_meta.yoast_wpseo_title) ? <title>{event.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(event.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={event.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(event.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={event.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{event.title.rendered}</h1>
          {ReactHtmlParser(event.acf.post_copy)}
        </Col>
      </Row>
    </Container>
  </section>
))
