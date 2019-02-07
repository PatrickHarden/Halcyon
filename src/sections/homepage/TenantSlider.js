import React from "react";
import Link from 'react-static';
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
import Button from 'reactstrap';
import '../../css/components/tenantSlider.css';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import $ from 'jquery';

//  <TenantSlider stores={this.props.stores} />

var storeArray = [];
var prevTitle;
var nextTitle;
var titleArray = [];
var indexArray = [];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      ><img src={rightArrow} />{getNextTitle()}</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    ><img src={leftArrow} />{getPrevTitle()}</div>
  );
}

function getNextTitle(){
    return <p id="nextTitleText">{titleArray[2]}</p>
}

function getPrevTitle(){
    return <p id="prevTitleText">{titleArray[0]}</p>
}

function getTitleArray(){
   titleArray =  $('#tenantSlider .slick-track > div h4').map(function() {
        return $(this).text();
    })
    updateArrows();
}

function setClickEvent(){
    $('#tenantSlider .slick-arrow').click(function(){
        console.log('arrow clicked');
        setTimeout(getTitleArray, 500);
    })
    $('#tenantSlider .slick-dots > li').click(function(){
        console.log('dot clicked');
        setTimeout(getTitleArray, 500);
    })
}

function updateArrows(){
    var target = $('#tenantSlider .slick-current').attr('data-index');
    var next = target;
    next++;
    next++;
    $('#nextTitleText').text(titleArray[next]);
    $('#prevTitleText').text(titleArray[target]);
}

export default class TenantSlider extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.handleClick.bind(this);
    }

    extractText(text){
        var tmp = document.createElement("DIV");
        tmp.innerHTML = text;
        return tmp.textContent || tmp.innerText || "";
    }

    componentWillMount(){
        const stores = this.props.stores;
        storeArray = stores.map(store => {
            if (store.acf.featured_image != null && store.acf.featured_image.length > 0){
                return (<div><img key={store.acf.featured_image} src={store.acf.featured_image} />
                            <h4 key={store.slug}>{ReactHtmlParser(store.title.rendered)}</h4>
                            <div id="tenantText">
                            {ReactHtmlParser(store.acf.store_copy)}
                            </div>
                            <a className='halcyon-button' href={`/shopping/${store.slug}/`}>Learn More</a>
                        </div>
                )
            } else {
                return (null)
            }
        })
    }

    handleClick(event) {
        console.log('test')
      }

    componentDidMount(){
        getTitleArray();
        setClickEvent();
    }

    render() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={this.onClick} />,
        prevArrow: <SamplePrevArrow onClick={this.onClick} />
        };

    return (
        <div id="tenantSlider">
            <Slider {...settings}>
                {storeArray}
            </Slider>
        </div>
    );
  }
}