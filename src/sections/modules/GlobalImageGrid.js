import React, {Component} from 'react';
import $ from 'jquery';

import '../../css/components/imageGrid.css'

// <ImageGrid images={this.state.imageGridData} />

export default class GlobalImageGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mergeCounter: 1,
            images: "",
            image_group_1: "",
            image_group_2: "",
            image_group_3: "",
            image_group_4: "",
        }
    }

    componentWillMount() {

        let component = this;
        let imageData = [];
        let section = this.props.section;
    
        section.image_group_1 ?
        imageData = {
            image_group_1: section.image_group_1,
            image_group_2: section.image_group_2,
            image_group_3: section.image_group_3,
            image_group_4: section.image_group_4
        } : null;
    
        component.setState({
          imageGridData: imageData,
        });

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
            let next = group.find('figure').first();

            if (randomNumber % 2 === 0) {
                next.show();
                $(figure).fadeOut(1500, function(){
                    figure.css('z-index',1).show();
                    next.css('z-index', 3);
                }).promise().done(function () {
                    figure.prependTo(group.children().first());
                });
            }
            else {
                next.show();
                $(figure).fadeOut(1500, function(){
                    figure.css('z-index',1).show();
                    next.css('z-index', 3);
                }).promise().done(function () {
                    figure.prependTo(group.children().first());
                });
            }

        };
        setInterval(sliderEffect, randomTimeout);
    }

    randomNumber() {
        return 5 + Math.floor(Math.random() * 10)
    }

    mapImageArrays(imageArray) {
        return imageArray.map((image, index) =>
            <figure key={index} style={{backgroundImage: 'url(' + image.image.url + ')'}}/>
        );
    }

    render() {
        return (
            <div className="image-grid-container">
                <div className="module image_grid">
                    <div className="row">
                        <div className="col-sm-6 image-group image-group-1">
                            <div>
                               {this.mapImageArrays(this.state.imageGridData.image_group_1)}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-xs-6 image-group image-group-2">
                                    <div>
                                    {this.mapImageArrays(this.state.imageGridData.image_group_2)}
                                    </div>
                                </div>
                                <div className="col-xs-6 image-group image-group-3">
                                    <div>
                                    {this.mapImageArrays(this.state.imageGridData.image_group_3)}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 image-group image-group-4">
                                    <div>
                                    {this.mapImageArrays(this.state.imageGridData.image_group_4)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}