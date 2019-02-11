
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";
//

import ReactHtmlParser from 'react-html-parser'

export default withRouteData(({ page, siteRoot, title, metaDescription }) => (
  <section>
    <Head>
      <body className={'single-page page-id-'+page.id + ' ' + page.slug} />
      {(page.yoast_meta.yoast_wpseo_title) ? <title>{page.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(page.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={page.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(page.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={page.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{ReactHtmlParser(page.title.rendered)}</h1>
          {ReactHtmlParser(page.content.rendered)}
          {(page.acf.layout) ? <div>{ReactHtmlParser(page.acf.layout[0].content)}</div> : ""}
        </Col>
      </Row>
    </Container>
  </section>
))
