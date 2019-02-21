import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var categories = [];
var categoryId;
var storeAmount = [];
var salesArray = [];
var elementCount;
var initialCount;
var categorySelected = 'initial';

export default withSiteData(class ShoppingDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search : '',
            dropdownOpen: false,
            selectedCategory: 'Filter by Category',
            amount: 5
        }
        this.toggle = this.toggle.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
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

        categorySelected = test;
        elementCount = 0;
        var target = categoryId[0];
        var el = document.getElementsByClassName('storeRow');
        if (target != undefined){
            for (var i = 0; i < el.length; i++){
                var temp = String(el[i].attributes[1].nodeValue);
                if (temp.includes(target)) {
                    el[i].style.display = 'table-row';
                    elementCount++;
                } else {
                    el[i].style.display = 'none';
                }
            }
        } else {
            for (var i = 0; i < el.length; i++){
                el[i].style.display = 'table-row';
            }
        }
    }

    loadMore(){
        this.setState({
            amount: this.state.amount + 10
        })
    }

    componentWillMount(){
        const storeCategories = this.props.storeCategories;
        const sales = this.props.sales
        categories = storeCategories.map(category => {
            return <DropdownItem onClick={() => { this.setCategory(category.slug) }}>{category.slug}</DropdownItem>
        })
        this.props.stores.map(store => {
            this.offerAvailable(store.slug);
        })
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

    componentDidMount(){
        initialCount = document.getElementsByClassName('storeRow');
        initialCount = initialCount.length;
    }

    componentDidUpdate(){
        storeAmount = this.props.stores.map(store => {
            if (store.acf.store_type == "retailer" && store.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) {
                return 1
            }
        })
        storeAmount = storeAmount.filter(function (el) {
            return el != null;
        });
        var el = document.getElementsByClassName('storeRow');
        if (storeAmount.length == el.length || storeAmount.length < this.state.amount || elementCount < el.length){
            document.getElementById('loadMore').style.display = 'none';
        } 
        if (categorySelected == 'Filter by Category' && initialCount >= el.length){
            document.getElementById('loadMore').style.display = 'inline-block';
        }
        // categorySelected = '';
    }

    render() {
    const stores = this.props.stores

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
            <input className='search-bar pull-right' placeholder="Search..." value={this.state.search} onChange = {event => this.setState({search : event.target.value})} />
                <div className="card-columns">
                {(this.state.search == '') ?
                    <table className="table table-hover">
                    <tbody>
                        {stores.slice(0, this.state.amount).map(store => (
                        (store.acf.store_type == "retailer") ? 
                        <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"}>
                        <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                        <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                        <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                        <td><small>{store.date.substring(0, 10)}</small></td>
                        <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                        <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                        </tr>
                        : "" 
                        ))}
                    </tbody>
                    </table>
                : 
                    <table className="table table-hover">
                    <tbody>
                        {stores.map(store => (
                        (store.acf.store_type == "retailer" && store.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) ? 
                            <tr key={store.id} className={store.id } categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"}>
                            <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                            <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:""}{(this.isSale(store))?<div>Offer Available</div>: ""}</td>
                            <td>{(store.acf.phone_number)?<div>{store.acf.phone_number}</div>:null}</td>
                            <td><small>{store.date.substring(0, 10)}</small></td>
                            <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                            <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                            </tr>
                        : "" 
                        ))}
                    </tbody>
                    </table>
                }
                {(this.state.search == '') ? <div class="halcyon-button" id="loadMore" onClick={this.loadMore}>Load More</div> : "" }
                </div>
        </Container>
        </div>
    );
  }
})