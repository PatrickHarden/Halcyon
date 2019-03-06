import React from 'react'
import { withSiteData, Link } from 'react-static'
import {
  Container,
} from 'reactstrap';

import '../css/components/searchComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser';
import helpers from '../helpers.js'

var theContent;
var restaurants;
var retailers;

export default withSiteData(class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.clearSearch = this.clearSearch.bind(this);
  }

  hideContent() {
    var width = document.body.clientWidth;
    if (width >= 768) {
      document.getElementsByClassName('content')[0].style.display = 'none';
    }
  }

  showContent() {
    var width = document.body.clientWidth;
    theContent = document.getElementsByClassName('content')[0]
    if (width >= 768) {
      if (theContent == undefined || theContent == null) {
        return
      } else {
        theContent.style.display = '';
      }
    }
  }

  clearSearch() {
    this.setState({
      term: ''
    })
  }

  componentWillMount() {
    retailers = this.props.stores.map(store => {
      if (store.acf.store_type == "retailer") {
        return store
      }
    })
    // Remove nulls
    retailers = retailers.filter(function (el) {
      return el != null;
    });

    restaurants = this.props.stores.map(store => {
      if (store.acf.store_type == "restaurant") {
        return store
      }
    })
    // Remove nulls
    restaurants = restaurants.filter(function (el) {
      return el != null;
    });
    console.log(retailers)
  }

  render() {

    if (typeof document !== 'undefined') {
      return (
        <div id="searchComponent">
          <Container>
            <div>
              <input className='search-bar' ref="searchInput" placeholder="Search..." value={this.state.term} onKeyDown={this.keyPress} onChange={event => this.setState({ term: event.target.value })} />
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
            <div id="theResults">
              {(this.state.term.length > 2) ?
                <div>
                  {this.hideContent()}
                  <article id="searchPage">
                    <h4>Pages: </h4>
                    {(this.state.term != '') ?
                      <div className="eventCount">
                        {this.props.pages.map(page => (
                          (page.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) ?
                            <div key={page.id}>
                            {console.log(page)}
                              <div class="panel panel-default">
                                <div class="panel-heading">
                                  <Link onClick={this.clearSearch} to={`/${page.slug}`}><h3 class="panel-title">{(page.title.rendered) ? <div>{ReactHtmlParser(page.title.rendered)}</div> : ""}</h3></Link>
                                </div>
                                <div class="panel-body">
                                {page.acf.content && 
                                  <div>{ReactHtmlParser(helpers.compressText(page.acf.content, 250))}</div>}
                                {page.content.rendered && 
                                  <div>{ReactHtmlParser(helpers.compressText(page.content.rendered, 250))}</div>}
                                  <div><small>{page.date.substr(0, page.date.length - 9)}</small></div>
                                </div>
                              </div>
                            </div>
                            : ""))}</div> : <div></div>
                    }
                  </article>
                  <article id="searchPage">
                    <h4>Events:</h4>
                    {(this.state.term != '') ?
                      <div className="eventCount">
                        {this.props.events.map(event => (
                          (event.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) ?
                            <div key={event.id}>
                              <div class="panel panel-default">
                                <div class="panel-heading">
                                  <Link onClick={this.clearSearch} to={`/events/${event.slug}/`}><h3 class="panel-title">{(event.title.rendered) ? <div>{ReactHtmlParser(event.title.rendered)}</div> : ""}</h3></Link>
                                </div>
                                <div class="panel-body">
                                  <div>{ReactHtmlParser(helpers.compressText(event.acf.post_copy, 250))}</div>
                                  <div><small>{event.date.substr(0, event.date.length - 9)}</small></div>
                                </div>
                              </div>
                            </div>
                            : ""))}</div> : <p>Content</p>
                    }
                  </article>
                  <article id="searchPage">
                    <h4>Retailers:</h4>
                    {(this.state.term != '') ?
                      <div className="eventCount">
                        {retailers.map(store => (
                          (store.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) ?
                            <div key={store.id}>
                              <div class="panel panel-default">
                                <div class="panel-heading">
                                  <Link onClick={this.clearSearch} to={`/shopping/${store.slug}/`}><h3 class="panel-title">{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div> : ""}</h3></Link>
                                </div>
                                <div class="panel-body">
                                  <div>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 250))}</div>
                                  {/* <div><small>{store.date.substr(0, store.date.length - 9)}</small></div> */}
                                </div>
                              </div>
                            </div>
                            : ""))}</div> : <p>Content</p>
                    }
                  </article>
                  <article id="searchPage">
                    <h4>Dining:</h4>
                    {(this.state.term != '') ?
                      <div className="eventCount">
                        {restaurants.map(store => (
                          (store.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) ?
                            <div key={store.id}>
                              <div class="panel panel-default">
                                <div class="panel-heading">
                                  <Link onClick={this.clearSearch} to={`/dining/${store.slug}/`}><h3 class="panel-title">{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div> : ""}</h3></Link>
                                </div>
                                <div class="panel-body">
                                  <div>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 250))}</div>
                                  {/* <div><small>{store.date.substr(0, store.date.length - 9)}</small></div> */}
                                </div>
                              </div>
                            </div>
                            : ""))}</div> : <p>Content</p>
                    }
                  </article>
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


  // If we want to add a redirect to the searchResults page
  // keyPress(e){
  //   if(e.keyCode == 13){
  //      console.log('value', e.target.value);
  //      window.location.href = window.location + '/shopping'
  //   }
  // }

    //   const tagManagerArgs = {
    //     gtmId: this.props.centerInfo.acf.google_tag_manager_ID,
    //     dataLayer: {
    //       event: 'VirtualPageview',
    //           virtualPageURL: window.location.href,
    //           virtualPageTitle: document.title,
    //        },
    //     dataLayerName: 'PageDataLayer',
    // }