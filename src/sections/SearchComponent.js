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
var pages;
var events;
var restaurants;
var retailers;
var sales;

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
      document.getElementById('searchComponent').style.zIndex = '2'
      document.getElementById('searchComponent').style.bottom = 0
      // document.getElementsByClassName('content')[0].style.display = 'none';
    }
  }

  showContent() {
    var width = document.body.clientWidth;
    var foot = document.getElementById('theFooter')
    theContent = document.getElementById('searchComponent')
    if (width >= 768) {
      if (theContent == undefined || theContent == null || foot == undefined || foot == null) {
        return
      } else {
        theContent.style.zIndex = 'initial';
        theContent.style.bottom = 'initial'
        // foot.style.display = ''
      }
    }
  }

  clearSearch() {
    this.setState({
      term: ''
    })
      theContent = document.getElementsById('searchComponent');
      theContent.style.display = 'none'
  }

  getPages() {
    pages = this.props.pages.map((page, index) => {
      if (page.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) {
        return (
          <div key={index}>
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
        )
      }
    })
    pages = pages.filter(function (el) {
      return el != null;
    });
  }

  getEvents() {
    events = this.props.events.map((event, index) => {
      if (event.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) {
        return (
          <div key={index}>
            <div class="panel panel-default">
              <div class="panel-heading">
                <Link onClick={this.clearSearch} to={`/events/${event.slug}/`}><h3 class="panel-title">{(event.title.rendered) ? <div>{ReactHtmlParser(event.title.rendered)}</div> : ""}</h3></Link>
              </div>
              <div class="panel-body">
                <div>{ReactHtmlParser(helpers.compressText(event.acf.post_copy, 250))}</div>
                <div><small>{event.acf.start_date} - {event.acf.end_date}</small></div>
              </div>
            </div>
          </div>
        )
      }
    })
    events = events.filter(function (el) {
      return el != null;
    });
  }

  getRetailers() {
    retailers = this.props.stores.map((store, index) => {
      if (store.title.rendered.toLowerCase().includes(this.state.term.toLowerCase()) && store.acf.store_type == "retailer") {
        return (<div key={index}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <Link onClick={this.clearSearch} to={`/shopping/${store.slug}/`}><h3 class="panel-title">{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div> : ""}</h3></Link>
            </div>
            <div class="panel-body">
              <div>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 250))}</div>
            </div>
          </div>
        </div>
        )
      }
    })
    retailers = retailers.filter(function (el) {
      return el != null;
    });
  }

  getRestaurants() {
    restaurants = this.props.stores.map((store, index) => {
      if (store.title.rendered.toLowerCase().includes(this.state.term.toLowerCase()) && store.acf.store_type == "restaurant") {
        return (<div key={index}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <Link onClick={this.clearSearch} to={`/shopping/${store.slug}/`}><h3 class="panel-title">{(store.title.rendered) ? <div>{ReactHtmlParser(store.title.rendered)}</div> : ""}</h3></Link>
            </div>
            <div class="panel-body">
              <div>{ReactHtmlParser(helpers.compressText(store.acf.store_copy, 250))}</div>
            </div>
          </div>
        </div>
        )
      }
    })
    restaurants = restaurants.filter(function (el) {
      return el != null;
    });
  }

  getSales() {
    sales = this.props.sales.map((sale, index) => {
      if (sale.title.rendered.toLowerCase().includes(this.state.term.toLowerCase())) {
        return (<div key={index}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <Link onClick={this.clearSearch} to={`/sales/${sale.slug}/`}><h3 class="panel-title">{(sale.title.rendered) ? <div>{ReactHtmlParser(sale.title.rendered)}</div> : ""}</h3></Link>
            </div>
            <div class="panel-body">
              {sale.acf.post_copy && <div>{ReactHtmlParser(helpers.compressText(sale.acf.post_copy, 250))}</div>}
            </div>
          </div>
        </div>
        )
      }
    })
    sales = sales.filter(function (el) {
      return el != null;
    });
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
                    {(this.state.term != '') ?
                      <div>
                        <h4>Pages: {this.getPages()} {pages.length}</h4>
                        <div className="eventCount">{pages}</div>
                      </div> : ""
                    }
                  </article>
                  <article id="searchPage">
                    {(this.state.term != '') ?
                      <div>
                        <h4>Events: {this.getEvents()} {events.length}</h4>
                        <div className="eventCount">{events}</div>
                      </div> : ""
                    }
                  </article>
                  <article id="searchPage">
                    {(this.state.term != '') ?
                      <div>
                        <h4>Retailers: {this.getRetailers()} {retailers.length}</h4>
                        <div className="eventCount">{retailers}</div>
                      </div> : ""
                    }
                  </article>
                  <article id="searchPage">
                    {(this.state.term != '') ?
                      <div>
                        <h4>Restaurants: {this.getRestaurants()} {restaurants.length}</h4>
                        <div className="eventCount">{restaurants}</div>
                      </div> : ""
                    }
                  </article>
                  <article id="searchPage">
                    {(this.state.term != '') ?
                      <div>
                        <h4>Sales: {this.getSales()} {sales.length}</h4>
                        <div className="eventCount">{sales}</div>
                      </div> : ""
                    }
                  </article>
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