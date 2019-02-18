
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

import ReactHtmlParser from 'react-html-parser'
import TagManager from 'react-gtm-module'
//

var newTitle;
var newMeta;
var newCanonical;
var pageData;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'events'){
      pageData = page;
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

const tagManagerArgs = {
  gtmId: 'GTM-KRFSK4G'
}

export default withRouteData(({ events, pages, siteRoot, title, metaDescription }) => (

  <section>
    {setMetaData(pages)}
    <Head>
      <body className={'events ' + pageData.acf.global_page_color} />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1 className="mt-3">Events</h1>
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
    {TagManager.dataLayer(tagManagerArgs)}
  </section>
))
