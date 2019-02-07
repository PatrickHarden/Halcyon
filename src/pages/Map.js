import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import '../css/components/whiteOut.css'

export default withSiteData(class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const url = this.props.redirectURL

        return (
            <div>
                {window.location.replace(url)}
            </div>
        )

    }
})