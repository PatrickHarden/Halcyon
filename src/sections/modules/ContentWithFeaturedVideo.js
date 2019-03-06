import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import helpers from '../../helpers.js'
import '../../css/modules/contentWithFeaturedImage.css';
import $ from 'jquery'
import '../../css/modules/video.css'

var videoId;
var iframeMarkup;

export default withSiteData(class ContentWithFeaturedVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iframe: '',
        }
        this.disappear = this.disappear.bind(this);
    }

    componentWillMount() {
        videoId = helpers.getVideoUrl(this.props.section.youtube_url);
        this.setState({
            iframe: <iframe width="100%" height="350" src={'//www.youtube.com/embed/' + videoId} frameBorder="0" allowFullScreen></iframe>
        })
    }

    disappear = (e) => {
        $(e.target).parents('.videoWrapper').addClass('active');

        this.setState({
            iframe: <iframe width="100%" height="350" src={'//www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&enablejsapi=1'} frameBorder="0" allowFullScreen></iframe>
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
                <Row className={(this.props.section.display_options == 'video-left-content-right') ? 'column-wrap content-right' : 'column-wrap content-left'}>
                    <Col sm={6} className='image-column'>
                        <div className='videoWrapper'>
                            <span className="play" onClick={((e) => this.disappear(e))}></span>
                            {this.props.section.image_overlay &&
                                <img className="imageOverlay" src={this.props.section.image_overlay} />}
                            {this.state.iframe}
                        </div>
                    </Col>
                    <Col sm={6} className='content-column'>
                        <div className='inner-wrapper'>
                            <div>
                                {this.props.section.heading &&
                                    <div className='heading'><h4>{this.props.section.content_heading}</h4></div>
                                }
                                {this.props.section.description &&
                                    <div className='content'>{ReactHtmlParser(this.props.section.description)}</div>
                                }
                                {(this.props.section.button) ? <Link className="halcyon-button" to={helpers.convertLink(this.props.section.button.url, this.props.title.toLowerCase())}>{(this.props.section.button.title) ? <div>{ReactHtmlParser(this.props.section.button.title)}</div> : <div>{helpers.getTitleFromUrl(this.props.section.button.url, this.props.title.toLowerCase())}</div>}</Link> : ""}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
})