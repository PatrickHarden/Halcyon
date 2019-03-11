import React from 'react'
import {withSiteData} from 'react-static'
//

export default withSiteData(class Redirect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (typeof document !== 'undefined') {
            return (
                <div className="mT">
                    <h2>Redirecting...</h2>
                    {window.location.replace(this.props.redirectURL)}
                </div>
            )
        } else {
            return null
        }
    }
})
