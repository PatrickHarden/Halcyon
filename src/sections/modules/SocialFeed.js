import React from "react";
import { withSiteData } from 'react-static'
import { Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
// import JuicerFeed from 'react-juicer-feed';
import TintSocialFeed from '../../sections/homepage/TintSocialFeed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'

export default withSiteData(class SocialFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='social-feed-container'>
                {(this.props.centerInfo.acf.data_id && typeof document != 'undefined') ? <div>
                    <div id="socialHeader">
                        <div>
                            {this.props.section.heading &&
                                <h2>{ReactHtmlParser(this.props.section.heading)}</h2>}
                        </div>
                        <div>
                            <a class="social-icon" href={this.props.centerInfo.acf.facebook_url} target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} className='search-icon' />
                            </a>
                            <a class="social-icon" href={this.props.centerInfo.acf.twitter_url} target="_blank">
                                <FontAwesomeIcon icon={faTwitter} className='search-icon' />
                            </a>
                            <a class="social-icon" href={this.props.centerInfo.acf.instagram_url} target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className='search-icon' />
                            </a>
                        </div>
                    </div>
                    <div id="thisTarget">
                        {/* <JuicerFeed feedId='imaginuity-ba275954-4d89-4453-8ef8-80e94361aeb4' /> */}
                        <TintSocialFeed optionsData={this.props.centerInfo} />
                    </div>
                </div> : ""}
            </Container>
        );
    }
})