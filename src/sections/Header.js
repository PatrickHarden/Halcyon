import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import Navigation from '../Nav';

export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteRoot = this.props.siteRoot
        const options = this.props.centerInfo

        return (
            <header>
                <Helmet>
                    <link rel="stylesheet" href="https://use.typekit.net/osv0bnv.css" />
                    <meta charSet="utf-8" />
                    <title>{siteTitle}</title>
                    {(options.acf.meta_description) ? <meta name="description" content={options.acf.meta_description} /> : ""}
                    <link rel="shortcut icon" type="image/png" href={options.acf.favicon.url}/>
                    <link rel="canonical" href={siteRoot} />
                </Helmet>
                <Navigation />
            </header>
        )
    }
})