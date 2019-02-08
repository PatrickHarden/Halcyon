import React from "react";
import Slider from "react-slick";

var heroArray = [];

export default class HeroSlider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let home = this.props.home[0];
    console.log(home);
    heroArray = home.acf.hero_slider.map(hero => {
      if (hero.desktop_image != null && hero.desktop_image > 0 || hero.desktop_image != false){
          return <div><img key={hero.desktop_image.link} src={hero.desktop_image.link} /><h1>{hero.heading}</h1></div>
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
      <Slider className='hero-slider' {...settings}>
        {heroArray}
      </Slider>
    );
  }
}