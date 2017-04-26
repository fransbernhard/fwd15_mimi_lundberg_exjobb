import React, { Component } from 'react';

// Create Component
class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formEmail: '',
            formMsg: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMsg = this.handleChangeMsg.bind(this);
    }

    handleChange(event) {
        this.setState({
            formEmail: event.target.value,
        });
    }

    handleChangeMsg(event) {
        this.setState({
            formMsg: event.target.value
        });
    }

    handleSubmit(event){
        this.setState({
            type: 'info',
            message: 'Sending…'
        });

        $.ajax ({
            url: 'php/process.php',
            type: 'POST',
            data: {
                'formEmail': this.state.formEmail,
                'formMsg': this.state.formMsg
            },
            cache: false,
            success: function(data){
                // Success..
                this.setState({
                    type: 'success',
                    message: 'We have received your message and will contact you shortly. Thanks!'
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
                    <input id="formEmail" type="email" name="formEmail" value={this.state.formEmail} onChange={this.handleChange} required />
                    <label>Meddelande</label>
                    <textarea id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.formMsg} onChange={this.handleChangeMsg} required></textarea>
                    <input type="submit" value="Submit" className="btn--cta" id="btn-submit" />
                </form>
            </div>
        )
    }
}

export default Contact;
