import React from 'react'
import { Link, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container, } from 'reactstrap';
import navLogo from './images/halcyon-nav-logo.png';
import navToggle from './images/nav-toggle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AccessibilityIcon from './images/eyeball-dark.png';
import { config } from '@fortawesome/fontawesome-svg-core'
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
        document.getElementById("eyeball").classList.add('active');

        isContrast = true;
    } else {
        document.getElementById("footerCopyright").style.background = "#4E5859"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2"
        document.getElementsByTagName("footer")[0].style.borderTop = "none"
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none"
        document.getElementById("eyeball").classList.remove('active');

        isContrast = false;
    }
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 1024) {
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

  // componentDidMount(){
  //   var element = document.getElementsByTagName("header")[0]
  //   .setTimeout(helpers.unfade(element), 200)
  // }

  render() {
    const logo = this.props.centerInfo.companyLogo

    return (
      <div className="navWrapper" id="unfade">
        <Navbar color="white" dark fixed="top" expand="lg">
            <Container>
                <div className="navRow">
                    <div className='nav-inner'>
                        <div className='left visible-xs'>
                          <div className='search-toggle' onClick={this.searchToggle}><FontAwesomeIcon icon={faSearch}/></div>
                           <div id='eyeball' className='eyeball' onClick={this.changeContrast}>
                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="eye-slash"><g><path d="m12.4 29.8l1.7-3.1q-1.9-1.5-3-3.6t-1.1-4.5q0-2.7 1.4-5-5.2 2.6-8.5 7.8 3.7 5.8 9.5 8.4z m8.7-16.9q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-1.9 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m8.1-4.3q0 0.2 0 0.2-2.4 4.2-7.1 12.6t-7 12.7l-1.1 2q-0.2 0.3-0.7 0.3-0.2 0-2.9-1.5-0.4-0.3-0.4-0.7 0-0.2 1-1.9-3.2-1.5-5.9-3.9t-4.7-5.4q-0.4-0.7-0.4-1.6t0.4-1.5q3.5-5.3 8.5-8.3t11.1-3q2 0 4 0.4l1.2-2.2q0.2-0.4 0.6-0.4 0.2 0 0.4 0.2t0.7 0.3 0.8 0.4 0.7 0.4 0.4 0.3q0.4 0.2 0.4 0.6z m0.8 10q0 3.1-1.8 5.6t-4.6 3.7l6.2-11.2q0.2 1 0.2 1.9z m10 2.8q0 0.8-0.4 1.6-0.9 1.4-2.5 3.2-3.3 3.8-7.7 6t-9.4 2.1l1.7-3q4.7-0.4 8.7-3t6.7-6.9q-2.5-4-6.3-6.5l1.5-2.5q2.1 1.4 4 3.4t3.3 4.1q0.4 0.7 0.4 1.5z"></path></g></svg>
                            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" className="eye"><g><path d="m37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3z m-16-8.5q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-2 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m18.9 8.5q0 0.8-0.4 1.6-3.2 5.1-8.4 8.2t-11.2 3.1-11.2-3.1-8.4-8.2q-0.4-0.8-0.4-1.6t0.4-1.5q3.2-5.1 8.4-8.2t11.2-3.1 11.1 3.1 8.5 8.2q0.4 0.8 0.4 1.5z"></path></g></svg>
                          </div>
                           {/* <img className='eyeball' src={AccessibilityIcon} alt="Accessibility Icon" onClick={this.changeContrast} /> */}
                        </div>
                        <Link to='/'><div className='nav-logo desktop'><img src={navLogo} alt='halcyon logo'/></div></Link>
                        <NavbarToggler className='visible-md' onClick={this.toggle}><span>MENU</span><img src={navToggle} alt="Navigation toggle" /></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <MenuList toggle={this.toggle} />
                            <NavItem className='mobile logo' href="/"><Link to='/' alt="Halcyon Home"><img src={navLogo} alt="Halcyon Logo" /></Link></NavItem> 
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
