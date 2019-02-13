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
                                {(menu.object_slug == 'dining') ? <div className='nav-icon dining'></div> : ""}
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