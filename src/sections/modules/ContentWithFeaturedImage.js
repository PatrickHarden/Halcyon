import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';
import DarkFeather from '../../images/feather-dark.png';

export default withSiteData(class ContentWithFeaturedImage extends React.Component {

    constructor(props) {
        super(props);
    }

    convertLink(url){
        if (url.includes(this.props.title.toLowerCase())){
            var words = url.split('/');
            if (words[4] == ""){
                return words[3]
            } else {
                if (words[3] == "events") {
                return "/events/" + words[4]
                } else if (words[3] == "sales"){
                return "/sales/" + words[4]
                }  else if (words[3] == "stores"){
                return "/stores/" + words[4]
                } else if (words[3] == "blog"){
                return "/blogs/" + words[4]
                }
            }
        } else {
            return url;
        }
    }
    
    getTitleFromUrl(url){
        var words = url.split('/');
        if (url.includes(this.props.title.toLowerCase())){
            if (words[4] == ""){
                return words[3].replace(/-/g, ' ')
            } else {
                return words[4].replace(/-/g, ' ')
            }
        } else {
            return url.replace(/(^\w+:|^)\/\//, '')
        }
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
                        <div clasName='content'>{ReactHtmlParser(this.props.section.content)}</div>
                    }
                    {(this.props.section.button) ? <Link className="halcyon-button" to={this.convertLink(this.props.section.button.url)}>{(this.props.section.button.title) ? <div>{ReactHtmlParser(this.props.section.button.title)}</div>: <div>{this.getTitleFromUrl(this.props.section.button.url)}</div>}</Link> : ""} 
                </Col>
            </Row> 
        </Container>
    );
  }
})