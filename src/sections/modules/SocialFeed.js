import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import helpers from '../../helpers.js'
import JuicerFeed from 'react-juicer-feed';
// import TintSocialFeed from '../../sections/homepage/TintSocialFeed.js';

export default withSiteData(class SocialFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.section)
        console.log(this.props.centerInfo)
        return ( 
            <Container className='social-feed-container'>
                {(this.props.centerInfo.acf.data_id && typeof document != 'undefined') ? <div>
                    {this.props.section.heading && 
                    <h2>{this.props.section.heading}</h2>}
                    <div id="thisTarget">
                        <JuicerFeed feedId='imaginuity-ba275954-4d89-4453-8ef8-80e94361aeb4' />
                    </div>
                </div> : ""}
            </Container>
        );
  }
})