import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap'

const styles = {
    marginBottom: '30px',
}

 export default class ContactForm extends React.Component {
    render() {
        return (
            <Form action="https://formspree.io/patrick.harden@imaginuity.com"
            method="POST" style={styles}>
                <Row>
                    <Col md="6">
                    <FormGroup>
                        <Input bsSize="lg" type="text" name="firstName" id="contactFirstName" placeholder="First Name:" />
                    </FormGroup>
                    </Col>
                    <Col md="6">
                    <FormGroup>
                        <Input bsSize="lg" type="text" name="lastName" id="contactLastName" placeholder="Last Name:" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <FormGroup>
                        <Input bsSize="lg" type="email" name="email" id="contactEmail" placeholder="Email:" />
                    </FormGroup>
                    </Col>
                    <Col md="6">
                    <FormGroup>
                        <Input bsSize="lg" type="text" name="phone" id="contactPhone" placeholder="Phone:" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <FormGroup>
                        <Input bsSize="lg" type="textarea" name="text" id="contactText" placeholder="How May We Assist You?" />
                    </FormGroup>
                    </Col>
                </Row>
                <Button>Submit</Button>
            </Form>
        )}
 }