
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
import Navigation from '../Nav.js'
//

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'blog'){
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withRouteData(({ posts, siteRoot, title, metaDescription, pages  }) => (

  <section>
    <Navigation />
    {setMetaData(pages)}
    <Head>
      <body className="blog" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
          <h1>News &amp; Updates</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {posts.map(post => (
              <Card key={post.id} className={"card-" + post.id}>
                <Link to={`/blogs/${post.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/blogs/${post.slug}/`}>
                      <CardTitle>{post.title.rendered}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(post.excerpt.rendered)}</CardText>
                    <CardText><small>{post.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
