import React from "react";
import { Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import '../../css/modules/contentWithFeaturedImage.css';
import Slider from "react-slick";


var slides = [];

export default class FeaturedContentCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    convertLink(url){
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
    }
    
    getTitleFromUrl(url){
        var words = url.split('/');
        if (words[4] == ""){
            return words[3].replace(/-/g, ' ')
        } else {
            return words[4].replace(/-/g, ' ')
        }
    }

    componentWillMount(){
        const section = this.props.section

        slides = section.slides.map((slide, index) => {
            return (<div data-index={index} key={index}>
                <Row key={index}>
                    <Col sm={6}>
                        {(slide.image.url) ? <img src={slide.image.url} alt={slide.image.alt} /> : ""}
                    </Col>
                    <Col sm={6}>
                        {(slide.heading) ? <h4>{ReactHtmlParser(slide.heading)}</h4> : ""}
                        {(slide.blurb) ? <p>{ReactHtmlParser(slide.blurb)}</p> : ""}
                        {(slide.button) ? <Link className="halcyon-button" to={this.convertLink(slide.button.url)}>{(slide.button.title) ? <div>{ReactHtmlParser(slide.button.title)}</div>: <div>{this.getTitleFromUrl(slide.button.url)}</div>}</Link> : ""} 
                    </Col>
                </Row>
            </div>)
        })
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            draggable: false,
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
            <Container className='featuredContentCarousel'>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </Container>
        );
    }
}