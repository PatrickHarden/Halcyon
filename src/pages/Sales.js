
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

export default withRouteData(({ sales }) => (

  <section>
    <Helmet>
      <body className="blog" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Sales</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {sales.map(sale => (
              <Card key={sale.id} className={"card-" + sale.id}>
                <Link to={`/sales/${sale.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/sales/${sale.slug}/`}>
                      <CardTitle>{(sale.title.rendered) ? <div>{sale.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    {/* <CardText>{ReactHtmlParser(sale.acf.post_copy)}</CardText> */}
                    <CardText><small>{sale.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
