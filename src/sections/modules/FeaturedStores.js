import React from "react";
import { Link, withSiteData} from 'react-static';
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
import Button from 'reactstrap';
import { 
    Container, Row, Col
  } from 'reactstrap';
import '../../css/components/tenantSlider.css';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';
import $ from 'jquery';

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
        setTimeout(getTitleArray, 200);
    })
    $('#tenantSlider .slick-dots > li').click(function(){
        console.log('dot clicked');
        setTimeout(getTitleArray, 200);
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
var excerpt;
var regex = /(<([^>]+)>)/ig;
var selectedStores = [];

export default withSiteData(class FeaturesStores extends React.Component {

    constructor(props) {
        super(props);
    }

    compressText(store){
        excerpt = store.replace(regex, "").substr(0, 200)
        excerpt = excerpt.substr(0, excerpt.lastIndexOf(" "))
        return excerpt + "...";
    }

    componentWillMount(){

        const stores = this.props.stores;
        // const selectedStores = this.props.selectedStores;
        if (this.props.pageData[0]){
            this.props.pageData[0].acf.layout.map(test=> {
                if (test.acf_fc_layout == 'featured_stores'){
                    test.stores.map(store => {
                        selectedStores.push(store.post_name)
                    })
                }
            })
        } else {
            this.props.pageData.acf.layout.map(test=> {
                if (test.acf_fc_layout == 'featured_stores'){
                    test.stores.map(store => {
                        selectedStores.push(store.post_name)
                    })
                }
            })
        }

        storeArray = stores.map(store => {
            for (var i = 0; i< selectedStores.length; i++){
                if (store.slug == selectedStores[i]){
                    if (store.acf.featured_image != null && store.acf.featured_image.length > 0){
                        return (<div className='store'>
                                    <div className='image-wrapper'>
                                        <img key={store.acf.featured_image} src={store.acf.featured_image} />
                                    </div>
                                    <div className='content-wrapper'>
                                        <div className='inner-wrapper'>
                                            <h4 key={store.slug}>{ReactHtmlParser(store.title.rendered)}</h4>
                                            <div className="tenantText">
                                            {ReactHtmlParser(this.compressText(store.acf.store_copy))}
                                            {/* {ReactHtmlParser(store.acf.store_copy)} */}
                                            </div>
                                            <a className='halcyon-button' href={`/shopping/${store.slug}/`}>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                        )
                    } else {
                        return (null)
                    }
                }
            }
        })
    }


    componentDidMount(){
        getTitleArray();
        setClickEvent();
    }

    render() {
        var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={this.onClick} />,
        prevArrow: <SamplePrevArrow onClick={this.onClick} />,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                // dots: true,
                nextArrow: "",
                prevArrow: ""
              }
            },
            
          ]
        };

    return (
        <div className='tenant-spotlight'>
            <div className='heading-container'>
                <h2>{this.props.section.heading}</h2>
            </div>
            <Container>
            <div id="tenantSlider">
                <Slider {...settings}>
                    {storeArray}
                </Slider>
            </div>
            </Container>
        </div>
        
    );
  }
})