import React from 'react';
import {Component} from "react/cjs/react.production.min";


class SendEmails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailMessage:
                {
                    sender: 'fakeSender',
                    recipient: 'fakeRecipient',
                    subject: 'fakeSubject',
                    message: 'fakeMessge',
                }

            ,
            value: 'Two cannibals are eating a clown.  One turns to the other and says, "Does this taste funny to you?"',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    messageBuilder(value) {
        const messagesArray = this.state.emailMessage
        console.log("messagesArray", messagesArray)
        return messagesArray
    }

    async sendEmail(emailMessage) {
        await fetch('http://localhost:3001/send', {
            method: 'POST',
            body: JSON.stringify(emailMessage),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => response.json())
    }

    handleSubmit(event) {
        event.preventDefault()
        const message = this.state.value;
        this.sendEmail(this.messageBuilder(message))
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Write your email here:
                        <textarea value={this.state.value} onChange={this.handleChange}/>
                        <input type={'submit'} value={'Sent It!'}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default SendEmails;