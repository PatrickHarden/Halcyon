import React from "react";
import Slider from "react-slick";


export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="https://i.imgur.com/D68KvFY.jpg" />
        </div>
        <div>
            <img src="https://placekitten.com/g/1200/521" />
        </div>
        <div>
            <img src="https://placekitten.com/g/1200/521" />
        </div>
      </Slider>
    );
  }
}