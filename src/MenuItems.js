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
                                                        <Link tag={Link} to={"/" + children.object_slug} onClick={toggle}  className="nav-link">{ReactHtmlParser(children.title)}</Link>
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
                                <Link to={'/' + menu.object_slug} href={'/' + menu.object_slug} tag={Link} onClick={toggle}  className="nav-link">{ReactHtmlParser(menu.title)}</Link>
                            </NavItem>
                        }
                    </div>
            )
        })

    }
})