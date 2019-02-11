
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
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
//

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'sales-offers'){
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withRouteData(({ sales, siteRoot, title, metaDescription, pages }) => (

  <section>
    <Head>
      <body className="Sales" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
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
