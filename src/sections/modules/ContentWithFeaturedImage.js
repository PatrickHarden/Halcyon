import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';
import helpers from '../../helpers.js'

export default withSiteData(class ContentWithFeaturedImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    return ( 
        <Container className='contentWithFeaturedImage'>
            <Row className={(this.props.section.display_options == 'content-left-image-right') ? 'content-left' : 'content-right'}>
                <Col sm={6} lg={7} className='image-column'>
                    <img src={this.props.section.featured_image.url} alt={this.props.section.featured_image.alt} />
                </Col>
                <Col sm={6} lg={5} className='content-column'>
                    {this.props.section.heading &&
                        <div className='heading'><h2>{this.props.section.heading}</h2></div>
                    }
                    {this.props.section.content &&
                        <div className='content'>{ReactHtmlParser(this.props.section.content)}</div>
                    }
                    {(this.props.section.button) ? <Link className="halcyon-button" to={helpers.convertLink(this.props.section.button.url, this.props.title.toLowerCase())}>{(this.props.section.button.title) ? <div>{ReactHtmlParser(this.props.section.button.title)}</div>: <div>{helpers.getTitleFromUrl(this.props.section.button.url, this.props.title.toLowerCase())}</div>}</Link> : ""} 
                </Col>
            </Row> 
        </Container>
    );
  }
})