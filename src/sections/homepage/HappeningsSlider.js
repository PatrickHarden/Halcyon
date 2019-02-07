import React from "react";
import Link from 'react-static';
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
import Button from 'reactstrap';

//  <HappeningsSlider events={this.props.events} />

var eventArray = [];

export default class HappeningsSlider extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const events = this.props.events;
        eventArray = events.map(store => {
            if (store.acf.featured_image != null && store.acf.featured_image.length > 0 || store.acf.featured_image != false){
                return <div><img key={store.acf.featured_image} src={store.acf.featured_image} /></div>
            } else {
                return (null)
            }
        })
    }

    render() {
        var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
        };

    return (
        <div id="happeningsSlider">
            <Slider {...settings}>
                {eventArray}
            </Slider>
        </div>
    );
  }
}