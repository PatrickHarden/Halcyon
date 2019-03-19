import React from "react";
import {Link} from 'react-static'
import Slider from "react-slick";
import helpers from '../../helpers.js'
// import DiningHero from '../../images/dining-hero.png'

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
                    <Link to={helpers.convertLink(hero.link.url, this.props.title)} target={(hero.link.target) ? "_blank" : ""}>
                      <img className='visible-xs' key={hero.mobile_image.url} src={hero.mobile_image.url} alt={hero.mobile_image.alt + " mobile"} />
                      <img className='hidden-xs' key={hero.desktop_image.url} src={hero.desktop_image.url} alt={hero.desktop_image.alt} />
                      <h2 className='hero-heading'>{hero.heading}</h2>
                    </Link>
                  </div>
      } else if(!hero.link) {
          return  <div className='hero-slide' key={index}>
                    <img className='visible-xs' key={hero.mobile_image.url} src={hero.mobile_image.url} alt={hero.mobile_image.alt + " mobile"} />
                    <img className='hidden-xs' key={hero.desktop_image.url} src={hero.desktop_image.url} alt={hero.desktop_image.alt} />
                    <h2 className='hero-heading'>{hero.heading}</h2>
                   </div>
      } else {
        return (null)
      }
    })
  }

  componentDidMount(){
    var element = document.getElementById("fadeHeroIn");
    element.style.zIndex = '2'
    helpers.unfade(element); 
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div id="heroContainer">
        <div id="initialHeroImage">
          <img className='hidden-xs' src={this.props.home[0].acf.hero_slider[0].desktop_image.url} alt={this.props.home[0].acf.hero_slider[0].desktop_image.alt} />
          <img className="visible-xs" src={this.props.home[0].acf.hero_slider[0].mobile_image.url} alt={this.props.home[0].acf.hero_slider[0].mobile_image.alt + ' mobile'} />
        </div>
        <div className='hero-slider-wrapper' id="fadeHeroIn">
          <Slider className='hero-slider' {...settings}>
            {heroArray}
          </Slider>
        </div>
      </div>
    );
  }
}