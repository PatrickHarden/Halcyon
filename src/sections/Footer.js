import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'reactstrap';

import FooterLogo from '../images/footerLogo.png';
import AccessibilityIcon from '../images/footerAccessIcon.png';

export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL
        const menu = this.props.footerMenu

        return (
            <footer className="text-center">
                {console.log(menu)}
                <Container>
                <Row>
                    <h4>HALCYON</h4>
                <Col xs="9">
                    {
                        menu.items.map((item, i) => {
                            return (
                                <div>         
                                <Link to={'/' + item.object_slug} href={'/' + item.object_slug} className="nav-link">
                                    {ReactHtmlParser(item.title)}
                                </Link>     
                                </div> 
                            )
                        })
                    }
                </Col>
                <Col xs="3">
                    <img src={FooterLogo} />
                </Col>
                </Row>
                </Container>
                <div id="footerCopyright">&copy; {(new Date().getFullYear())} {siteTitle} HALCYON FORSYTH. ALL RIGHTS RESERVED. <img src={AccessibilityIcon} /></div>
            </footer>
        )

    }
})