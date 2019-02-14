import React from "react";
import Slider from "react-slick";
import { Container } from 'reactstrap';
import '../../css/modules/imageCarousel.css';
import sliderArrow from '../../images/gallery-slider-arrow.png';

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
        slidesToScroll: 1,
        nextArrow: <div><img src={sliderArrow} alt='arrow left' /></div>,
        prevArrow: <div><img src={sliderArrow} alt='arrow right' /></div>,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: "",
                prevArrow: ""
              }
            },
            
          ]
        };
        var backgroundTexture = this.props.section.background_texture;
        var style = {
            backgroundImage: `url(${backgroundTexture})`,
        };

    return (
        <div className='imageCarousel'>
            <div className='heading-container'>
                <Container>
                     <h2>{this.props.section.heading}</h2>
                </Container>
            </div>
            <div className='slider-container' style={style}>
                <Container>
                    <Slider className='pageCotentCarousel' {...settings}>
                        {imageArray}
                    </Slider>
                </Container>
            </div>
        </div>
     
    );
  }
}