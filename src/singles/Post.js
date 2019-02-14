import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser from 'react-html-parser'
//

export default withRouteData(class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const post = this.props.post
    const siteRoot = this.props.siteRoot
    const title = this.props.title
    const metaDescription = this.props.metaDescription

    
    if (typeof document !== 'undefined') {
      return (
        <section>
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
      </section>
      )
    } else {
      return null
    }
}})
