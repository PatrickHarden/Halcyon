import React from "react";
import Slider from "react-slick";
import { Container } from 'reactstrap';

//  <ImageCarousel section={section} />

var imageArray = []

export default class ImageCarousel extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        imageArray = this.props.section.carousel.map((image, index) => {
              return <div data-index={index} key={index}><img src={image.image.url} alt={image.image.alt}/></div> 
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