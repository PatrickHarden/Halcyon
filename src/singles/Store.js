import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ store }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+store.id + ' ' + store.slug} />
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
