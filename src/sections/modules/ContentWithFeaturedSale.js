import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';
import DarkFeather from '../../images/feather-dark.png';
import helpers from '../../helpers.js'

var targetStore;
var targetSale

const styles = {
    backgroundColor: '#EDECE2',
    padding: '40px'
}

export default withSiteData(class contentWithFeaturedSale extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        targetStore = this.props.section.sales.post_name

        targetSale = this.props.sales.map(sale => {
            if (sale.slug == targetStore) {
                return sale
            }
        })
        targetSale = targetSale.filter(function (el) {
            return el != null;
        });
        console.log('Sale:', targetSale)
    }


    render() {

        return (<div>
            {this.props.section.heading &&
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
            }
            <Container className='contentWithFeaturedImage'>
                <Row className={(this.props.section.display_options == 'content-left-image-right') ? 'content-left' : 'content-right'}>
                    <Col sm={6} lg={7} className='image-column'>
                        <img src={targetSale[0].acf.featured_image} />
                    </Col>
                    <Col sm={6} lg={5} className='content-column' style={styles}>
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
        </div>
        );
    }
})