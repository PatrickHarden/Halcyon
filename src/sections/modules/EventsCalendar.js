// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import { Row, Col, Button, Container, Modal } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
let moment = require('moment');
let momentRange = require('moment-range');
moment = momentRange.extendMoment(moment);
let Entities = require('html-entities').AllHtmlEntities;
let entities = new Entities();
const localizer = BigCalendar.momentLocalizer(moment)
import BigCalendar from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'


export default class EventsCalendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const events = [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 3, 7),
        end: new Date(2019, 10, 7),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 3, 7),
        end: new Date(2019, 3, 10),
      },
    ];

    return (
      <div id="eventCalendar">
      <Container>
          <Row>
            <Col xs={12}>
              <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
              />
            </Col>
          </Row>
          </Container>
      </div>
    )
  }
}