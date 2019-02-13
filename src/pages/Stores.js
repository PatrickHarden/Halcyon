
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
    if (page.slug == 'shopping'){
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withRouteData(({ stores, siteRoot, title, metaDescription, pages, sales  }) => (

  <section>
    {setMetaData(pages)}
    {console.log(sales)}
    <Head>
      <body className="shopping" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>stores</h1>
        </Col>
      </Row>
      <Row>
      <div className="card-columns">
        <table className="table table-striped">
          <tbody>
            {stores.map(store => (
              (store.acf.store_type == "retailer") ? 
              <tr key={store.id} className={store.id}>
              <td>
                <Link to={`/dining/${store.slug}/`}>
                  <h4>{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div>: ""}</h4>
                </Link>
              </td>
              <td>{(store.acf.flags[0] == "Coming Soon") ? <div>Coming Soon!</div> : <div>&nbsp;</div>}</td>
              <td>{(store.acf.phone_number) ? <div>{store.acf.phone_number}</div>:""}</td>
              <td><small>{store.date.substring(0, 10)}</small></td>
              <td>Store Location</td>
              <td>Offer Available?</td>
              </tr>
            : "" 
            ))}
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  </section>
))
