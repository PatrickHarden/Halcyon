import React from 'react'
import { withRouteData, Head } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';
import '../css/components/pageContent.css'
import helpers from '../helpers'
import ReactHtmlParser from 'react-html-parser'
import ModuleController from '../sections/modules/ModuleController.js';
import Navigation from '../Nav.js'
//

export default withRouteData(class Post extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const post = this.props.post
    const siteRoot = this.props.siteRoot
    const metaDescription = this.props.metaDescription

    
    if (typeof document !== 'undefined') {
      return (
        <section>
          <Navigation />
        <Head>
          <body className={'single-blog blog-id-'+post.id + ' ' + post.slug + ' dark-green'} />
          {(post.yoast_meta.yoast_wpseo_title) ? <title>{post.yoast_meta.yoast_wpseo_title}</title> : <title>{post.title.rendered}</title>}
          {(post.yoast_meta.yoast_wpseo_metadesc) ? <meta name="description" content={post.yoast_meta.yoast_wpseo_metadesc} /> : <meta name="description" content={metaDescription} />}
          {(post.yoast_meta.yoast_wpseo_canonical) ? <link rel="canonical" href={post.yoast_meta.yoast_wpseo_canonical} /> : <link rel="canonical" href={siteRoot} /> }
        </Head>
        {(post.acf.desktop_image) ?
          <div id="heroSection">
            <img className="hidden-xs" src={post.acf.desktop_image.url} alt={post.acf.desktop_image.alt} />
            <img className="visible-xs" src={post.acf.mobile_image.url} alt={post.acf.mobile_image.alt} />
            {post.acf.additional_content &&
            <div className='button-container hidden-xs'>
              {post.acf.button_1 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(post.acf.button_1.target) ? "_blank" : ""}  to={helpers.convertLink(post.acf.button_1.url, this.props.title.toLowerCase())}>{(post.acf.button_1.title) ? <div>{ReactHtmlParser(post.acf.button_1.title)}</div> : <div>{helpers.getTitleFromUrl(post.acf.button_1.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {post.acf.button_2 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(post.acf.button_2.target) ? "_blank" : ""}  to={helpers.convertLink(post.acf.button_2.url, this.props.title.toLowerCase())}>{(post.acf.button_2.title) ? <div>{ReactHtmlParser(post.acf.button_2.title)}</div> : <div>{helpers.getTitleFromUrl(post.acf.button_2.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
              {post.acf.button_3 &&
                <div className='button-wrap'>
                  <Link className="halcyon-button" target={(post.acf.button_3.target) ? "_blank" : ""}  to={helpers.convertLink(post.acf.button_3.url, this.props.title.toLowerCase())}>{(post.acf.button_3.title) ? <div>{ReactHtmlParser(post.acf.button_3.title)}</div> : <div>{helpers.getTitleFromUrl(post.acf.button_3.url, this.props.title.toLowerCase())}</div>}</Link>
                </div>
              }
            </div>
            }
            <div className="hero-container">
              {post.acf.additional_content &&
                <div className="hero-content hidden-xs">
                  {(post.acf.subheading) ? <h2>{ReactHtmlParser(post.acf.subheading)}</h2> : ""}
                  {(post.acf.content) ? <div>{ReactHtmlParser(post.acf.content)}</div> : ""}
                </div>
              }
              <div className="hero-heading">{(post.acf.title_h1) ? <h1>{ReactHtmlParser(post.acf.title_h1)}</h1> : <h1>{ReactHtmlParser(post.title.rendered)}</h1>}</div>
            </div>
          </div>
          : ""}
        <Container>
          <Row>
            <Col xs="12">
            <h1>{(post.title.rendered)? <div>{ReactHtmlParser(post.title.rendered)}</div>: ""}</h1>
              {(post.content.rendered) ? <div>{ReactHtmlParser(post.content.rendered)}</div>: ""}
            </Col>
          </Row>
        </Container>
        <ModuleController page={post} />
      </section>
      )
    } else {
      return null
    }
}})
