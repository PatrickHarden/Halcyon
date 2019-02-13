import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(({ post, siteRoot, title, metaDescription }) => (
  <section>
    {(typeof window !== 'undefined') ? <div>
    <Head>
      <body className={'single-blog blog-id-'+post.id + ' ' + post.slug} />
      {(post.yoast_meta.yoast_wpseo_title) ? <title>{post.yoast_meta.yoast_wpseo_title}</title> : <title>{title}</title>}
      {(post.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={post.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
      {(post.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={post.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    <Container>
      <Row>
        <Col xs="12">
        <h1>{(post.title.rendered)? <div>{ReactHtmlParser(post.title.rendered)}</div>: ""}</h1>
          {(post.content.rendered) ? <div>{ReactHtmlParser(post.content.rendered)}</div>: ""}
        </Col>
      </Row>
    </Container>
    </div> : "" }
  </section>
))
