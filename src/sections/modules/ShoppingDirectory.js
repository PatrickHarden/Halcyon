import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { faStickerMule } from "@fortawesome/fontawesome-free-brands";

var categories = [];
var categoryId = '';
var storeAmount = [];
var salesArray = [];
var globalHours = [];
var globalHolidayHours = [];
var todaysDate = new Date();
var day = new Date().getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default withSiteData(class ShoppingDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search : '',
            dropdownOpen: false,
            selectedCategory: 'Filter by Category',
            amount: 5,
            stores: [],
            default: []
        }
        this.toggle = this.toggle.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }


    loadMore(){
        this.setState({
            amount: this.state.amount + 10
        })
    }

    setCategory(test){
        this.setState({
            selectedCategory: test
        })
        categoryId = this.props.storeCategories.map(category => {
            if (category.slug == test) {
                return category.id
            }
        })
        categoryId = categoryId.filter(function (el) {
            return el != null;
        });
    }
    
    offerAvailable(slug){
        this.props.sales.map(sale => {
            if (sale.acf.related_store.post_name == slug){
                if (this.inDateRange(sale)) {
                    salesArray.push(sale)
                }
            }
        })
    }

    inDateRange(sale){
        var today = new Date().getTime();
        var from = new Date(sale.acf.start_date.substring(0,4) + '/' + sale.acf.start_date.substring(4,6) + '/' + sale.acf.start_date.substring(6,8)).getTime();
        var to = new Date(sale.acf.end_date.substring(0,4) + '/' + sale.acf.end_date.substring(4,6) + '/' + sale.acf.end_date.substring(6,8)).getTime();
        var withinRange = today >= from && today <= to;
        return withinRange
    }

    isSale(store){
        var result = false;
        for (var i = 0; i < salesArray.length; i++){
            if (salesArray[i].acf.related_store.post_name == store.slug){
                result = true;
            }
        }
        return result
    }

    handleSearch(query){
        this.setState({ search: query })
    }

    componentDidUpdate(){
        var el = document.getElementsByClassName('storeRow');
        if (storeAmount.length > el.length || storeAmount.length < this.state.amount){
            document.getElementById('loadMore').style.display = 'none';
        } 
        if (categoryId == '' && this.state.search == '' && this.state.amount <= el.length + 1){
            document.getElementById('loadMore').style.display = 'inline-block';
        }
    }

    componentWillMount(){
        const storeCategories = this.props.storeCategories;
        categories = storeCategories.map(category => {
            return <DropdownItem onClick={() => { this.setCategory(category.slug) }}>{category.slug}</DropdownItem>
        })
        this.props.stores.map(store => {
            this.offerAvailable(store.slug);
        })

        storeAmount = this.props.stores.slice(0, this.state.amount).map(store => {
            if (store.acf.store_type == "retailer"){
                return store
            }
        })
        storeAmount = storeAmount.filter(function (el) {
            return el != null;
        });

        if (this.props.centerInfo.acf.standard_hours){
            for (var i = 0; i < this.props.centerInfo.acf.standard_hours.length; i++){
                globalHours.push(this.props.centerInfo.acf.standard_hours[0])
            }
        }
        if (this.props.centerInfo.acf.alternate_hours){
            for (var i = 0; i < this.props.centerInfo.acf.alternate_hours.length; i++){
                globalHolidayHours.push(this.props.centerInfo.acf.alternate_hours[0])
            }
        }
        console.log(globalHolidayHours)
    }

    getHours(store){
        // If store holiday hours are present and today
        console.log(store)
        var customStoreHolidayHours = false
        var customStoreHours = false
        var holidayHours = false
        var storeHours = false
        if (store.acf.alternate_hours.length != 0){
            var hourArray = store.acf.alternate_hours
            for (var i = 0; i < hourArray.length; i++){
                var testDate = new Date(store.acf.alternate_hours[i].date_picker)
                if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    customStoreHolidayHours = true
                    return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time
                }
            }
        }
        if (store.acf.custom_hours == true && customStoreHolidayHours == false){
            if (days[day] == "Monday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Tuesday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Wednesday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Thursday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Friday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Saturday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            } else if (days[day] == "Sunday"){
                if (store.acf.standard_hours[0].thursday_closed == false){
                    customStoreHours = true;
                    return store.acf.standard_hours[0].thursday_open + " - " + store.acf.standard_hours[0].thursday_close
                }
            }
        }
        if (store.acf.custom_hours == false && customStoreHolidayHours == false && customStoreHours == false){
            console.log('etset')
            if (globalHolidayHours != 0){
                var hourArray = store.acf.alternate_hours
                for (var i = 0; i < hourArray.length; i++){
                    var testDate = new Date(store.acf.alternate_hours[i].date_picker)
                    if(testDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                        customStoreHolidayHours = true
                        return store.acf.alternate_hours[i].start_time + " - " + store.acf.alternate_hours[i].end_time
                    }
                }
            }
        }
    }


    render() {

    return (   <div>
        <div className='heading-container'>
            <Container>
                    <h2>{this.props.section.heading}</h2>
            </Container>
        </div>
        <Container className='shoppingDIrectory'>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.selectedCategory}
                </DropdownToggle>
                <DropdownMenu left>
                <DropdownItem onClick={() => { this.setCategory('Filter by Category') }}>Reset</DropdownItem>
                    {categories}
                </DropdownMenu>
            </Dropdown>
            <input className='search-bar pull-right' placeholder="Search..." value={this.state.search} onChange = {event => this.handleSearch(event.target.value)} />
                <div className="card-columns">
                    <table className="table table-hover">
                    <tbody>
                        {this.props.stores.slice(0, this.state.amount).map(store => {
                        if (store.acf.store_type == "retailer"){
                            if (categoryId == '' && this.state.search == ''){
                                return (
                                    <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"} slug={store.title.rendered}>
                                        <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                                        <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                                        <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                                        <td><small>{this.getHours(store)}</small></td>
                                        <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                                        <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                                    </tr>
                                    )
                            } else {
                                if (categoryId == '' && this.state.search != ''){
                                    if (store.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())){
                                        return (
                                            <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"} slug={store.title.rendered}>
                                                <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                                                <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                                                <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                                                <td><small>{this.getHours(store)}</small></td>
                                                <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                                                <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                                            </tr>                                 
                                    )}
                                } else if (String(store.imag_taxonomy_store_category[0]).includes(categoryId[0]) && this.state.search == ''){
                                    return (
                                        <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"} slug={store.title.rendered}>
                                        <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                                        <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                                        <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                                        <td><small>{this.getHours(store)}</small></td>
                                        <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                                        <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                                    </tr>
                                    )
                                } else if (String(store.imag_taxonomy_store_category[0]).includes(categoryId[0]) && this.state.search != ''){
                                    if (store.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())){
                                        return (
                                            <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"} slug={store.title.rendered}>
                                                <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                                                <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                                                <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                                                <td><small>{this.getHours(store)}</small></td>
                                                <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                                                <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                                            </tr>                                 
                                    )}
                                }
                            }
                            }
                        })}
                    </tbody>
                    </table>
                <div class="halcyon-button" id="loadMore" onClick={this.loadMore}>Load More</div> </div>
        </Container>
        </div>
    );
  }
})