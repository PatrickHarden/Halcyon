
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";
//

import ReactHtmlParser from 'react-html-parser'

export default withRouteData(({ page }) => (
  <section>
    <Helmet>
      <body className={'single-page page-id-'+page.id + ' ' + page.slug} />
    </Helmet>
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
