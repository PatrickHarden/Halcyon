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
            amount: 4
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
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
    }

    componentWillUpdate() {
        if (saleCounter.length <= this.state.amount) {
            document.getElementById('loadMore').style.display = 'none';
        }
    }

    render() {
        console.log(this.props.sales)
        const siteRoot = 'https://halycon.netlify.com';

        return (
            <div className='diningDirectory'>
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                <Container className="diningRows">
                    <div>
                        {this.props.sales.slice(0, this.state.amount).map((sale, index) => {
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
                                    <a href={'mailto:?body=' + siteRoot + '/dining/' + sale.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                                        mail
                                    </a>
                                    <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + sale.slug} target="_blank">
                                        twitter
                                    </a>
                                    <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + sale.slug} target="_blank">
                                        facebook
                                    </a>
                                    <Link to={'/sales/' + sale.slug} className="halcyon-button">More Info ></Link>
                                </div>
                            </div>)
                        })
                        }
                    </div>
                    <div class="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                </Container>
            </div>
        );
    }
})