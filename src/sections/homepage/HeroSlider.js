import React from "react";
import Slider from "react-slick";

var heroArray = [];

export default class HeroSlider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let home = this.props.home[0];

    heroArray = home.acf.hero_slider.map((hero, index) => {
      if (hero.link){
          return <div className='hero-slide' key={index}>
                    <a href={hero.link.url} target={hero.link.target}>
                      <img className='visible-xs' key={hero.mobile_image.link} src={hero.mobile_image.link} />
                      <img className='hidden-xs' key={hero.desktop_image.link} src={hero.desktop_image.link} />
                      <h2 className='hero-heading'>{hero.heading}</h2>
                    </a>
                  </div>
      } else if(!hero.link) {
          return  <div className='hero-slide' key={index}>
                    <img className='visible-xs' key={hero.mobile_image.link} src={hero.mobile_image.link} />
                    <img className='hidden-xs' key={hero.desktop_image.link} src={hero.desktop_image.link} />
                    <h2 className='hero-heading'>{hero.heading}</h2>
                   </div>
      } else {
        return (null)
      }
    })
  }

  componentDidMount(){
    var element = document.getElementById("fadeHeroIn");
    element.style.visibility = 'visible'
    // document.getElementById('initialHeroImage').style.display = 'none';    
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div>
        {/* <div id="initialHeroImage">
          <img src={this.props.home[0].acf.hero_slider[0].desktop_image.url} />
        </div> */}
        <div className='hero-slider-wrapper' id="fadeHeroIn">
          <Slider className='hero-slider' {...settings}>
            {heroArray}
          </Slider>
        </div>
      </div>
    );
  }
}