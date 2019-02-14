import React from "react";
<<<<<<< HEAD:src/sections/ImageCarousel.js
import Link, { Redirect } from 'react-static';
=======
>>>>>>> 36f1678001143c6339a5737f01678a11a3058ab2:src/sections/modules/ImageCarousel.js
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
<<<<<<< HEAD:src/sections/ImageCarousel.js
              return <div data-index={index} key={index}><img src={image.image.url} alt={image.image.alt}/></div>
=======
              return <div data-index={index} key={index}><img src={image.image.url} alt={image.image.alt}/></div> 
>>>>>>> 36f1678001143c6339a5737f01678a11a3058ab2:src/sections/modules/ImageCarousel.js
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
        var backgroundTexture = this.props.section.background_texture.url;
        var style = {
            backgroundImage: `url(${backgroundTexture})`,
            width: '100%'
        };

        console.log('texture',this.props.section.background_texture.url);

    return (
        <div className='imageCarousel'>
            <div className='heading-container'>
                <Container>
                     <h2>{this.props.section.heading}</h2>
                </Container>
            </div>
            <div className='slider-container' style={style}>
                <Slider className='pageCotentCarousel' {...settings}>
                    {imageArray}
                </Slider>
            </div>
        </div>
     
    );
  }
}