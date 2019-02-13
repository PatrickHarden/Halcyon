import React from 'react'
import { withSiteData, Head } from 'react-static'
import Navigation from '../Nav';
import TagManager from 'react-gtm-module'


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.centerInfo
        const tagManagerArgs = {
            gtmId: this.props.centerInfo.acf.google_tag_manager_ID
        }

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
        if (typeof document !== 'undefined') {
            return (
                <Head>
                {(tagManagerArgs) ? TagManager.initialize(tagManagerArgs) : ""}
            </Head>
            )
        } else {
            return null
        }
    }
})