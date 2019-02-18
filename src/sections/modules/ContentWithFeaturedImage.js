import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';

export default class ContentWithFeaturedImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    return (
        <Container className='contentWithFeaturedImage'>
            <Row className={(this.props.section.display_options == 'content-left-image-right') ? 'content-left' : 'content-right'}>
                <Col sm={6} className='image-column'>
                    <img src={this.props.section.featured_image.url} alt={this.props.section.featured_image.alt} />
                </Col>
                <Col sm={6} className='content-column'>
                    {this.props.section.heading &&
                        <div className='heading'><h2>{this.props.section.heading}</h2></div>
                    }
                    {this.props.section.content &&
                        <div>{ReactHtmlParser(this.props.section.content)}</div>
                    }
                    {this.props.section.button &&
                        <a className='halcyon-button' href={this.props.section.button.url} target={this.props.section.button.target}>{this.props.section.button.title}</a>
                    }
                </Col>
            </Row> 
        </Container>
    );
  }
}