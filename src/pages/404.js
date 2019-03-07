import React from 'react'
import {Head, withSiteData} from 'react-static'
import { Container, Row, Col } from 'reactstrap';
//

export default withSiteData(({siteRoot, title, metaDescription }) => (
  <div>
    <Head>
    <title>{title} | 404 Page</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteRoot} />
    </Head>
    <Container>
      <Row>
        <Col xs="12 mT">
          <h1>404 - Oh no! We couldn't find that page :(</h1>
        </Col>
      </Row>
    </Container>
  </div>
))
