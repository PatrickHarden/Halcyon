import React from 'react'
import { Link, withSiteData } from 'react-static'
import {
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

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
                                                <DropdownItem key={'children-'+i}>
                                                    <NavItem>
                                                        <Link to={"/" + children.object + "/" + children.object_slug} onClick={toggle} className="nav-link">{children.title}</Link>
                                                    </NavItem>
                                                </DropdownItem>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        ) :
                            <NavItem>
                                <Link to={'/' + menu.object_slug} onClick={toggle} className="nav-link">{menu.title}</Link>
                            </NavItem>
                        }
                    </div>
            )
        })

    }
})