import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var categories = [];
var categoryId;

export default withSiteData(class ShoppingDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search : '',
            dropdownOpen: false,
            selectedCategory: 'Filter by Category',
        }
        this.toggle = this.toggle.bind(this);
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

        var target = categoryId[0];
        console.log(target)
        var el = document.getElementsByClassName('storeRow');
        if (target != undefined){
            for (var i = 0; i < el.length; i++){
                var temp = String(el[i].attributes[1].nodeValue);
                if (temp.includes(target)) {
                    el[i].style.display = 'table-row';
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

    componentWillMount(){
        const storeCategories = this.props.storeCategories;
        categories = storeCategories.map(category => {
            return <DropdownItem onClick={() => { this.setCategory(category.slug) }}>{category.slug}</DropdownItem>
        })
        console.log(this.props.stores)
    }

    render() {
    const stores = this.props.stores
    const sales = this.props.sales

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
                    {stores.map(store => (
                    (store.acf.store_type == "retailer") ? 
                    <tr key={store.id} className={store.id + ' storeRow'} categories={(store.imag_taxonomy_store_category[0]) ? store.imag_taxonomy_store_category : "-1"}>
                    <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                    <td>{(store.acf.flags)?<div>{store.acf.flags[0] + '!'}</div>:<div></div>}</td>
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
                        <tr key={store.id} className={store.id}>
                        <td><Link to={`/dining/${store.slug}/`}><h5>{(store.title.rendered)?<div>{ReactHtmlParser(store.title.rendered)}</div>:null}</h5></Link></td>
                        <td>{(store.acf.flags)?<div>{store.acf.flags[0]}</div>:<div></div>}</td>
                        <td>{(store.acf.phone_number)?<div>{store.acf.phone_number + '!'}</div>:null}</td>
                        <td><small>{store.date.substring(0, 10)}</small></td>
                        <td>{(store.acf.street_address)? <a href={'https://maps.google.com/?q=' + store.acf.street_address} target="_blank">Map Icon</a> : ""}</td>
                        <td><Link to={`/dining/${store.slug}/`} className="halcyon-button viewStoreButton"><div>View Store ></div></Link></td>
                        </tr>
                    : "" 
                    ))}
                </tbody>
                </table>
            }
            </div>
        </Container>
        </div>
    );
  }
})