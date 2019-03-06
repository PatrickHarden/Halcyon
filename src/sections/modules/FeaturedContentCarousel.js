import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Slider from "react-slick";
import helpers from '../../helpers.js'
import '../../css/modules/featuredContentCarousel.css'


var slides = [];

export default withSiteData(class FeaturedContentCarousel extends React.Component {

    constructor(props) {
        super(props);
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
                                {(slide.button) ? <Link className="halcyon-button" to={helpers.convertLink(slide.button.url, this.props.title.toLowerCase())}>{(slide.button.title) ? <div>{ReactHtmlParser(slide.button.title)}</div>: <div>{helpers.getTitleFromUrl(slide.button.url, this.props.title.toLowerCase())}</div>}</Link> : ""} 
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