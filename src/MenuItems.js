import React from 'react'
import { Link, withSiteData } from 'react-static'
import {
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import ReactSVG from 'react-svg'

import directionsIcon from './images/directions_icon.png';
import cinebistroIcon from './images/cinebistro_icon.png';
import DiningIcon from './images/Dining.svg';
import eventsIcon from './images/events_icon.png';
import shoppingIcon from './images/shopping_icon.png';
import signupIcon from './images/signup_icon.png';

export default withSiteData(class MenuList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const menus = this.props.menus
        const {toggle} = this.props

        return menus.items.map((menu, i) => {
            return (
                    <div key={i}>
                        {(menu.children) ? (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {menu.title}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        menu.children.map((children, i) => {
                                            return (
                                                <LinkContainer to={"/" + children.object_slug}>
                                                <DropdownItem key={'children-'+i}>
                                                    <NavItem>
                                                        <Link to={"/" + children.object_slug} onClick={toggle}  className="nav-link">{ReactHtmlParser(children.title)}</Link>
                                                    </NavItem>
                                                </DropdownItem>
                                                </LinkContainer>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        ) :
                            <NavItem>
                                <Link to={'/' + menu.object_slug} href={'/' + menu.object_slug} onClick={toggle}  className="nav-link">
                                {(menu.object_slug == 'hours-directions') ? <img id="hours-directionsIcon" src={directionsIcon} /> : ""}
                                {(menu.object_slug == 'cinebistro') ? <img id="cinebistroIcon" src={cinebistroIcon} /> : ""}
                                {(menu.object_slug == 'dining') ? <div className='nav-icon dining'>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="40px" y="40px"
	 viewBox="0 0 200 200" enable-background="new 0 0 200 200">
<g>
	<path fill="#58595B" d="M195.5,22.9c0-1.6-0.8-3-2.1-4c-1.3-0.9-2.9-1.1-4.4-0.7c-2.7,0.9-6.4,2.9-9.2,7.7
		c-4.5,7.7-8.1,28.2-11,62.6c-0.5,5.5,2.2,10.7,6.8,13.6l2.7,1.7c0.8,0.5,1.4,1.5,1.3,2.5l-1.1,65.3c0,2.8,1,5.5,3,7.5
		c2,2,4.6,3.1,7.4,3.1c2.8,0,5.5-1.1,7.5-3.2c2-2,3-4.7,2.9-7.5L195.5,22.9C195.5,22.9,195.5,22.9,195.5,22.9z M192.4,175
		c-1.7,1.8-4.8,1.8-6.6,0c-0.9-0.9-1.3-2.1-1.3-3.3l1.1-65.3c0.1-3-1.5-5.9-4.1-7.5l-2.7-1.7c-2.8-1.7-4.4-4.9-4.1-8.1
		c3.5-41.2,7.5-55.4,10.2-60.2c1.5-2.6,3.3-3.9,4.8-4.6l3.9,147.4C193.7,172.9,193.2,174.1,192.4,175z"/>
	<path fill="#58595B" d="M32.4,100.1c0,36.8,29.9,66.7,66.7,66.7c36.8,0,66.7-29.9,66.7-66.7c0-36.8-29.9-66.7-66.7-66.7
		C62.3,33.4,32.4,63.3,32.4,100.1z M159.9,100.1c0,33.6-27.3,60.9-60.9,60.9c-33.6,0-60.9-27.3-60.9-60.9
		c0-33.6,27.3-60.9,60.9-60.9C132.6,39.2,159.9,66.5,159.9,100.1z"/>
	<path fill="#58595B" d="M102.3,50.5c17.5,0,33.4,9.7,41.4,25.3c0.5,1,1.5,1.6,2.6,1.6c0.4,0,0.9-0.1,1.3-0.3c1.4-0.7,2-2.5,1.3-3.9
		c-9-17.6-26.8-28.5-46.6-28.5c-1.6,0-2.9,1.3-2.9,2.9C99.3,49.1,100.7,50.5,102.3,50.5z"/>
	<path fill="#58595B" d="M146.2,81.9c1.6,4.8,2.5,9.9,2.5,15c0,1.6,1.3,2.9,2.9,2.9c1.6,0,2.9-1.3,2.9-2.9c0-5.8-0.9-11.5-2.8-16.9
		c-0.5-1.5-2.2-2.3-3.7-1.8C146.5,78.7,145.7,80.4,146.2,81.9z"/>
	<path fill="#58595B" d="M54.5,100.1c0,24.6,20,44.5,44.5,44.5c24.6,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5
		C74.5,55.6,54.5,75.5,54.5,100.1z M99.1,61.4c21.3,0,38.7,17.4,38.7,38.7c0,21.3-17.4,38.7-38.7,38.7c-21.4,0-38.7-17.4-38.7-38.7
		C60.4,78.8,77.7,61.4,99.1,61.4z"/>
	<path fill="#58595B" d="M8.4,179c2,2,4.6,3.1,7.4,3.1c2.8,0,5.4-1.1,7.4-3.1c2-2,3-4.7,2.9-7.5L23.7,77c4.9-1.3,8.5-5.8,8.5-11.1
		v-8.1V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9h-3.5V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9h-2.5
		V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v33.9H5.3V21.1c0-1.6-1.3-2.9-2.9-2.9c-1.6,0-2.9,1.3-2.9,2.9v36.8V66
		c0,5.3,3.6,9.7,8.5,11.1l-2.5,94.5C5.4,174.4,6.5,177,8.4,179z M5.3,66v-5.2h21.1V66c0,3.1-2.5,5.6-5.6,5.6c-0.8,0-1.5,0.3-2.1,0.9
		c-0.5,0.6-0.8,1.3-0.8,2.1l2.5,97.1c0,1.2-0.4,2.4-1.3,3.3c-1.7,1.8-4.8,1.8-6.5,0c-0.9-0.9-1.3-2-1.3-3.3l2.5-97.1
		c0-0.8-0.3-1.5-0.8-2.1c-0.5-0.6-1.3-0.9-2.1-0.9C7.8,71.6,5.3,69.1,5.3,66z"/>
</g>
</svg></div> : ""}
                                {(menu.object_slug == 'events') ? <img id="eventsIcon" src={eventsIcon} /> : ""}
                                {(menu.object_slug == 'shopping') ? <img id="shoppingIcon" src={shoppingIcon} /> : ""}
                                {(menu.object_slug == 'sign-up') ? <img id="sign-upIcon" src={signupIcon} /> : ""}
                                {ReactHtmlParser(menu.title)}</Link>
                            </NavItem>
                        }                     
                    </div>
            )
        })

    }
})