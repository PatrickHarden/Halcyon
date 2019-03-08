var React = require('react');
// import {JSONLD, Generic} from 'react-structured-data';
let moment = require('moment');

<EventSchema
propertyOptions={this.state.optionsData}
image={this.state.pageData.acf.featured_image}
title={entities.decode(this.state.pageData.title.rendered)}
description={entities.decode(this.state.pageData.acf.post_copy)}
startDate={this.state.pageData.acf.start_date}
startTime={this.state.pageData.acf.start_time}
endDate={this.state.pageData.acf.end_date}
endTime={this.state.pageData.acf.end_time}
/>

var EventSchema = React.createClass({
    render: function () {
        return (
            <JSONLD>
                <Generic type="event" jsonldtype="Event" schema={{
                    name: this.props.title,
                    url: window.location.href,
                    description: stripHTML(this.props.description),
                    image: this.props.image,
                    startDate:this.getStartDate(),
                    endDate:this.getEndDate(),
                }}>
                    <Generic type="location" jsonldtype="Place">
                        <Generic type="address" jsonldtype="PostalAddress" schema={{
                            addressLocality: this.props.propertyOptions.city,
                            addressRegion: this.props.propertyOptions.state,
                            postalCode: this.props.propertyOptions.zip,
                            streetAddress: this.props.propertyOptions.address_1 + " " + this.props.propertyOptions.address_2
                        }}/>
                    </Generic>
                </Generic>
            </JSONLD>
        )
    },
    getStartDate(){
        var startDate = this.props.startDate;
        var startTime = this.props.startTime;
        if(startTime){
            return moment(startDate + " " + startTime, "YYYYMMDD h:mm a").toISOString();
        }
        return moment(startDate, "YYYYMMDD").toISOString();
    },
    getEndDate(){
        var endDate = this.props.endDate;
        var endTime = this.props.endTime;

        if(endTime){
            return moment(endDate + " " + endTime, "YYYYMMDD h:mm a").toISOString();
        }
        return moment(endDate, "YYYYMMDD").toISOString();
    }
});

function stripHTML(string) {
    var div = document.createElement("div");
    div.innerHTML = string;
    return div.innerText;
}

module.exports = EventSchema;