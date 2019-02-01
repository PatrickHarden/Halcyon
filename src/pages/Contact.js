import React from 'react'
import { withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import {Helmet} from "react-helmet";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import ContactForm from '../sections/ContactForm'

var lat = ''
var long = ''

function saveCord(options) {
  lat = parseFloat(options.companyLocationLat)
  long = parseFloat(options.companyLocationLong)
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: lat, lng: long }}
    options={{
      scrollwheel: false,
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: lat, lng: long }} />}
  </GoogleMap>
))


export default withSiteData(({options}) => (
  <article id="contact">
    <Helmet>
      <body className="contact" />
      <meta description="rhjaewrhltioawerjt" />
    </Helmet>
    {saveCord(options)}
    <div class="aboutt">
      <h1>Contact</h1>
    </div>
    <div id="features">
    <Container id="contactAddress">
      <Row>
        <Col cs="6">
          <p><strong>Address:</strong> <br />
          3104 S Elm Pl, Suite C <br />
          Broken Arrow, OK 74012 </p>
        </Col>
        <Col>
          <p><strong>Phone:</strong><br />
          <a href="tel:9183799400" >(918) 379-9400 </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Container id="cForm">
      <Row>
        <Col xs="12">
          <h1>Contact</h1>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgzgLUiRdYm4wH4xkRaqEXhK-vqMk_VSE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />} 
    />
    </div>
  </article>
  
))
