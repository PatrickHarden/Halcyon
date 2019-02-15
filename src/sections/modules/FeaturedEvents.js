import React from "react";
import {Link, withSiteData} from 'react-static';
import ReactHtmlParser from 'react-html-parser';
import {Row, Col} from 'reactstrap';
import rightArrow from '../../images/rightArrow.png';

//  <SimpleSlider events={this.props.events} />

var eventArray = [];
var excerpt;
var regex = /(<([^>]+)>)/ig;
var featuredStores = [];

export default withSiteData(class FeaturedEvents extends React.Component {

    constructor(props) {
        super(props);
    }

    compressText(store){
        if (store.length > 80){
          excerpt = store.replace(regex, "").substr(0, 80)
          excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
          return excerpt + "...";
        } else {
          return store;
        }
    }

    componentWillMount(){
        if (this.props.section.select_events){
            this.props.section.events.map(theEvent => {
                eventArray.push(theEvent.event.post_name)
            })
            
            featuredStores = this.props.events.map(store => {
                for (var i = 0; i < eventArray.length; i++){
                    if (store.slug == eventArray[i]){
                        return <div className="featuredEvent">
                            <Link to={store.slug}>
                                {(store.acf.featured_image)?
                                <img src={store.acf.featured_image} className="featuredEventImage" /> :
                                <img src="https://halcyon.dev.v3.imaginuitycenters.com/wp-content/uploads/sites/31/2019/01/572x310.png" className="featuredEventImage" />}                              
                                <div className="eventOverlay">
                                <h4>{store.title.rendered}</h4>
                                <div>{ReactHtmlParser(this.compressText(store.acf.post_copy))}</div>
                                </div>
                            </Link>
                        </div>
                    }
                }
            })
        } else {
            featuredStores = this.props.events.map(store => {
                if (store.acf.featured_image){
                return <div className="featuredEvent">
                    <Link to={store.slug}>
                        <img src={store.acf.featured_image} className="featuredEventImage" />
                        <div className="eventOverlay">
                        <h4>{store.title.rendered}</h4>
                        <div>{ReactHtmlParser(this.compressText(store.acf.post_copy))}</div>
                        </div>
                    </Link>
                </div>
                }
            })
        }

        // Remove all nulls/undefined from array
        featuredStores = featuredStores.filter(function (el) {
            return el != null;
        });
        // Pull only 3 featured events per design
        featuredStores = featuredStores.slice(0,3)
    }

    render() {

        return (
        <div className='events-container'>
            {console.log(this.props.section)}
            {this.props.section.heading &&
            <div className='heading-container'>
                <h2>{this.props.section.heading}</h2>
            </div>
            }
            <div>
            <Row>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[0]}
                </Col>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[1]}
                </Col>
                <Col sm={4} className='event-wrapper'>
                {featuredStores[2]}
                </Col>
            </Row>
            <Link to="/events" className="pull-right">View All<img className='arrow' src={rightArrow} alt='right-arrow'/></Link>
            </div>
        </div>
        );
  }
})