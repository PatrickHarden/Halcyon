// Packages
import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import '../../css/components/imageGrid.css'

let moment = require('moment');
let momentRange = require('moment-range');
moment = momentRange.extendMoment(moment);
// let Entities = require('html-entities').AllHtmlEntities;

// imageGridData: {
//     image_group_1: 'http://placekitten.com/100/200',
//     image_group_2: 'http://placekitten.com/200/300',
//     image_group_3: 'http://placekitten.com/200/300',
//     image_group_4: 'http://placekitten.com/200/300',
//   }

// let entities = new Entities();
// <ImageGrid images={this.state.imageGridData} />

export default class ImageGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mergeCounter: 1,
            images: this.props.images,
            image_group_1: "http://placekitten.com/100/150",
            image_group_2: "http://placekitten.com/100/150",
            image_group_3: "http://placekitten.com/100/150",
            image_group_4: "http://placekitten.com/100/150",
        }
    }

    componentDidMount() {
        this.startSliderEffect();
    }

    startSliderEffect() {
        let component = this;
        //animate last image in each group, move to top of group
        $('.image-group').each(function () {
            let randomNumber = component.randomNumber();
            let group = $(this);
            component.sliderTimer(randomNumber, group); //set the interval for this group
        });
    }

    sliderTimer(randomNumber, group) {
        let component = this;
        let randomTimeout = component.randomNumber() * 1000;

        let sliderEffect = function () {
            let figure = group.find('figure').last(); //find current last figure to animate

            if (randomNumber % 2 === 0) {
                $(figure).animate({
                    left: "-100%",
                }, 500).promise().done(function () {
                    figure.prependTo(group.children().first());
                    figure.css('left', '0');
                });
            }
            else {
                $(figure).animate({
                    top: "-100%",
                }, 500).promise().done(function () {
                    figure.prependTo(group.children().first());
                    figure.css('top', '0');
                });
            }

        };
        setInterval(sliderEffect, randomTimeout);
    }

    randomNumber() {
        return 5 + Math.floor(Math.random() * 10)
    }

    mapImageArrays(imageArray) {
        // return imageArray.map((image, index) =>
        //     <figure key={index} style={{backgroundImage: 'url(' + image.image.url + ')'}}/>
        // );
        return
    }

    render() {
        return (
            <div className="image-grid-container">
                <div className="module image_grid">
                    <div className="row">
                        <div className="col-6">
                            <img src={this.state.images.image_group_1} />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                <img src={this.state.images.image_group_2} />
                                </div>
                                <div className="col-6">
                                <img src={this.state.images.image_group_3} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <img src={this.state.images.image_group_4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}