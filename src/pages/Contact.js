import React from 'react'
import { withSiteData, Head } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import ContactForm from '../sections/ContactForm'

var lat = ''
var long = ''

function saveCord(options) {
  lat = parseFloat(32.824139)
  long = parseFloat(-96.769943)
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

var newTitle;
var newMeta;
var newCanonical;
function setMetaData(pages){
  pages.map(page => {
    if (page.slug == 'contact-us'){
      newTitle = page.yoast_meta.yoast_wpseo_title;
      newMeta = page.yoast_meta.yoast_wpseo_metadesc;
      newCanonical = page.yoast_meta.yoast_wpseo_canonical;
    } 
  })
}

export default withSiteData(({options, siteRoot, title, metaDescription, pages }) => (
  <article id="contact">
  {setMetaData(pages)}
    <Head>
      <body className="contact" />
      {(newTitle) ? <title>{newTitle}</title> : <title>{title}</title>}
      {(newMeta) ? <meta name="description" content={newMeta} /> : <meta name="description" content={metaDescription} />}
      {(newCanonical) ? <link rel="canonical" href={newCanonical} /> : <link rel="canonical" href={siteRoot} /> }
    </Head>
    {saveCord(options)}
    <div id="features">
    <Container id="contactAddress">
    <div className="aboutt">
      <h1>Sign Up</h1>
    </div>
      <Row>
        <Col cs="6">
          <p><strong>Address:</strong> <br />
          3104 S Elm Pl, Suite C <br />
          Broken Arrow, OK 74012 </p>
        </Col>
        <Col>
          <p><strong>Phone:</strong><br />
          <a href="tel:9183799400" >(123) 456-6774 </a>
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
