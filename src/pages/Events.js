
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

export default withRouteData(({ events, siteRoot, title, metaDescription }) => (

  <section>
    <Helmet>
      <body className="blog" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Events</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {events.map(event => (
              <Card key={event.id} className={"card-" + event.id}>
                <Link to={`/events/${event.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/events/${event.slug}/`}>
                      <CardTitle>{(event.title.rendered) ? <div>{event.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(event.acf.post_copy)}</CardText>
                    <CardText><small>{event.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
