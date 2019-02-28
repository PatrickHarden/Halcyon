import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import helpers from '../../helpers.js'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../../css/modules/diningDirectory.css'
let moment = require('moment');

var saleCounter;
var sales = [];

export default withSiteData(class SaleDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 6
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(){
        this.setState({
            amount: this.state.amount + 10
        })
    }

    componentDidMount() {
        saleCounter = this.props.sales.map(store => {
            if (store.acf.store_type == "restaurant") {
                return <div></div>
            }
        })
        saleCounter = saleCounter.filter(function (el) {
            return el != null;
        });

        const siteRoot = 'https://halycon.netlify.com';
        // If sales array is full, do nothing, otherwise build out sales arraay.
        if (sales) {
        } else {
          sales = this.props.sales.map((sale, index) => {
            return (<div key={index} className="sale-single row">
              <div className="col-sm-2">{(sale.acf.end_date) ? <span>Ends<br />{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>
              <div className='image-wrapper col-sm-3'>
                <img className='hidden-xs' src={sale.acf.featured_image} />
              </div>
              <div className="col-sm-5">
                <div>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')}</div>
                <h5>{sale.title.rendered}</h5>
                {(sale.acf.post_copy) ? <div>{ReactHtmlParser(sale.acf.post_copy)}</div> : ""}
              </div>
              <div className="col-sm-2">
                {/* <a href={'mailto:?body=' + siteRoot + '/dining/' + this.props.retailer.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                  mail
                          </a>
                <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                  twitter
                          </a>
                <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                  facebook
                          </a> */}
                <Link to={'/sales/' + sale.slug} className="halcyon-button">More Info ></Link>
              </div>
            </div>)
          })
        }
    }

    componentWillUpdate(){
        if (saleCounter.length <= this.state.amount){
            document.getElementById('loadMore').style.display = 'none';
        }
        sales = this.props.sales.slice(0, this.state.amount).map((sale, index) => {
            return (<div key={index} className="sale-single row">
              <div className="col-sm-2">{(sale.acf.end_date) ? <span>Ends<br />{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>
              <div className='image-wrapper col-sm-3'>
                <img className='hidden-xs' src={sale.acf.featured_image} />
              </div>
              <div className="col-sm-5">
                <div>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')}</div>
                <h5>{sale.title.rendered}</h5>
                {(sale.acf.post_copy) ? <div>{ReactHtmlParser(sale.acf.post_copy)}</div> : ""}
              </div>
              <div className="col-sm-2">
                {/* <a href={'mailto:?body=' + siteRoot + '/dining/' + this.props.retailer.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                  mail
                          </a>
                <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                  twitter
                          </a>
                <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + this.props.retailer.slug} target="_blank">
                  facebook
                          </a> */}
                <Link to={'/sales/' + sale.slug} className="halcyon-button">More Info ></Link>
              </div>
              </div>)
          })
        
    }

    render() {
        console.log(this.props.sales)

        return (   
            <div className='diningDirectory'>
                <div className='heading-container'>
                    <Container>
                            <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                <Container className="diningRows">
                <div>
                {sales}
                </div>
                    <div class="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                </Container>
            </div>
        );
    }
})