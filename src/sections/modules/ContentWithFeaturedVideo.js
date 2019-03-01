import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import helpers from '../../helpers.js'
import '../../css/modules/contentWithFeaturedImage.css';
import { relative } from "path";
import $ from 'jquery'

var videoId;
var iframeMarkup;

const styles = {
    position: relative
}

const mBottom = {
    marginBottom: '30px'
}

export default withSiteData(class ContentWithFeaturedVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iframe: '',
        }
        this.disappear = this.disappear.bind(this);
    }

    componentWillMount(){
        console.log(this.props.section)
        videoId = helpers.getVideoUrl(this.props.section.youtube_url);
        this.setState({
            iframe: <iframe width="100%" id="targetVideo" height="350" src={'//www.youtube.com/embed/' + videoId} frameborder="0" allowfullscreen></iframe>
        })
    }
    
    disappear(){
        document.getElementById('disappear').style.display = 'none'
        this.setState({
            iframe: <iframe width="100%" id="targetVideo" height="350" src={'//www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&enablejsapi=1'} frameborder="0" allowfullscreen></iframe>
        })
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
                        <div style={styles} onClick={this.disappear} >
                            {this.props.section.image_overlay && 
                            <img className="imageOverlay" id="disappear" src={this.props.section.image_overlay} />}
                            <span className="play">PlayButton</span>
                            <div style={mBottom}>{this.state.iframe}</div>
                        </div>
                    </Col>
                    <Col sm={6} lg={5} className='content-column'>
                        {this.props.section.heading &&
                            <div className='heading'><h2>{this.props.section.content_heading}</h2></div>
                        }
                        {this.props.section.description &&
                            <div clasName='content'>{ReactHtmlParser(this.props.section.description)}</div>
                        }
                    {(this.props.section.button) ? <Link className="halcyon-button" to={helpers.convertLink(this.props.section.button.url, this.props.title.toLowerCase())}>{(this.props.section.button.title) ? <div>{ReactHtmlParser(this.props.section.button.title)}</div>: <div>{helpers.getTitleFromUrl(this.props.section.button.url, this.props.title.toLowerCase())}</div>}</Link> : ""} 
                    </Col>
                    </Row> 
                </Container>
        </div>
        );
    }
})