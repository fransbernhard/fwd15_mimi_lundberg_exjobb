import React, { Component } from 'react';

// Create Component
class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contactEmail: '',
            contactMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
    }

    handleChange(event) {
        this.setState({
            contactEmail: event.target.value,
        });
    }

    handleChangeMsg(event) {
        this.setState({
            contactMessage: event.target.value
        });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.setState({
            type: 'info',
            message: 'Sending…'
        });

        $.ajax({

            url: 'php/mailer.php',
            type: 'POST',
            data: {
                'form_email': this.state.contactEmail,
                'form_msg': this.state.contactMessage
            },
            cache: false,
            success: function(data) {
                // Success..
                this.setState({
                    type: 'success',
                    message: 'We have received your message and will get in touch shortly. Thanks!'
                });
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    type: 'danger',
                    message: 'Sorry, there has been an error.  Please try again later or visit us at SZB 438.'
                });
            }.bind(this)

        });
    }

    render() {
        return (
            <div className="contact">
                <form className="form" onSubmit={this.handleSubmit} id="formContact">
                    <label>Email</label>
                    <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this.handleChange} required />
                    <label>Meddelande</label>
                    <textarea id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.contactMessage} onChange={this.handleChangeMsg} required></textarea>
                    <input type="submit" value="Submit" className="btn--cta" id="btn-submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
