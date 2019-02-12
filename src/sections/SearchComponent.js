import React from 'react'
import { withSiteData, Link, withRouteData, Head } from 'react-static'
import ReactHtmlParser from 'react-html-parser';
import { 
  Container,
} from 'reactstrap';
import PageSearch from './PageSearch'
import EventSearch from './EventSearch'
import StoreSearch from './StoreSearch'
import '../css/components/searchComponent.css'

const fullWidth = {
  width: '100%'
}

var theContent;
var searchBar;

export default withSiteData(class SearchComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
    };
  }

  hideContent(){
    var width = document.body.clientWidth;
    if (width >= 768) {
    document.getElementsByClassName('content')[0].style.display = 'none';
    }
  }

  showContent(){
    var width = document.body.clientWidth;
    theContent = document.getElementsByClassName('content')[0]
    if (width >= 768){
        if (theContent == undefined || theContent == null){
            return
        } else {
            theContent.style.display = '';
        }
    }
  }

  render() {

    if (typeof document !== 'undefined') {
      return (
        <div id="searchComponent">
        <Container>
            <input className='search-bar' placeholder="Search..." value={this.state.term} onChange = {event => this.setState({term : event.target.value})} />
            <div id="theResults">
            { (this.state.term != '') ?
                <div>
                {this.hideContent()}
                <PageSearch searchResult={this.state.term} />
                <EventSearch searchResult={this.state.term} />
                <StoreSearch searchResult={this.state.term} />
                </div> : <div>{this.showContent()} </div>
            }
            </div>
            </Container>
        </div>
      )
    } else {
        return null
    }
  }
})
