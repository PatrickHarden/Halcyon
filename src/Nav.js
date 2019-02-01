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
                    <Col xs="2">
                        <NavbarBrand href="/"><img src="https://i.imgur.com/BNwNrP9.png" /></NavbarBrand>                      
                    </Col>
                    <Col xs="10" className="text-right">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link" onClick={this.toggle}>Home</Link>
                            </NavItem>
                            <MenuList toggle={this.toggle} />
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
