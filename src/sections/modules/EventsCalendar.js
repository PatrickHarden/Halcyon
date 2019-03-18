// Packages
import React from 'react';
import { Link } from 'react-static';
import { Row, Col, Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
let moment = require('moment');
let momentRange = require('moment-range');
moment = momentRange.extendMoment(moment);
const localizer = BigCalendar.momentLocalizer(moment)
import BigCalendar from 'react-big-calendar'
let Entities = require('html-entities').AllHtmlEntities;
let entities = new Entities();

import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../css/components/calendar.css'

var modal;

const styles = {
  background: 'rgba(0,0,0,0.35)',
  paddingRight: '15px'
}

export default class EventsCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      eventTarget: '',
      events: [],
      recurrences: [],
      overlayTitle: null,
      overlayContent: null,
      overlayImage: null,
      overlayDate: null,
      recurringTitles: []
    }
    this.toggle = this.toggle.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  componentWillMount() {
    this.props.eventsData.map(event => {
      this.state.events.push({
        start: event.acf.start_date,
        startTime: event.acf.start_time,
        end: event.acf.end_date,
        endTime: event.acf.end_time,
        title: entities.decode(event.title.rendered),
        slug: event.slug,
        eventContent: event.acf.post_copy,
        eventImage: event.acf.featured_image,
        eventRecurrence: event.acf.event_recurrence,
        eventType: event.acf.event_type,
        weeksBetweenArray: []
      })
    })
    this.state.events.map(event => {
      if (event.eventType == "recursive"){
        event.end = event.start;
        this.state.recurringTitles.push(event.title);
        this.state.recurrences.push(event);
        var occurences = event.eventRecurrence.theRecurrences;
        var counter = 0;
        var tempDate = event.start;
        while (counter < occurences){
          if (event.eventRecurrence.occurs_every == "twoWeeks"){
            var nextEvent = this.calculateNextTwoWeeksDate(tempDate);
          } else {
            var nextEvent = this.calculateNextWeeksDate(tempDate);
          }
          tempDate = nextEvent;
          this.state.events.push({
            start: tempDate,
            end: tempDate,
            title: event.title,
            slug: event.slug,
            eventContent: event.eventContent,
            eventImage: event.eventImage,
          })
          counter++;
        }
      }
    })
  }

  calculateNextWeeksDate(startDate){
    var firstDay = new Date(startDate);
    var nextWeek = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()+8);
    return moment(nextWeek).format('YYYY-MM-DD');
  }

  calculateNextTwoWeeksDate(startDate){
    var firstDay = new Date(startDate);
    var nextWeek = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()+15);
    return moment(nextWeek).format('YYYY-MM-DD');
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidUpdate() {
    if (this.state.modal) {
      var theModal = document.getElementById('calendarModal');
      theModal.style.display = 'block';
      theModal.classList.add("in");
    }
  }

  handleEventClick(event) {
    this.setState({
      modal: !this.state.modal
    });
    modal = <div className="modal fade" tabindex="-1" role="dialog" id="calendarModal" style={styles}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">{event.title} 
            {event.startTime && event.endTime &&
              <small>{event.startTime} - {event.endTime} </small>
            }</h4>
          </div>
          <div className="modal-body">
            {event.start && event.end && (event.start != event.end) &&
               <div>{moment(event.start, 'YYYY-MM-DD').format('MMM DD')} - {moment(event.end, 'YYYYMMDD').format('MMM DD')}</div>
            }
            {event.eventImage && 
            <img src={event.eventImage} alt={event.title.rendered} /> }
            {event.eventContent && 
            <div>{ReactHtmlParser(event.eventContent)}</div> }
          </div>
          <div className="modal-footer">
            <button type="button" onClick={this.toggle} className="btn btn-default" data-dismiss="modal">Close</button>
            <Link type="button" to={'/events/' + event.slug} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  }

  render() {

    return (
      <div id="eventCalendar">
        {this.state.modal &&
          modal
        }
        <Container>
          <Row>
            <Col xs={12}>
              <BigCalendar
                localizer={localizer}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={event => this.handleEventClick(event)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}