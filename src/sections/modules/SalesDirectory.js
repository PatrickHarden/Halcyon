import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMapMarkerAlt, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../css/components/retailerContent.css'
import '../../css/modules/diningDirectory.css'
import helpers from '../../helpers.js'

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'
let moment = require('moment');

var saleCounter;

export default withSiteData(class SaleDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 4,
            search: ''
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState({
            amount: this.state.amount + 10
        })
    }

    handleSearch(query) {
        this.setState({ search: query })
    }

    componentDidMount() {
        saleCounter = this.props.sales.map(sale => {
            return <div></div>
        })
        saleCounter = saleCounter.filter(function (el) {
            return el != null;
        });
    }

    componentWillUpdate() {
        if (saleCounter.length <= this.state.amount) {
            var loadButton = document.getElementById('loadMore');
            if (typeof (loadButton) != 'undefined' && loadButton != null) {
                loadButton.style.display = 'none';
            }
        }
    }

    render() {
        const sales = this.props.sales;
        const siteRoot = 'https://halycon.netlify.com';

        return (
            <div className='diningDirectory'>
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                <Container>
                <div className='search pull-right'>
                    <input className='search-bar' placeholder="Search..." value={this.state.search} onChange={event => this.handleSearch(event.target.value)} />
                </div>
                </Container>
                <Container className="diningRows">
                    {(this.state.search == '') ?
                        <div>
                            {sales.slice(0, this.state.amount).map((sale, index) => (
                                <div key={index} className="sale-single">
                                    <div className="date-ball">{(sale.acf.end_date) ? <span><span className='ends'>Ends</span><br />{moment(sale.acf.end_date, 'YYYYMMDD').format('MM/DD')}</span> : ""}</div>
                                    <div className='image-wrapper hidden-xs'>
                                        {sale.acf.featured_image &&
                                            <Link to={'/sales/' + sale.slug}><img src={sale.acf.featured_image} alt={sale.title.rendered} /></Link>
                                        }
                                    </div>
                                    <div className="content-wrapper">
                                        <div className='date'>{moment(sale.acf.start_date, 'YYYYMMDD').format('MMM DD')} - {moment(sale.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {sale.title.rendered}</div>
                                        <Link to={'/sales/' + sale.slug}><h5>{sale.title.rendered}</h5></Link>
                                        {(sale.acf.post_copy) ? <div>{ReactHtmlParser(helpers.compressText(sale.acf.post_copy, 200))}</div> : ""}
                                    </div>
                                    <div className='action-corner'>
                                        <div className="share-links hidden-xs">
                                            <a href={'mailto:?body=' + siteRoot + '/dining/' + sale.slug + '&subject=' + ReactHtmlParser(sale.title.rendered)}>
                                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                            </a>
                                            <a href={'https://twitter.com/home?status=' + siteRoot + '/dining/' + sale.slug} target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} className='icon' />
                                            </a>
                                            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/dining/' + sale.slug} target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} className='icon' />
                                            </a>
                                        </div>
                                        <Link to={'/sales/' + sale.slug} className="halcyon-button arrow">More Info</Link>
                                    </div>
                                </div>
                            ))}
                            <div className="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                        </div>
                        :
                        <div>
                            {sales.map((sale, index) => (
                                (sale.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) ?
                                    <div key={index} className="row">
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
                                    </div>
                                    : ""
                            ))}
                        </div>
                    }
                </Container>
            </div>
        );
    }
})