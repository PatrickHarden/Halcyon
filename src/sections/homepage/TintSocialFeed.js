// Packages
import React, { Component } from 'react';
import Script from 'react-load-script';

export default class TintSocialFeed extends Component{
    constructor(props){
        super(props);

        this.state = {
            scriptLoaded: false,
            counter: 5
        }
    }

    componentWillMount(){
        this.setState({ scriptLoaded: false, counter: this.state.counter++ })
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    render(){
        return(
            <div className="tint-social-feed" id="frameTarget">
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