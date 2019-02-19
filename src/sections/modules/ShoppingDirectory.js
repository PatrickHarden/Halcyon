import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default withSiteData(class ShoppingDirectory extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
    stores = this.props.stores

    return (   
        <Container className='shoppingDIrectory'>
            Shopping Directory
        </Container>
    );
  }
})