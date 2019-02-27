import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';
import DarkFeather from '../../images/feather-dark.png';
import helpers from '../../helpers.js'

var targetStore;
var targetSale

export default withSiteData(class contentWithFeaturedSale extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        // console.log(this.props.section)
        // console.log(this.props.sales)
        targetStore = this.props.section.sales.map(sale => {
            return sale.post_name;
        })
        targetSale = this.props.sales.map(sale => {
            for (var i = 0; i < targetStore.length; i++){
                if (sale.slug == targetStore[i]) {
                    return sale
                } 
            }
        })
        targetSale = targetSale.filter(function (el) {
            return el != null;
          });
        // console.log(targetStore[0])
        // console.log('Sale:', targetSale)
    }

    render() {

        return ( 
            <Container className='contentWithFeaturedImage'>
                <Row className={(this.props.section.display_options == 'content-left-image-right') ? 'content-left' : 'content-right'}>
                    <Col sm={6} lg={7} className='image-column'>
                        <img src={targetSale[0].acf.featured_image} />
                    </Col>
                    <Col sm={6} lg={5} className='content-column'>
                        {targetSale[0].title.rendered &&
                            <div className='heading'><h2>{targetSale[0].title.rendered}</h2></div>
                        }
                        {targetSale[0].acf.post_copy &&
                            <div clasName='content'>{ReactHtmlParser(targetSale[0].acf.post_copy)}</div>
                        }
                        <Link class="halcyon-button" to={'/sales/' + targetSale[0].slug}>More info</Link>
                    </Col>
                </Row> 
            </Container>
        );
  }
})