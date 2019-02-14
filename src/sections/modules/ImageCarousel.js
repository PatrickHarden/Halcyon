import React from "react";
import Link from 'react-static';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Button from 'reactstrap';

//  <ImageCarousel pageData={this.props.pages} />

var imageArray = []

export default class ImageCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        imageArray = this.props.section.carousel.map((image, index) => {
            console.log(image);
              return <div data-index={index} key={index}><img src={image.image.url} alt={image.image.alt}/></div>
        
          })
          console.log(imageArray);
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
        <div className='imageCarousel'>
            <div className='heading-container'>
                <Container>
                     <h2>{this.props.section.heading}</h2>
                </Container>
            </div>
            <Slider className='pageCotentCarousel' {...settings}>
                {imageArray}
            </Slider>
        </div>
        
    );
  }
}