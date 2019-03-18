import React from 'react'
import { withSiteData } from 'react-static'
import EmailIcon from '../images/emailIcon.png'
import LocationIcon from '../images/locationIcon.png'
import PhoneIcon from '../images/phoneIcon.png'
import '../css/components/mobileFloatingNav.css'

export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.centerInfo

        return (
            <div id="mobileFloatingNav">
                <a href={options.acf.google_map_directions_url}><img src={LocationIcon} alt="Location Icon" /></a>
                <a href={'mailto:' + options.acf.email}><img src={EmailIcon} alt="Email Icon" /></a>
                <a href={'tel:' + options.acf.phone}><img src={PhoneIcon} alt="Phone Icon" /></a>
            </div>
        )  
    }
})