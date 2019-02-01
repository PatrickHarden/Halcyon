import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ event }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+event.id + ' ' + event.slug} />
    </Helmet>
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
