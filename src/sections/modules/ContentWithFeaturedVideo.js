import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';

var videoId;
var iframeMarkup;

export default withSiteData(class ContentWithFeaturedVideo extends React.Component {

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

    getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    componentWillMount(){
        console.log(this.props.section.youtube_url)
        videoId = this.getId(this.props.section.youtube_url);
        iframeMarkup = '<iframe width="100%" height="315" src="//www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    }
    

    render() {
        return (<div>
                {this.props.section.heading &&
                <div className='heading-container'>
                    <Container>
                    <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                }  
                <Container className='contentWithFeaturedVideo'>
                    <Row className={(this.props.section.display_options == 'video-left-content-right') ? 'content-right' : 'content-left'}>
                    <Col sm={6} lg={7} className='image-column'>
                    {ReactHtmlParser(iframeMarkup)}
                    </Col>
                    <Col sm={6} lg={5} className='content-column'>
                        {this.props.section.heading &&
                            <div className='heading'><h2>{this.props.section.content_heading}</h2></div>
                        }
                        {this.props.section.content &&
                            <div clasName='content'>{ReactHtmlParser(this.props.section.description)}</div>
                        }
                    {(this.props.section.button) ? <Link className="halcyon-button" to={this.convertLink(this.props.section.button.url)}>{(this.props.section.button.title) ? <div>{ReactHtmlParser(this.props.section.button.title)}</div>: <div>{this.getTitleFromUrl(this.props.section.button.url)}</div>}</Link> : ""} 
                    </Col>
                    </Row> 
                </Container>
        </div>
        );
    }
})