import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default withSiteData(class ShoppingDirectory extends React.Component {

    constructor(props) {
        super(props);
    }

    convertToMap(){
        console.log('convertToMap')
    }

    render() {
    const stores = this.props.stores
    const sales = this.props.sales

    return (   
        <Container className='shoppingDIrectory'>
            <div className="card-columns">
                <table className="table table-hover">
                {console.log(stores)}
                {console.log(sales)}
                <tbody>
                    {stores.map(store => (
                    (store.acf.store_type == "retailer") ? 
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
            </div>
        </Container>
    );
  }
})