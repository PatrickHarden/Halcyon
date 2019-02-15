import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default class ContentWithFeaturedImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    return (
        <div className='imageCarousel'>
            <div className='heading-container'>
                     <h2>{this.props.section.heading}</h2>
            </div>
            {(this.props.section.display_options == 'content-left-image-right') ? 
            <Row>
                <Col sm={6}>
                    <img src={this.props.section.featured_image.url} alt={this.props.section.featured_image.alt} />
                </Col>
                <Col sm={6}>
                    <div>{ReactHtmlParser(this.props.section.content)}</div>
                </Col>
            </Row> 
            : 
            <Row>
                <Col sm={6}>
                    <div>{ReactHtmlParser(this.props.section.content)}</div>
                </Col>
                <Col sm={6}>
                    <img src={this.props.section.featured_image.url} alt={this.props.section.featured_image.alt} />
                </Col>
             </Row>
            }
        </div>
    );
  }
}