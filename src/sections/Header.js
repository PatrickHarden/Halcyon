import React from 'react'
import { Link, SiteData, withSiteData, Head } from 'react-static'
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
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/osv0bnv.css" />
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" type="image/png" href={options.acf.favicon.url}/>
                </Head>
                <Navigation />
            </header>
        )
    }
})