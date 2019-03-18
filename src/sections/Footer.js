import React from 'react'
import { Link, withSiteData } from 'react-static'
import ReactHtmlParser from 'react-html-parser'
import { Container, Row, Col } from 'reactstrap';

import FooterLogo from '../images/footerLogo.png';
import AccessibilityIcon from '../images/footerAccessIcon.png';
import TagManager from 'react-gtm-module'

var isContrast = false;

export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    changeContrast(){
        if (!isContrast) {
            document.getElementById("footerCopyright").style.background = "#000"
            document.getElementsByTagName("footer")[0].style.backgroundColor = "#fff"
            document.getElementsByTagName("footer")[0].style.borderTop = "1px inset #000"
            document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "grayscale(100%)"
            isContrast = true;
        } else {
            document.getElementById("footerCopyright").style.background = "#4E5859"
            document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2"
            document.getElementsByTagName("footer")[0].style.borderTop = "none"
            document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none"
            isContrast = false;
        }
    }

    render() {
        const siteTitle = this.props.title
        // const siteCreator = this.props.siteCreator
        // const siteCreatorURL = this.props.siteCreatorURL
        const menu = this.props.footerMenu
        const tagManagerArgs = {
            gtmId: this.props.centerInfo.acf.google_tag_manager_ID
        }
        
        if (typeof document === 'undefined') {
            return null
        } else {
            return (
                <footer id="theFooter">
                    <Container>
                    <Row>
                        <Col xs={12}>
                            <h4 className='footer-heading'>HALCYON</h4>
                        </Col>
                        <Col xs={12} sm={9} className='footer-nav'>
                            {
                                menu.items.map((item, i) => {
                                    return (
                                        <div key={i}>         
                                        <Link to={'/' + item.object_slug} href={'/' + item.object_slug} className="nav-link">
                                            {ReactHtmlParser(item.title)}
                                        </Link>     
                                        </div> 
                                    )
                                })
                            }
                        </Col>
                        <Col sm={3} className='hidden-xs'>
                            <img src={FooterLogo} />
                        </Col>
                    </Row>
                    </Container>
                    <div id="footerCopyright">
                        <Container>
                            &copy; {(new Date().getFullYear())} {siteTitle} HALCYON FORSYTH. ALL RIGHTS RESERVED. 
                            <img className='hidden-xs eyeball' src={AccessibilityIcon} alt="accessibility icon" onClick={this.changeContrast} />
                        </Container>
                    </div>
                    {/* Removed for testing different gtm module */}
                    <div className='hidden'>{(tagManagerArgs) ? setTimeout(TagManager.initialize(tagManagerArgs), 1) : ""}</div>
                </footer>
            )
        }
    }
})