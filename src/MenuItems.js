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
                    <NavItem key={i}>
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
                        
                                <Link to={'/' + menu.object_slug} href={'/' + menu.object_slug} onClick={toggle}  className="nav-link">
                                {(menu.object_slug == 'hours-directions') ? <span className='nav-icon directions'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 162.5 195">
<g>
	<path className="st0" d="M127.6,47.8c0-11.3-9.2-20.4-20.4-20.4c-11.3,0-20.4,9.2-20.4,20.4c0,11.3,9.2,20.4,20.4,20.4
		C118.5,68.2,127.6,59.1,127.6,47.8z M95.3,47.8c0-6.6,5.3-11.9,11.9-11.9s11.9,5.3,11.9,11.9s-5.3,11.9-11.9,11.9
		C100.6,59.7,95.3,54.4,95.3,47.8z"/>
	<path className="st0" d="M152.3,61.2h-5.7c2.7-7.4,4.1-13.3,4.1-17.7c0-24-19.5-43.5-43.5-43.5S63.7,19.5,63.7,43.5
		c0,4.3,1.4,10.3,4.1,17.7H10.2C4.6,61.2,0,65.8,0,71.4v113.4c0,5.6,4.6,10.2,10.2,10.2h142.1c5.6,0,10.2-4.6,10.2-10.2V71.4
		C162.5,65.8,157.9,61.2,152.3,61.2z M92.5,152.7h34.2v33.8H92.5V152.7z M84,186.5H40.1v-33.8H84V186.5z M40.1,144.2v-22.5h24.8
		c1.1,0,2.2-0.4,3-1.2l19.2-19.2c8.6,15.4,16.4,27.8,16.5,27.9c0.8,1.2,2.1,2,3.6,2s2.8-0.7,3.6-2c0.1-0.1,9.1-14.3,18.4-31.3V98
		H154v46.2H40.1z M31.6,144.2H8.5v-22.5h23.1V144.2z M152.3,69.7c1,0,1.7,0.8,1.7,1.7v18.1h-20.4c3.8-7.3,7-13.9,9.6-19.8H152.3z
		 M107.2,8.5c19.3,0,35,15.7,35,35c0,15.1-22.7,55.2-35,75.4c-12.3-20.1-35-60.3-35-75.4C72.2,24.2,87.9,8.5,107.2,8.5z M82.9,93.5
		l-19.7,19.7H40.1V69.7h31.1C74.2,76.6,78.1,84.6,82.9,93.5z M10.2,69.7h21.4v43.5H8.5V71.4C8.5,70.5,9.3,69.7,10.2,69.7z
		 M8.5,184.8v-32.1h23.1v33.8H10.2C9.3,186.5,8.5,185.7,8.5,184.8z M152.3,186.5h-17.1v-33.8H154v32.1
		C154,185.7,153.2,186.5,152.3,186.5z"/>
</g>
</svg></span> : ""}
                                {(menu.object_slug == 'cinebistro') ? <span className='nav-icon cmx'><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.49 88.68"><title>CMX Logo</title><polygon className="cls-1" points="111.3 85.11 111.32 85.11 111.32 85.1 111.3 85.11"/><polygon className="cls-2" points="264.56 3.78 234.27 3.78 249.69 25.82 264.56 3.78"/><path className="cls-3" d="M49,135.88A39.23,39.23,0,1,1,81.66,75l4.08-3.15a44.36,44.36,0,1,0,.69,48.49l-4.18-3A39.24,39.24,0,0,1,49,135.88Z" transform="translate(-4.63 -52.32)"/><path className="cls-3" d="M49,116.41A19.76,19.76,0,1,1,66.17,87L80.65,75.8a38,38,0,1,0,.56,40.82L66.38,106A19.75,19.75,0,0,1,49,116.41Z" transform="translate(-4.63 -52.32)"/><polygon className="cls-3" points="176.02 85.11 150.1 85.11 176.04 43.61 176.02 85.11"/><rect className="cls-3" x="89.24" y="3.8" width="5.11" height="81.3"/><polygon className="cls-3" points="151.84 3.8 132.44 35.27 113.05 3.8 95.62 3.8 95.62 85.11 111.65 85.11 111.65 38.41 132.44 70.24 132.81 70.24 175.66 4.34 176.03 3.8 151.84 3.8"/><polygon className="cls-4" points="265.42 85.11 208.53 3.78 202.7 3.78 258.59 85.11 265.42 85.11"/><polygon className="cls-4" points="181.15 3.78 207.89 43.77 180.02 85.11 208.64 85.11 222.62 63.16 236.49 85.11 257.05 85.11 201.16 3.78 181.15 3.78"/><path className="cls-4" d="M279.24,136.08c0,.58.43.81.95.81s.8-.28.8-.57a.45.45,0,0,0-.31-.46c-.26-.1-.61-.17-1.12-.31a1,1,0,0,1-.83-1c0-.75.69-1.1,1.37-1.1s1.44.41,1.44,1.2h-.65c0-.48-.36-.66-.82-.66-.3,0-.69.11-.69.49s.18.41.45.48l1.09.29a1,1,0,0,1,.73,1c0,.84-.75,1.18-1.5,1.18s-1.55-.41-1.57-1.35Z" transform="translate(-4.63 -52.32)"/><path className="cls-4" d="M282.21,133.58h.93l1,2.94h0l1-2.94h.92v3.76h-.63v-2.9h0l-1,2.9h-.55l-1-2.9h0v2.9h-.63Z" transform="translate(-4.63 -52.32)"/></svg></span> : ""}
                                {(menu.object_slug == 'dining') ? <span className='nav-icon dining'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 200.8 165.2">
<g>
	<path className="st0" d="M196.5,5.4c0-1.6-0.8-3-2.1-4c-1.3-0.9-2.9-1.1-4.4-0.7c-2.7,0.9-6.4,2.9-9.2,7.7c-4.5,7.7-8.1,28.2-11,62.6
		c-0.5,5.5,2.2,10.7,6.8,13.6l2.7,1.7c0.8,0.5,1.4,1.5,1.3,2.5l-1.1,65.3c0,2.8,1,5.5,3,7.5s4.6,3.1,7.4,3.1c2.8,0,5.5-1.1,7.5-3.2
		c2-2,3-4.7,2.9-7.5L196.5,5.4L196.5,5.4z M193.4,157.5c-1.7,1.8-4.8,1.8-6.6,0c-0.9-0.9-1.3-2.1-1.3-3.3l1.1-65.3
		c0.1-3-1.5-5.9-4.1-7.5l-2.7-1.7c-2.8-1.7-4.4-4.9-4.1-8.1c3.5-41.2,7.5-55.4,10.2-60.2c1.5-2.6,3.3-3.9,4.8-4.6l3.9,147.4
		C194.7,155.4,194.2,156.6,193.4,157.5z"/>
	<path className="st0" d="M33.4,82.6c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7s-29.9-66.7-66.7-66.7
		C63.3,15.9,33.4,45.8,33.4,82.6z M160.9,82.6c0,33.6-27.3,60.9-60.9,60.9s-60.9-27.3-60.9-60.9S66.4,21.7,100,21.7
		C133.6,21.7,160.9,49,160.9,82.6z"/>
	<path className="st0" d="M55.5,82.6c0,24.6,20,44.5,44.5,44.5c24.6,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5
		C75.5,38.1,55.5,58,55.5,82.6z M100.1,43.9c21.3,0,38.7,17.4,38.7,38.7s-17.4,38.7-38.7,38.7c-21.4,0-38.7-17.4-38.7-38.7
		C61.4,61.3,78.7,43.9,100.1,43.9z"/>
	<path className="st0" d="M9.4,161.5c2,2,4.6,3.1,7.4,3.1s5.4-1.1,7.4-3.1s3-4.7,2.9-7.5l-2.4-94.5c4.9-1.3,8.5-5.8,8.5-11.1v-8.1V3.6
		c0-1.6-1.3-2.9-2.9-2.9S27.4,2,27.4,3.6v33.9h-3.5V3.6c0-1.6-1.3-2.9-2.9-2.9S18.1,2,18.1,3.6v33.9h-2.5V3.6c0-1.6-1.3-2.9-2.9-2.9
		S9.8,2,9.8,3.6v33.9H6.3V3.6C6.3,2,5,0.7,3.4,0.7S0.5,2,0.5,3.6v36.8v8.1c0,5.3,3.6,9.7,8.5,11.1l-2.5,94.5
		C6.4,156.9,7.5,159.5,9.4,161.5z M6.3,48.5v-5.2h21.1v5.2c0,3.1-2.5,5.6-5.6,5.6c-0.8,0-1.5,0.3-2.1,0.9c-0.5,0.6-0.8,1.3-0.8,2.1
		l2.5,97.1c0,1.2-0.4,2.4-1.3,3.3c-1.7,1.8-4.8,1.8-6.5,0c-0.9-0.9-1.3-2-1.3-3.3l2.5-97.1c0-0.8-0.3-1.5-0.8-2.1s-1.3-0.9-2.1-0.9
		C8.8,54.1,6.3,51.6,6.3,48.5z"/>
</g>
</svg></span> : ""}
{(menu.object_slug == 'living') ? <span className='nav-icon living'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.12 156.68"><defs></defs><title>Asset 2</title><g data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M86,.4l88.33,67a3.22,3.22,0,0,1-2,5.79,3.25,3.25,0,0,1-1.95-.66L84.06,7"/><path class="cls-1" d="M92.06,9,5.67,74.57a3.22,3.22,0,0,1-3.9-5.13l88.34-67"/><path class="cls-1" d="M130.47,134.67H95.36a3.23,3.23,0,0,1-3.22-3.23V96.34a3.22,3.22,0,0,1,3.22-3.22h35.11a3.22,3.22,0,0,1,3.22,3.22v35.1A3.23,3.23,0,0,1,130.47,134.67Zm-31.88-6.45h28.66V99.56H98.59Z"/><path class="cls-1" d="M7.1,156.18a3.22,3.22,0,1,1,0-6.44H165a3.22,3.22,0,0,1,0,6.44"/><path class="cls-1" d="M48.22,149.74V99.82H69.16v49.92h6.45V96.59a3.22,3.22,0,0,0-3.22-3.22H45a3.22,3.22,0,0,0-3.22,3.22v53.15Z"/><path class="cls-1" d="M24,149.74V70a3.22,3.22,0,0,0-6.44,0v79.74Z"/><path class="cls-1" d="M154.58,149.74V70a3.23,3.23,0,0,0-6.45,0v79.74Z"/></g></g></svg></span> : "" }
                                {(menu.object_slug == 'events') ? <span className='nav-icon events'><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 189.7 184.2">
<path className="st0" d="M182.4,137.4l6.9-18.4l-5.6,1.7c-0.6,0.2-1.1,0.3-1.6,0.5c-0.1,0-0.2,0.1-0.2,0.1c-2.3-5.2-5.2-9.5-8.9-13.1
	c-9.2-9.1-19.7-13.8-31.4-13.8c-4.1,0-8.3,0.6-12.6,1.7c-10.9,2.9-20.2,9.7-26.1,19.2c-5.9,9.4-8,20.7-6.1,31.9
	c1.8,10.2,7.2,19.6,15.4,26.4c8.1,6.7,18.2,10.4,28.5,10.4c1.8,0,3.7-0.1,5.5-0.3c11.5-1.5,21.2-6.7,28.8-15.5
	c3.1-3.6,5.5-7.5,7.1-11.6c0.5-1.4,0.4-3.7-0.9-4.9c-1-0.9-2.5-1.3-3.5-1.3c-0.4,0-0.8,0.1-1.2,0.1c-1.7,0.5-2.7,2.1-3.1,3.1
	c-5.7,12.9-18.5,21.2-32.6,21.2c-2.3,0-4.6-0.2-6.8-0.7c-9.4-1.9-17.5-7.3-22.7-15.3c-5.3-8-7.1-17.6-5.1-27.1
	c3.2-15.2,16.5-26.9,31.6-27.9c1-0.1,2-0.1,3-0.1c11.2,0,20.6,4.6,28,13.5c1.8,2.1,3.2,4.4,4.3,7l-7.1,2.5L182.4,137.4z"/>
<path className="st1" d="M159.5,154.5c0,1-0.3,2-1,2.8s-1.8,1.3-2.9,1.3l0,0c-1,0-1.9-0.3-2.6-1l-10-8.2c-0.6,0.1-1.3,0.2-1.9,0.2
	c-4.8,0-8.7-3.9-8.7-8.7c0-2.8,1.4-5.5,3.7-7.1l1.1-17.9c0-2.1,1.8-3.8,3.9-3.8c2.1,0,3.9,1.7,3.9,3.8l1.1,17.9
	c2.3,1.6,3.7,4.3,3.7,7.1c0,0.4,0,0.8-0.1,1.3l8.6,9.7C159,152.6,159.4,153.5,159.5,154.5z"/>
<path className="st1" d="M110.8,24.8c0,0.3,0,0.6,0,0.9c0,1.8,0.8,3.2,2.2,4.2c1.9,1.5,4,1.7,6.2,0.8c2.5-1.1,3.6-3.3,3.6-6
	c0-5.7,0-11.4,0-17.1c0-0.9-0.2-1.9-0.5-2.7c-0.9-2.5-3.7-4.2-6.2-3.8c-2.9,0.4-5.2,2.6-5.3,5.5c-0.1,2.2-0.1,4.4,0,6.6
	c-15.7,0-51.1,0.1-51.7,0.2c0,0.7,0,1.3,0,1.8c0,3.2,0,6.4,0,9.6C74.4,24.8,94.9,24.8,110.8,24.8z"/>
<path className="st2" d="M159,90.9c0-19.7,0-39.4,0-59.1c0-0.5,0-0.9,0-1.4c-0.4-8.4-6.3-15.3-14.5-16.9c-2.6-0.5-5.4-0.4-8.1-0.4
	c-2.5-0.1-1.8,0-4.5,0V15c0,3.2,0,6.4,0,9.6c0,0.1,0,0.1,0,0.2h8.1c4.6,0,7.1,2.5,7.1,7.1v11.7h-134V31.8c0-4.6,2.5-7.1,7.1-7.1
	h17.1c0,0.8,0.1,1.7,0.4,2.4c0.9,2.7,3.5,4.3,6.5,4c2.7-0.3,4.9-2.6,5-5.4c0.1-3.2,0-6.5,0-9.7s0.1-6.4,0-9.6
	C49.1,4,47.3,2,44.9,1.3c-4.1-1.2-7.7,1.8-7.7,6.4c0,1.8,0,3.7,0,5.5c-2.6,0-10.1,0-12,0c-3,0.1-6.1-0.2-9.1,0.3C7,15.1,1,22.5,1,32
	c0,36,0,72.1,0,108.1c0,10.9,7.9,18.8,18.8,18.8c24.5,0,49,0,73.5,0c-1.4-3.4-2.4-6.9-3.1-10.6c-0.1-0.5-0.2-1-0.2-1.5
	c-23.3,0-46.6,0-69.9,0c-4.6,0-7.1-2.5-7.1-7.1c0-18,0-36,0-54c0-10.8,0-21.6,0-32.4h133.9c0,10.8,0,21.6,0,32.4V88
	C151.1,88.5,155.1,89.4,159,90.9z"/>
</svg></span> : ""}
                                {(menu.object_slug == 'shopping') ? <span className='nav-icon shopping'><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 160.4 182">
<g>
	<g>
		<path className="st0" d="M131.1,156.6H27.5c-2,0-3.7-1.7-3.7-3.7s1.7-3.7,3.7-3.7h103.6c2,0,3.7,1.7,3.7,3.7S133.1,156.6,131.1,156.6z
			"/>
	</g>
	<path className="st0" d="M54.8,66c0,4.5-3.6,8.1-8.1,8.1c-4.5,0-8.1-3.6-8.1-8.1c0-4.5,3.6-8.1,8.1-8.1C51.2,57.9,54.8,61.5,54.8,66z"
		/>
	<path className="st0" d="M105.5,66c0,4.5,3.6,8.1,8.1,8.1c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1C109.1,57.9,105.5,61.5,105.5,66
		z"/>
	<g>
		<path className="st0" d="M113.6,69.7c-2,0-3.7-1.7-3.7-3.7V38.6c0-16.4-13.3-29.7-29.7-29.7c-16.4,0-29.7,13.3-29.7,29.7V66
			c0,2-1.7,3.7-3.7,3.7c-2,0-3.7-1.7-3.7-3.7V38.6c0-20.5,16.6-37.1,37.1-37.1c20.5,0,37.1,16.6,37.1,37.1V66
			C117.3,68,115.6,69.7,113.6,69.7z"/>
	</g>
	<rect x="59.7" y="39" className="st0" width="50.2" height="7.4"/>
	<path className="st0" d="M158.8,167.3L147.6,51.5C147,44.3,141,39,133.9,39h-7.3v7.4h7.3c3.3,0,6.1,2.5,6.4,5.8L151.5,168
		c0.1,1.3-0.3,2.6-1.2,3.6c-0.9,1-2.1,1.5-3.5,1.5H13.6c-1.3,0-2.6-0.5-3.5-1.5c-0.9-1-1.3-2.3-1.2-3.6L20.1,52.2
		c0.3-3.3,3.1-5.8,6.4-5.8h16.6V39H26.5c-7.2,0-13.1,5.4-13.8,12.5L1.6,167.3c-0.3,3.4,0.8,6.8,3.1,9.3c2.3,2.5,5.5,4,8.9,4h133.2
		c3.4,0,6.7-1.4,8.9-4C158,174,159.1,170.7,158.8,167.3z"/>
</g>
</svg></span> : ""}
                                {(menu.object_slug == 'sign-up') ? <span className='nav-icon sign-up'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 200 200" enableBackground="new 0 0 200 200">
<g id="_x32_">
	<path fill="none" stroke="#58595B" strokeWidth="9" strokeLinecap="square" strokeMiterlimit="10" d="M125.2,62.6
		c0,0-23.9-18.6-46.9,0.6c-8,6.7-11.9,15.6-15.4,26.1c-6.3,19.1-8.9,60.2,19.2,60.2c12.1,0,28.4-6.6,38.4-32.9L125.2,62.6z"/>
	<path fill="none" stroke="#58595B" strokeWidth="9" strokeLinecap="square" strokeMiterlimit="10" d="M120.7,120.8
		c0.6,10.3,4.6,34.8,30,26.2c37.5-12.8,42.8-114.4-15.4-134.9C79.3-7.7,12.8,24.2,12.8,107.7c0,83.5,71.4,97.7,112.4,78.9"/>
</g>
</svg></span> : ""}
{(menu.object_slug == 'sales-offers') ? <span className="nav-icon sales-offers">
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.3 167.85"><path className="cls-1" d="M81.86,163.05a79.22,79.22,0,1,0-79-79.22A79.22,79.22,0,0,0,81.86,163.05Zm0-152.23A73,73,0,1,1,9,83.83,73,73,0,0,1,81.86,10.82Z"/><path className="cls-2" d="M82,108.57c-4.68,0-6.79-2.29-6.88-7.45l0-3.05H54.39l0,3.13c.12,13.59,6.77,23,18.37,26.09v9.29H90.7v-9.19c11.39-3.11,18.6-12.48,18.6-24.5,0-16.17-11.89-23.14-21.46-28.73-6-3.54-11.25-6.6-11.25-10.76,0-3.66,2.86-4.42,5.27-4.42,2.71,0,5.51.76,5.62,6.42l.06,3h20.65l0-3.14C108,52.63,101.57,43.5,90.7,40.4V31.08H72.78v9.36C62.38,43.55,56,52,56,63.05c0,15.31,11.49,22.34,20.72,28C83,94.88,88.4,98.18,88.4,102.77,88.4,106.62,86.24,108.57,82,108.57ZM80,85.75c-8.73-5.34-17.76-10.87-17.76-22.7,0-8.9,5.34-15.31,14.28-17.15L79,45.39v-8.1h5.5v8.14l2.53.48c8.57,1.61,13.72,7.36,14.74,16.33H93.4c-1.13-6-5.28-9.48-11.54-9.48C75,52.76,70.37,57,70.37,63.4c0,7.72,7,11.8,14.33,16.11,9,5.3,18.39,10.77,18.39,23.38,0,9.9-6.15,17.17-16,19l-2.55.46v8.05H79V122.2l-2.55-.46c-9.14-1.66-14.62-7.81-15.64-17.46h8.36c1.15,6.64,5.77,10.5,12.81,10.5,7.68,0,12.64-4.71,12.64-12C94.61,94.7,87.5,90.36,80,85.75Z"/></svg>
</span> : ""}
{(menu.object_slug == 'leasing') ? <span className="nav-icon leasing">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.34 162.64"><path className="cls-1" d="M118,160.89a3.16,3.16,0,0,1-1.3.28L6,161.1a3.14,3.14,0,0,1-3.16-3.16L2.87,5.39A3.16,3.16,0,0,1,6,2.23l110.78.06A3.16,3.16,0,0,1,120,5.43l.07,12.2-6.33,0,0-9L9.2,8.56,9.12,154.78l104.47.06L114,83.89l6.33,0L119.89,158A3.16,3.16,0,0,1,118,160.89Z"/><rect className="cls-1" x="26.01" y="32.22" width="71.71" height="6.33"/><rect className="cls-1" x="50.87" y="44.21" width="6.33" height="56.1" transform="matrix(0, -1, 1, 0, -18.48, 125.96)"/><rect className="cls-1" x="46.32" y="66.91" width="6.33" height="47.02" transform="translate(-41.21 139.4) rotate(-89.68)"/><rect className="cls-1" x="25.97" y="105.28" width="38.51" height="6.33" transform="translate(-0.12 0.05) rotate(-0.06)"/><rect className="cls-1" x="25.96" y="124.38" width="40.38" height="6.33"/><path className="cls-1" d="M82.5,124.16c-2.8,1.27-7.9,3.13-10.58,1.43-4.78-3.06-4.6-17.35-.78-23.73C74.66,96,118.36,20,118.8,19.25a3.16,3.16,0,0,1,4.32-1.17l17,9.74a3.17,3.17,0,0,1,1.17,4.32C139.53,35.24,97.83,108,93.62,115,90.67,119.93,85.39,122.86,82.5,124.16Zm-7.17-4.28a19,19,0,0,0,4.57-1.49c3.76-1.7,6.78-4.12,8.29-6.63,3.72-6.23,38.21-66.36,46.05-80l-11.52-6.6c-8,13.94-42.94,74.61-46.14,80C74.08,109.27,74.36,117.2,75.33,119.88Z"/><path className="cls-1" d="M135.37,30.28a3.17,3.17,0,0,1-4.06-4.45l4.56-8.06-1-1-5,8.3a3.16,3.16,0,1,1-5.42-3.26L131.64,9.9a3.16,3.16,0,0,1,5-.54l5.42,5.77a3.16,3.16,0,0,1,.45,3.72L136.82,29A3.2,3.2,0,0,1,135.37,30.28Z"/><path className="cls-1" d="M124.6,78.32a3.43,3.43,0,0,1-1,.27l-4.37.41a3.16,3.16,0,1,1-.6-6.3l2.74-.26,18.51-32.28-4-8.32a3.15,3.15,0,0,1,1.49-4.22l.06,0a3.16,3.16,0,0,1,4.16,1.52l4.69,9.82a3.18,3.18,0,0,1-.12,2.94L126,77A3.2,3.2,0,0,1,124.6,78.32Z"/><path className="cls-1" d="M106.45,87.88a3.16,3.16,0,0,1-2.88-.13L88.49,79.1a3.16,3.16,0,0,1,3.15-5.49l15.08,8.65a3.16,3.16,0,0,1-.27,5.62Z"/><path className="cls-1" d="M72.73,129.4a3.13,3.13,0,0,1-3-.18,3.17,3.17,0,0,1-1-4.35l2.19-3.6a3.17,3.17,0,0,1,5.41,3.3l-2.2,3.6A3.18,3.18,0,0,1,72.73,129.4Z"/></svg>
</span> : ""}
{(menu.object_slug == 'contact-us') ? <span className="nav-icon contact-us"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 189.08 141.65"><g data-name="Layer 2"><g data-name="Layer 1"><path class="cls-1" d="M165.67,1.5H23.41A21.94,21.94,0,0,0,1.5,23.41v94.83a21.94,21.94,0,0,0,21.91,21.91H165.67a21.94,21.94,0,0,0,21.91-21.91V23.41A21.94,21.94,0,0,0,165.67,1.5ZM136.22,70.83l39.56-39.57V110.4ZM23.41,13.3H165.67a10.14,10.14,0,0,1,9.22,6L173,17.38,109.24,81.12a20.8,20.8,0,0,1-29.4,0L15.69,17A10,10,0,0,1,23.41,13.3ZM52.87,70.83,13.3,110.4V31.26Zm112.8,57.53H23.41a10,10,0,0,1-7.72-3.67L61.21,79.17,71.5,89.46a32.64,32.64,0,0,0,46.08,0l10.29-10.29,45.52,45.52A10,10,0,0,1,165.67,128.36Z"/><polygon class="cls-2" points="175.68 16.73 172.26 20.21 180.4 27.54 183.82 24.06 175.68 16.73"/></g></g></svg></span> : ""}
                                {ReactHtmlParser(menu.title)}</Link>
                           
                        }                     
                 </NavItem>
            )
        })

    }
})