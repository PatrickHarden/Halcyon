import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Button } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import helpers from '../../helpers.js'
import EventsCalendar from './EventsCalendar.js'
import '../../css/modules/diningDirectory.css'
import '../../css/modules/eventDirectory.css'
import { faFacebookF, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faPlus, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import CalendarIcon from '../../images/calendarIcon.png'
import ListIcon from '../../images/listIcon.png'
let moment = require('moment');

var eventCounter;

export default withSiteData(class EventsDirectory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 4,
            search: '',
            list: true
        }
        this.loadMore = this.loadMore.bind(this);
        this.toggleList = this.toggleList.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);
    }

    loadMore() {
        this.setState({
            amount: this.state.amount + 10
        })
    }

    toggleList() {
        this.setState({
            list: true
        })
    }

    toggleCalendar() {
        this.setState({
            list: false
        })
    }

    handleSearch(query) {
        this.setState({ search: query })
    }

    componentDidMount() {
        eventCounter = this.props.events.map(event => {
            return <div></div>
        })
        eventCounter = eventCounter.filter(function (el) {
            return el != null;
        });
    }

    componentWillUpdate() {
        if (eventCounter.length <= this.state.amount) {
            var loadButton = document.getElementById('loadMore');
            if (typeof (loadButton) != 'undefined' && loadButton != null) {
                loadButton.style.display = 'none';
            }
        }
    }

    render() {
        const events = this.props.events;
        const siteRoot = 'https://halycon.netlify.com';

        return (
            <div className='diningDirectory eventsDirectory'>
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                        <div className="controls-container">
                        <div className={(this.state.list) ? "search" : "search invis" }>
                            <input className='search-bar' placeholder="Search..." value={this.state.search} onChange={event => this.handleSearch(event.target.value)} />
                        </div>
                        <div className="eventControl" onClick={this.toggleList}><img src={ListIcon} /></div>
                        <div className="eventControl" onClick={this.toggleCalendar}><img src={CalendarIcon} /></div>
                        </div>
                    </Container>
                </div>
                <Container className="diningRows">
                    {(this.state.list) ?
                        (this.state.search == '') ?
                            <div className="eventContainer">
                                {events.slice(0, this.state.amount).map((event, index) => (
                                    <div key={index} className={(event.acf.featured_image) ? "event-single whiteEvent" : "event-single greenEvent" }>
                                        {event.acf.start_date &&
                                            <div className="date-ball">{moment(event.acf.start_date, 'YYYY-MM-DD').format('MM/DD')}</div>}
                                        {event.acf.featured_image &&
                                            <div className="eventImage" style={{backgroundImage: 'url(' + event.acf.featured_image + ')'}}></div>}
                                        <div className="event-single-content">
                                        {event.acf.start_date && event.acf.end_date && event.acf.address && 
                                            <div>{moment(event.acf.start_date, 'YYYY-MM-DD').format('MMM DD')} - {moment(event.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {event.acf.address}</div>                        
                                        }
                                        <h4>{ReactHtmlParser(event.title.rendered)}</h4>
                                        {(event.acf.post_copy != '') && 
                                            <div>{ReactHtmlParser(helpers.compressText(event.acf.post_copy, 200))}</div>
                                        }
                                       <div className="social-container">
                                            <a href={'mailto:?body=' + siteRoot + '/events/' + event.slug + '&subject=' + ReactHtmlParser(event.title.rendered)} className="social-icon">
                                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                        </a>
                                            <a href={'https://twitter.com/home?status=' + siteRoot + '/events/' + event.slug} className="social-icon" target="_blank">
                                            <FontAwesomeIcon icon={faTwitter} className='icon' />
                                        </a>
                                            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/events/' + event.slug} className="social-icon" target="_blank">
                                            <FontAwesomeIcon icon={faFacebookF} className='icon' />
                                        </a>
                                        </div>
                                        </div>
                                        <Link to={'/events/' + event.slug} className="halcyon-button arrow">See Event Details</Link>
                                    </div>
                                ))}
                                <div class="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                            </div>
                            :
                            <div className="eventContainer">
                                {events.map((event, index) => (
                                    (event.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) ?
                                    <div key={index} className="event-single">
                                        {event.acf.start_date &&
                                            <div>{moment(event.acf.start_date, 'YYYY-MM-DD').format('MM/DD')}</div>}
                                        {event.acf.featured_image &&
                                            <div><img src={event.acf.featured_image} /></div>}
                                        {event.acf.start_date && event.acf.end_date && event.acf.address && 
                                            <div>{moment(event.acf.start_date, 'YYYY-MM-DD').format('MMM DD')} - {moment(event.acf.end_date, 'YYYYMMDD').format('MMM DD')} at {event.acf.address}</div>                        
                                        }
                                        <h4>{ReactHtmlParser(event.title.rendered)}</h4>
                                        {(event.acf.post_copy != '') && 
                                            <div>{ReactHtmlParser(helpers.compressText(event.acf.post_copy, 200))}</div>
                                        }
                                       <div>
                                            <a href={'mailto:?body=' + siteRoot + '/events/' + event.slug + '&subject=' + ReactHtmlParser(event.title.rendered)}>
                                                mail
                                        </a>
                                            <a href={'https://twitter.com/home?status=' + siteRoot + '/events/' + event.slug} target="_blank">
                                                twitter
                                        </a>
                                            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + siteRoot + '/events/' + event.slug} target="_blank">
                                                facebook
                                        </a>
                                            <Link to={'/events/' + event.slug} className="halcyon-button">See Event Details></Link>
                                        </div>
                                    </div>
                                        : ""
                                ))}
                            </div>
                        :
                        <EventsCalendar eventsData={events} />
                    }
                </Container>
            </div>
        );
    }
})