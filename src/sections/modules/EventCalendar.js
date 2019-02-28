// Packages
import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import { ReactBootstrap, Grid, Row, Col, Button, ButtonToolbar, Modal, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
let moment = require('moment');
let momentRange = require('moment-range');
moment = momentRange.extendMoment(moment);
let Entities = require('html-entities').AllHtmlEntities;
let entities = new Entities();

import '../css/calendar.css'

const SiteURL = window.location.protocol + '//' + document.location.hostname;
// const Images = SiteURL + "/wp-content/plugins/imaginuity-centers3/js/themes/LibertyCenter/lib/img/";
const EventCalendar = require('react-event-calendar').default;

export default class EventsCalendar extends Component{
    constructor(props){
        super(props);

        this.state = {
            moment: moment(),
            showModal: false,
            events: [],
            recurrences: [],
            overlayTitle: null,
            overlayContent: null,
            overlayImage: null,
            overlayDate: null,
            recurringTitles: []
        }
        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        // this.changeRecurringEventCss = this.changeRecurringEventCss.bind(this);
    }

    componentWillMount(){
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
      console.log(this.state.recurringTitles);
      console.log(this.state.recurrences);
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

    handleNextMonth() {
      this.setState({
          moment: this.state.moment.add(1, 'M'),
      });
    }

    handlePreviousMonth() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M'),
        });
    }

    getHumanDate() {
      return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    }

    handleModalClose() {
      this.setState({
          showModal: false,
      })
    }

    handleEventClick(eventData) {
      console.log(eventData);
      this.setState({
        showPopover: false,
        showModal: true,
        overlayTitle: eventData.title,
        overlayContent: eventData.eventContent,
        overlayImage: eventData.eventImage,
        overlayDate: eventData.start,
        overlayStartTime: eventData.startTime,
        overlayEndTime: eventData.endTime,
        overlaySlug: eventData.slug
      });
    }
    
    abbreviateDays(){
      $('.flexColumn').each(function(){
        if (!$(this).hasClass("day")){
          var text = $(this).text().substring(0,3)
          return $(this).text(text)
        }
      })
    }

    componentDidMount(){
      var width = document.body.clientWidth;
      if (width <= 480){
        setTimeout(this.abbreviateDays(), 200)
      }
    }

    render(){

      const styles = {
        position: 'relative',
        top: '-100px'
      };

        return (
          <div style={styles} id="eventCalendar">
            <Grid>

              <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.overlayTitle} {(this.state.overlayDate) ? <div>| {this.state.overlayDate}</div> : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {(this.state.overlayStartTime && this.state.overlayEndTime) ? <h4>{this.state.overlayStartTime} - {this.state.overlayEndTime}</h4> : ""}
                   <Link to={"/events/" + this.state.overlaySlug + "/"}>{(this.state.overlayImage) ? <img src={this.state.overlayImage} alt={this.state.overlayTitle} id="calendarModalImage" /> : ""}</Link>
                    {(this.state.overlayContent) ? <div>{ReactHtmlParser(this.state.overlayContent)}</div> : ""}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleModalClose}>Close</Button>
                </Modal.Footer>
              </Modal>

              <Row>
                  <Col xs={8}>
                      <ButtonToolbar>
                          <Button onClick={this.handlePreviousMonth}><img src={Images + 'leftCalArrow.png'} alt="" /></Button>
                          <div className="h2 calendarH2">{this.getHumanDate()}</div>
                          <Button onClick={this.handleNextMonth}><img src={Images + 'rightCalArrow.png'} alt="" /></Button>
                      </ButtonToolbar>
                  </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12}>
                  <EventCalendar 
                    month={this.state.moment.month()}
                    year={this.state.moment.year()}
                    maxEventSlots={30}
                    events={this.state.events} 
                    onEventClick={(target, eventData, day) => this.handleEventClick(eventData)} >
                </EventCalendar>
                </Col>
              </Row>
            </Grid>
          </div>
        )
    }
}