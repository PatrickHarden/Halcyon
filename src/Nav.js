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
import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'


var isContrast = false;

 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  changeContrast(){
    if (!isContrast) {
        document.getElementById("footerCopyright").style.background = "#000"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#fff"
        document.getElementsByTagName("footer")[0].style.borderTop = "1px inset #000"
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "grayscale(100%)"
        isContrast = true;
    } else {
        document.getElementById("footerCopyright").style.background = "#4E5859"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2"
        document.getElementsByTagName("footer")[0].style.borderTop = "none"
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none"
        isContrast = false;
    }
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 767) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  searchToggle() {
    var x = document.getElementById("searchComponent");
    if (x.style.display === "none" || x.style.display == '') {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  render() {
    const logo = this.props.centerInfo.companyLogo

    return (
      <div className="navWrapper">
        <Navbar color="white" dark fixed="top" expand="lg">
            <Container>
                <div className="navRow">
                    <div className='nav-inner'>
                        <div className='left visible-xs'>
                          <div className='search-toggle' onClick={this.searchToggle}><FontAwesomeIcon icon={faSearch}/></div>
                          <img className='eyeball' src={AccessibilityIcon} onClick={this.changeContrast} />
                        </div>
                        <Link to='/'><div className='nav-logo visible-xs'><img src={navLogo} alt='halcyon logo'/></div></Link>
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
