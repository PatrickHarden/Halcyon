import React from 'react'
import Routes from 'react-static-routes'

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          term : '',
      };
    }

    render() {


        return (   
            <div>
                <Routes term={this.state.term} />
                {/* { (this.state.term != '') ? <div>{console.log(this.state.term)}</div> : "" } */}
            </div>
        )
    }
}
