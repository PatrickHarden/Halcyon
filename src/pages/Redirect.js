import React from 'react'
import {Head, withSiteData} from 'react-static'
//

export default withSiteData(class Redirect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Redirecting...
                {window.location.replace(this.props.redirectURL)}
            </div>
        )
    }
})
