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
import { BrowserRouter, Route } from 'react-router-dom'
import TagManager from 'react-gtm-module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
  

  // If we want to add a redirect to the searchResults page
  // keyPress(e){
  //   if(e.keyCode == 13){
  //      console.log('value', e.target.value);
  //      window.location.href = window.location + '/shopping'
  //   }
  // }

  render() {

  //   const tagManagerArgs = {
  //     gtmId: this.props.centerInfo.acf.google_tag_manager_ID,
  //     dataLayer: {
  //       event: 'VirtualPageview',
  //           virtualPageURL: window.location.href,
  //           virtualPageTitle: document.title,
  //        },
  //     dataLayerName: 'PageDataLayer',
  // }

    if (typeof document !== 'undefined') {
      return (
        <div id="searchComponent">
        <Container>
        <div>
            <input className='search-bar' placeholder="Search..." value={this.state.term} onKeyDown={this.keyPress} onChange = {event => this.setState({term : event.target.value})} />
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
            <div id="theResults">
            { (this.state.term.length > 3) ?
                <div>
                {this.hideContent()}
                <PageSearch searchResult={this.state.term} />
                <EventSearch searchResult={this.state.term} />
                <StoreSearch searchResult={this.state.term} />
                </div> : <div>{this.showContent()} </div>
            }
            </div>
            </Container>
            {/* <div className='hidden'>{(tagManagerArgs) ? setTimeout(TagManager.initialize(tagManagerArgs), 1) : ""}</div> */}
        </div>
      )
    } else {
        return null
    }
  }
})
