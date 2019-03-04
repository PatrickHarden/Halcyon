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
                                    className={"col-xs-12 form-group" + (field.size !== 'large' ? ' col-sm-6' : '') + (field.isRequired ? ' required' : '') + ' type-' + field.type}
                                    id={"group-" + field.id}
                                    data-name={field.label}
                                >
                                    <div className="row">

                                        <div className='col-xs-12'>
                                            <label for={field.label}>
                                                <b>{field.label + (field.isRequired ? '*' : '')}</b><br />
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
                                            dangerouslySetInnerHTML={{ __html: field.content }}></Col>
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

    gformAuth(gform, pubkey, privkey, ajaxMethod) {
        // Generate an HMAC SHA1 hash, then convert it to a URL-encoded base64 string.
        // One of these authentication URLs must be generated to:
        //      1) to retrieve a list of form IDs based on the form name (this.props.gformTitle)
        //      2) to retrieve the fields and variables associated with the specified form
        function CalculateSig(stringToSign, privateKey) {
            let hash = CryptoJS.HmacSHA1(stringToSign, privateKey);
            let base64 = hash.toString(CryptoJS.enc.Base64);
            return encodeURIComponent(base64);
        }

        let d = new Date,
            expiration = 3600, // 1 hour
            unixtime = parseInt(d.getTime() / 1000),
            future_unixtime = unixtime + expiration,
            route = "forms/" + gform;

        let stringToSign = pubkey + ":" + ajaxMethod + ":" + route + ":" + future_unixtime;
        let sig = CalculateSig(stringToSign, privkey);
        return sig + '&expires=' + future_unixtime;
    }

    handleSubmit(event) {

        if ($('input[type="file"]').length) {

            console.log('File upload function triggered');
            // var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";

            // var fd = new FormData();
            // var file = $(document).find('input[type="file"]');
            // var individual_file = file[0].files[0];
            // fd.append("file", individual_file);
            // fd.append('action', 'file_upload_callback');  

            let file_json = {
                'action': 'file_upload_callback',
                'data': 'test',
            };

            $.ajax({
                type: 'post',
                url: SiteURL + "/wp-admin/admin-ajax.php",
                data: file_json,
                contentType: false,
                processData: false,
                success: function (response) {
                    console.log(response);
                }
            });
        }

        let component = this;
        // Build a form submission authentication URL (similar to the form input field retrieval authentication URL)
        let signature = this.gformAuth(this.props.gformID, this.state.publicKey, this.state.privateKey, "POST");
        let gformURL = SiteURL + '/gravityformsapi/forms/' + this.props.gformID + '/submissions?api_key=' + this.state.publicKey + '&signature=' + signature;
        // Build the gForms submission object
        let entry = {
            "input_values": {

            }
        };

        $('#submit-button').prop('disabled', true);
        // Using the previously built form ID list, retrieve corresponding values and add them to the submission object
        this.state.fieldList.map(function (field) {
            let fieldSanitized = field.replace('.', '_');
            entry.input_values['input_' + fieldSanitized] = typeof component.state[field] === 'undefined' ? ' ' : component.state[field];
        });

        let entry_json = JSON.stringify(entry);

        if (!document.getElementById("honeypot").value) {
            $.ajax({
                url: gformURL,
                type: 'POST',
                crossDomain: true,
                data: entry_json,
                dataType: 'json',
                success: function (data) {
                    if (data.status <= 202) {
                        if (data.response.is_valid) {
                            $('#gform-' + component.props.gformID + ' input[type="submit"]').addClass('hidden');
                            $('#gform-' + component.props.gformID + ' .confirmation .message').html(data.response.confirmation_message);
                            $('#gform-' + component.props.gformID + ' .confirmation').removeClass('hidden');
                            $('#gform-' + component.props.gformID + ' .fields').fadeOut();
                            $('.gform .error').addClass('hidden');
                        }
                        else if (!data.response.is_valid) {
                            $('.validation-error').remove();
                            let messages = data.response.validation_messages;
                            for (let i in messages) {
                                component.handleValidationError(i, messages[i]);
                            }
                        }
                    }
                    else {
                        component.handleSoftError(component.state.gformTitle + ' form submission was not valid. Please review your form data to ensure completion and try again.');
                        console.log("Response code: " + data.status);
                        console.log(data);
                    }
                },
                error: function (jqXHR, textStatus) {
                    component.handleError(component.state.gformTitle + ' form submission. This was caused by a problem with the ajax POST of this form.');
                    console.log(jqXHR.responseText);
                    console.log(textStatus);
                }
            });
        } else {
            component.handleError("Honeypot detected");
        }
        event.preventDefault();
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
                        <form onSubmit={this.handleSubmit} className="gform">
                            {this.state.fields}
                            <input type="submit" value="Send" className="halcyon-button"></input>
                            <div style={{ display: 'none' }}>
                                <label>Keep this field blank for spam filtering purposes
                                        <input type="text" name="honeypot" id="honeypot" />
                                </label>
                            </div>
                        </form>
                    </Row>
                </Container>
            </div>
        );
    }
}