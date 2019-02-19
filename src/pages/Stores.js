
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container, Row,Col,} from 'reactstrap';
import ReactHtmlParser from 'react-html-parser'
//
import ModuleController from '../sections/modules/ModuleController.js'

var newTitle;
var newMeta;
var newCanonical;
var pageContent;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'shopping'){
      pageContent = page;
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withRouteData(({ stores, siteRoot, title, metaDescription, pages, sales  }) => (

  <section>
    {setMetaData(pages)}
    <Head>
      <body className="shopping" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <ModuleController page={pageContent} />
    <Container>
      <Row>
      <div className="card-columns">
        <table className="table table-hover">
        {console.log(stores)}
        {console.log(sales)}
          <tbody>
            {stores.map(store => (
              (store.acf.store_type == "retailer") ? 
              <tr key={store.id} className={store.id}>
              <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
              <td>{(store.acf.flags[0] == "Coming Soon")?<div>Coming Soon!</div>:<div>Offer Available?</div>}</td>
              <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
              <td><small>{store.date.substring(0, 10)}</small></td>
              <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
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
