import React from "react";
import { withSiteData } from 'react-static'
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap'
import '../../css/modules/form.css'

export default class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: [],
            fields: '',
            gformTitle: '',
            email: ''
        }
    }

    componentDidMount() {

        let component = this;
        let data = this.props.section
        let title = this.props.section.heading

        if (data) {
            let fields = data.form.fields.map(function (field) {
                // Create input type based off gForm Web API response, as well as accompanying state variable to match
                {
                    switch (field.type) {
                        case 'name':
                        case 'address':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <Row>
                                        {field.inputs.map(function (input) {
                                            if (!input.isHidden) {
                                                return (
                                                    <label for={input.id}
                                                           className="col-xs-12 col-sm-6">
                                                        <span className="sr-only">{input.label}</span>
                                                        <input
                                                            type="text"
                                                            id={input.id}
                                                            className={"form-control" + (field.cssClass ? ' ' + field.cssClass : '')}
                                                            placeholder={input.label + (field.isRequired ? '*' : '')}
                                                            name={input.label + input.id}
                                                            value={component.state[input.id]}
                                                            onChange={component.handleInputChange}
                                                            required={input.isRequired}
                                                        />
                                                    </label>
                                                );
                                            }
                                        })}
                                    </Row>
                                </div>
                            );
                        case 'textarea':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <label for={field.label} className="col-xs-12">
                                        <textarea
                                            type={field.type}
                                            id={field.id}
                                            className="form-control"
                                            name={field.label}
                                            placeholder={field.label + (field.isRequired ? '*' : '')}
                                            value={component.state[field.id]}
                                            onChange={component.handleInputChange}
                                            required={field.isRequired}
                                        />
                                        </label>
                                    </div>
                                </div>
                            );
                        case 'select':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">

                                        <div className='col-xs-12'>
                                            <label for={field.label}>
                                                <b>{field.label + (field.isRequired ? '*' : '')}</b><br/>
                                                <select
                                                    className="form-control"
                                                    type={field.type}
                                                    id={field.id}
                                                    name={field.label}
                                                    value={component.state[field.id]}
                                                    onChange={component.handleInputChange}
                                                    required={field.isRequired}
                                                >
                                                    <option value="none-selected">-</option>
                                                    {field.choices.map(function (choice) {
                                                        return (<option
                                                            value={choice.value}>{choice.text}</option>);
                                                    })}
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            );
                        case 'checkbox':
                            return (
                                <div
                                    className={"col-xs-12 form-group checkbox-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <Col xs={12}>
                                            <b>{field.label + (field.isRequired ? '*' : '')}</b>
                                            {field.inputs.map(function (choice) {
                                                return (
                                                    <div className="checkbox">
                                                        <label for={field.label}>
                                                            <input
                                                                type="checkbox"
                                                                id={choice.id}
                                                                name={field.id}
                                                                value={choice.label}
                                                                onChange={component.handleInputChange}
                                                            />
                                                            {choice.label}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </Col>
                                    </div>
                                </div>
                            );
                        case 'radio':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <Col xs={12}>
                                            <b>{field.label}</b>
                                            {field.choices.map(function (choice) {
                                                return (
                                                    <div className="radio">
                                                        <label for={field.label}>
                                                            <input
                                                                type="radio"
                                                                id={field.id}
                                                                name={field.label}
                                                                value={choice.value}
                                                                onChange={component.handleInputChange}
                                                                required={field.isRequired}
                                                            />
                                                            {choice.text}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </Col>
                                    </div>
                                </div>
                            );
                        case 'html':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <Col
                                            xs={12}
                                            dangerouslySetInnerHTML={{__html: field.content}}></Col>
                                    </div>
                                </div>
                            );
                        case 'time':
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <label for={field.id} className="col-xs-12">
                                            <b>{field.label + (field.isRequired ? '*' : '')}</b>
                                            <input
                                                type="text"
                                                id={field.id}
                                                className="form-control"
                                                name={field.label}
                                                value={component.state[field.id]}
                                                onChange={component.handleInputChange}
                                                required={field.isRequired}
                                            />
                                        </label>
                                    </div>
                                </div>
                            );
                        default:
                            return (
                                <div
                                    className={"col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">
                                        <label for={field.id} className="col-xs-12">
                                            {field.type === 'date' &&
                                            <b>{field.label + (field.isRequired ? '*' : '')}</b>
                                            }
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                className="form-control"
                                                name={field.label}
                                                placeholder={field.label + (field.isRequired ? '*' : '')}
                                                value={component.state[field.id]}
                                                onChange={component.handleInputChange}
                                                required={field.isRequired}
                                            />
                                            <span className="sr-only">{field.label}</span>
                                        </label>
                                    </div>
                                </div>
                            );
                    }
                }
            });

            // Build a list of fields, to be referenced for values/submissions
            let fieldList = [];
            data.form.fields.map(function (field) {
                if (field.inputs) {
                    let inputs = field.inputs.map(function (input, index) {
                        let inputID;
                        if (input.id) {
                            inputID = input.id.toString();
                        } else {
                            inputID = field.id + '_' + index.toString();
                        }
                        return inputID.toString();
                    });
                    inputs.map(function (data) {
                        fieldList.push(data);
                    });
                }
                else {
                    fieldList.push(field.id.toString());
                }
            });

            component.setState({
                gformTitle: title,
                fields: fields,
            });
        } else {
            return 'The requested form is not available.';
        }

        for (var key in this.props.section.form.notifications) {
            if (this.props.section.form.notifications[key].hasOwnProperty("to"))
                this.state.email = this.props.section.form.notifications[key].to
        }
    }
    

    render() {

        return (
            <div className='formModule'>
                <div className='heading-container'>
                    <Container>
                        <h2>{this.props.section.heading}</h2>
                    </Container>
                </div>
                <Container>
                    <Row>
                        {this.props.section.blurb &&
                            <Col sm={12} className='blurb'>{this.props.section.blurb}</Col>
                        }
                        <Form action={"https://formspree.io/" + this.state.email}
                    method="POST" >
                        {this.state.fields}
                        <input type="submit" value="Send" class="halcyon-button"></input>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}