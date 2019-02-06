import React from "react";
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';

var storeArray = [];

export default class TenantSlider extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const stores = this.props.stores;
        storeArray = stores.map(store => {
            if (store.acf.featured_image != null && store.acf.featured_image.length > 0){
                return <div><img key={store.acf.featured_image} src={store.acf.featured_image} /><h4 key={store.slug}>{ReactHtmlParser(store.title.rendered)}</h4><div>{ReactHtmlParser(store.acf.store_copy)}</div></div>
            } else {
                return (null)
            }
        })
    }

    render() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };


    return (
        <div id="tenantSlider">
            <Slider {...settings}>
                {storeArray}
            </Slider>
        </div>
    );
  }
}