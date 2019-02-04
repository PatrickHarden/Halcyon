
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,
         Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         CardSubtitle } from 'reactstrap';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ stores }) => (

  <section>
    <Helmet>
      <body className="blog" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>stores</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {stores.map(store => (
              <Card key={store.id} className={"card-" + store.id}>
                <Link to={`/stores/${store.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/stores/${store.slug}/`}>
                      <CardTitle>{(store.title.rendered) ? <div>{store.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(store.acf.post_copy)}</CardText>
                    <CardText><small>{store.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
