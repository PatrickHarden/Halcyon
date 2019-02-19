
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container } from 'reactstrap';
import ModuleController from '../sections/modules/ModuleController.js'

//

var newTitle;
var newMeta;
var newCanonical;
var pageContent;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'dining'){
      pageContent = page;
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withRouteData(({ stores, pages, siteRoot, title, metaDescription  }) => (

  <section>
    {setMetaData(pages)}
    <Head>
      <body className="blog" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <ModuleController page={pageContent} />
        {/* <div className="card-columns">
            {stores.map(store => (
              (store.acf.store_type == "restaurant") ? 
              <Card key={store.id} className={"card-" + store.id}>
                <Link to={`/dining/${store.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/dining/${store.slug}/`}>
                      <CardTitle>{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(store.acf.post_copy)}</CardText>
                    <CardText><small>{store.date}</small></CardText>
                  </CardBody>
              </Card>
            : "" 
            ))}
        </div> */}
    </Container>
  </section>
))
