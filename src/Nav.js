import React from 'react'
import { Link, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col } from 'reactstrap';
  import navLogo from './images/halcyon-nav-logo.png';
  import navToggle from './images/nav-toggle.png';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'
  import AccessibilityIcon from './images/eyeball-dark.png';

 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 767) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const logo = this.props.options.companyLogo

    return (
      <div className="navWrapper">
        <Navbar color="white" dark fixed="top" expand="lg">
            <Container>
                <div className="navRow">
                    <div className='nav-inner'>
                        <div className='left visible-xs'>
                          <div className='search-toggle'><FontAwesomeIcon icon={faSearch}/></div>
                          <img className='eyeball' src={AccessibilityIcon} />
                        </div>
                        <div className='nav-logo visible-xs'><img src={navLogo} alt='halcyon logo'/></div>
                        <NavbarToggler className='visible-xs' onClick={this.toggle}><span>MENU</span><img src={navToggle} /></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <MenuList toggle={this.toggle} />
                            <NavItem className='hidden-xs logo' href="/"><Link to='/'><img src={navLogo} /></Link></NavItem> 
                            </Nav>
                        </Collapse>
                    </div>
                </div>
            </Container>
        </Navbar>
      </div>
    );
  }
})
