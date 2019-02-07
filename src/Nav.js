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
  import navLogo from './images/HalcyonNavLogo.png';

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
    if (width <= 993) {
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
                <Row className="navRow">
                    <Col xs="12">
                        <div className='nav-logo'><img src={navLogo} alt='halcyon logo'/></div>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <MenuList toggle={this.toggle} />
                            <NavItem href="/"><img className='hidden-xs' src={navLogo} /></NavItem> 
                            </Nav>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
      </div>
    );
  }
})
