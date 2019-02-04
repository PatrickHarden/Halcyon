import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'

export default withSiteData(class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.newVal(e.target.value);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL

        return (
            <div>
                <input type="text" onChange={this.handleChange} />
            </div>
        )

    }
})