import React from "react";
import { Link, withSiteData } from 'react-static'
import { Container, Row, Col, Button } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import helpers from '../../helpers.js'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '../../css/modules/diningDirectory.css'
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

        return (
            <div className='diningDirectory'>
            {console.log(events)}
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                        <div><input className='search-bar' placeholder="Search..." value={this.state.search} onChange={event => this.handleSearch(event.target.value)} /></div>
                        <Button onClick={this.toggleList} className="halcyon-button">List</Button>
                        <Button onClick={this.toggleCalendar} className="halcyon-button">Calendar</Button>
                    </Container>
                </div>
                <Container className="diningRows">
                    {(this.state.list) ?
                        (this.state.search == '') ?
                        <div>
                            {events.slice(0, this.state.amount).map((event, index) => (
                                <div key={index}>
                                    <h4>{event.title.rendered}</h4>
                                    <div></div>
                                </div>
                            ))}
                            <div class="loadmore-button" id="loadMore" onClick={this.loadMore}><FontAwesomeIcon icon={faPlus} className='icon' />Load More</div>
                        </div>
                        :
                        <div>
                            {events.map((event, index) => (
                                (event.title.rendered.toLowerCase().includes(this.state.search.toLowerCase())) ?
                                    <div>{event.slug}</div>
                                    : ""
                            ))}
                        </div>
                    :
                    <div>Calendar</div>
                    }
                </Container>
            </div>
        );
    }
})