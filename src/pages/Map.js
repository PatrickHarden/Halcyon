import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        document.body.style.display = "none";
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