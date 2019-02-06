import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'reactstrap';

import FooterLogo from '../images/footerLogo.png';

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
                <Row>
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
                <div>&copy; {(new Date().getFullYear())} {siteTitle}  |  Built By <a href={siteCreatorURL}>{siteCreator}</a></div>
            </footer>
        )

    }
})