import React from 'react'
import { withSiteData, Head } from 'react-static'
import Navigation from '../Nav';


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.centerInfo

        if (typeof document === 'undefined') {
            return null
        } else {
            return (
                <header>
                    <Head>
                        <link rel="stylesheet" href="https://use.typekit.net/osv0bnv.css" />
                        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                        <meta charSet="utf-8" />
                        <link rel="shortcut icon" type="image/png" href={options.acf.favicon.url}/>
                    </Head>
                    <Navigation />
                </header>
            )
        }
    }
})