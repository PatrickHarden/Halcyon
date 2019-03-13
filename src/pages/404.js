import React from 'react'
import {Head, withSiteData, Link} from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../Nav.js'
//

export default withSiteData(({siteRoot, title, metaDescription }) => (
  <div>
    <Navigation />
    <Head>
    <title>{title} | 404 Page</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteRoot} />
    </Head>
    <Container>
      <Row>
        <Col xs="12 mT">
          <h1>404 - Oh no! We couldn't find that page :(</h1>
          <p>Please click <Link to="/">here</Link> to go back to the home page.</p>
        </Col>
      </Row>
    </Container>
  </div>
))
