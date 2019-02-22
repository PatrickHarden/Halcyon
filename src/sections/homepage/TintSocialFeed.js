// Packages
import React, { PropTypes, Component } from 'react';
import Script from 'react-load-script';
let moment = require('moment');
let momentRange = require('moment-range');
moment = momentRange.extendMoment(moment);

export default class TintSocialFeed extends Component{
    constructor(props){
        super(props);

        this.state = {
            scriptLoaded: false,
        }
    }

    componentWillMount(){
        console.log(this.props.optionsData);
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    render(){
        return(
            <div className="tint-social-feed">
                <div
                    className="tintup"
                    data-id={this.props.optionsData.acf.data_id}
                    data-columns=""
                    data-mobilescroll="true"
                    data-infinitescroll="true"
                    data-personalization-id={this.props.optionsData.acf.personalization_id}
                    style={{'height':'350px','width':'100%'}}
                ></div>
                <Script
                    url={this.props.optionsData.acf.script_url}
                    onCreate={this.handleScriptCreate.bind(this)}
                    onLoad={this.handleScriptLoad.bind(this)}
                />
            </div>
        )
    }
}