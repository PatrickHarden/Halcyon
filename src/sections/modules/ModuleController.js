import React from "react"
import { Container, Row, Col } from 'reactstrap'
import ReactHtmlParser from 'react-html-parser'

import ImageCarousel from './ImageCarousel.js'
import GlobalImageGrid from './GlobalImageGrid.js'
import FeaturedEvents from './FeaturedEvents.js'
import ContentArea from './ContentArea.js'
import FeaturedStores from './FeaturedStores.js'
import ContentWithFeaturedImage from './ContentWithFeaturedImage.js'
import ContentWithFeaturedSale from './ContentWithFeaturedSale.js'
import Forms from './Forms.js'
import FeaturedContentCarousel from './FeaturedContentCarousel.js'
import DiningDirectory from './DiningDirectory.js'
import ShoppingDirectory from './ShoppingDirectory.js'
import ContentWithFeaturedVideo from './ContentWithFeaturedVideo.js'
import ContentWithFeaturedEvent from './ContentWithFeaturedEvent.js'
import SalesDirectory from './SalesDirectory.js'

{/* <ModuleController page={page} /> or  <ModuleController page={event} /> or  <ModuleController page={store} /> */ }

export default class ModuleController extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.page

        return (
            <div>
                {(page.acf.layout) ?
                    <div>
                        {page.acf.layout.map((section, index) => {
                            if (section.acf_fc_layout == 'content_area') {
                                return <Container key={index}><ContentArea section={section} /></Container>
                            } else if (section.acf_fc_layout == 'image_carousel') {
                                return <div key={index}><ImageCarousel section={section} /></div>
                            } else if (section.acf_fc_layout == 'image_grid') {
                                return <div key={index}><GlobalImageGrid section={section} /></div>
                            } else if (section.acf_fc_layout == 'featured_events') {
                                return <div key={index}><FeaturedEvents section={section} /></div>
                            } else if (section.acf_fc_layout == 'featured_stores') {
                                return <div key={index}><FeaturedStores pageData={page} section={section} /></div>
                            } else if (section.acf_fc_layout == 'content_with_featured_image') {
                                return <div key={index}><ContentWithFeaturedImage section={section} /></div>
                            } else if (section.acf_fc_layout == 'form') {
                                return <div key={index}><Forms section={section} /></div>
                            } else if (section.acf_fc_layout == 'featured_content_carousel') {
                                return <div key={index}><FeaturedContentCarousel section={section} /></div>
                            } else if (section.acf_fc_layout == 'dining_directory') {
                                return <div key={index}><DiningDirectory section={section} /></div>
                            } else if (section.acf_fc_layout == 'shopping_directory') {
                                return <div key={index}><ShoppingDirectory section={section} /></div>
                            } else if (section.acf_fc_layout == 'video') {
                                return <div key={index}><ContentWithFeaturedVideo section={section} /></div>
                            } else if (section.acf_fc_layout == 'content_with_featured_sale'){
                                return <div key={index}><ContentWithFeaturedSale section={section} /></div>
                            }  else if (section.acf_fc_layout == 'content_with_featured_event'){
                                return <div key={index}><ContentWithFeaturedEvent section={section} /></div>
                            }   else if (section.acf_fc_layout == 'sales_directory'){
                                return <div key={index}><SalesDirectory section={section} /></div>
                            }
                        })}
                    </div> :
                    <Container>
                        <Row>
                            <Col xs="12">
                                {console.log(page)}
                                {(page.acf.additional_content) ? <div></div> : <div>
                                </div>
                                }
                            </Col>
                        </Row>
                    </Container>}
            </div>
        )
    }


}