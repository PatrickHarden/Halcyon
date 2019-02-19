import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Slider from "react-slick";

import '../../css/modules/featuredContentCarousel.css'


var slides = [];

export default withSiteData(class FeaturedContentCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    convertLink(url){
        if (url.includes(this.props.title.toLowerCase())){
            var words = url.split('/');
            if (words[4] == ""){
                return words[3]
            } else {
                if (words[3] == "events") {
                return "/events/" + words[4]
                } else if (words[3] == "sales"){
                return "/sales/" + words[4]
                }  else if (words[3] == "stores"){
                return "/stores/" + words[4]
                } else if (words[3] == "blog"){
                return "/blogs/" + words[4]
                }
            }
        } else {
            return url;
        }
    }
    
    getTitleFromUrl(url){
        var words = url.split('/');
        if (url.includes(this.props.title.toLowerCase())){
            if (words[4] == ""){
                return words[3].replace(/-/g, ' ')
            } else {
                return words[4].replace(/-/g, ' ')
            }
        } else {
            return url.replace(/(^\w+:|^)\/\//, '')
        }
    }

    componentWillMount(){
        const section = this.props.section

        slides = section.slides.map((slide, index) => {
            return (<div data-index={index} key={index}>
                <div className='slide' key={index}>
                    <div className='left'>
                        {(slide.image.url) ? <img src={slide.image.url} alt={slide.image.alt} /> : ""}
                    </div>
                    <div className='right'>
                        <div className='inner-wrapper'>
                            <div className='content-wrap'>
                                {(slide.heading) ? <h4>{ReactHtmlParser(slide.heading)}</h4> : ""}
                                {(slide.blurb) ? <p>{ReactHtmlParser(slide.blurb)}</p> : ""}
                                {(slide.button) ? <Link className="halcyon-button" to={this.convertLink(slide.button.url)}>{(slide.button.title) ? <div>{ReactHtmlParser(slide.button.title)}</div>: <div>{this.getTitleFromUrl(slide.button.url)}</div>}</Link> : ""} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        })
    }

    render() {
        var settings = {
            infinite: true,
            speed: 500,
            draggable: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    dots: false,
                    arrows: true
                  }
                },       
              ]
        };

        return (   
            <div className='featuredContentCarousel'>
                {this.props.section.heading &&
                    <div className='heading-container'>
                        <Container>
                            <h2>{this.props.section.heading}</h2>
                        </Container>
                    </div>
                    }     
                <Container className='carousel'>
                    <Slider {...settings}>
                        {slides}
                    </Slider>
                </Container>
            </div>
        );
    }
})