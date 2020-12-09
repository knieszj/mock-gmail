import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import SendEmails from "./Components/SendEmails";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailData: [],
            value: '',
            // emailMessage: [
            //     {
            //         sender: 'fakeSender',
            //         recipient: 'fakeRecipient',
            //         subject: 'fakeSubject',
            //         message: 'fakeMessge',
            //     }
            // ],
            filter: '',

        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    async componentDidMount() {
        console.log("component did mount")
        const getMyEmails = await fetch(`http://localhost:3001/emails`)
        const emailData = await getMyEmails.json()
        this.setState({emailData: emailData})
    }


    // async sendEmail(emailMessage) {
    //     const response = await fetch('http://localhost:3001/send', {
    //         method: 'POST',
    //         body: JSON.stringify(emailMessage),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).then((response) => response.json())
    // }
    //
    // messageBuilder(value){
    //     const messagesArray = [...this.state.emailMessage.sender, ...this.state.emailMessage.recipient, ...this.state.emailMessage.subject, value]
    //     console.log("The message builder built this: ", messagesArray.join(''))
    //     return messagesArray.join('')
    // }
    //
    // handleSubmit(event) {
    //     event.preventDefault()
    //     const message = event.target.value;
    //     this.sendEmail(this.messageBuilder(message))
    // }
    //
    // handleChange(event) {
    //     this.setState({value: event.target.value})
    //     console.log(event.target.value)
    // }


    render() {
        return (
            <>
                <Router>
                    <nav id={'navigation-bar-styling'}>
                        <Link to={'/AllEmails'} className={'navbar-link'}>Read Emails</Link>
                        <Link to={'/SendEmails'} className={'navbar-link'}>Send Emails</Link>
                    </nav>

                    <Switch>
                        <Route path={'/AllEmails'}>
                            <HomePage emails={this.state.emailData}/>
                        </Route>
                        <Route path={'/SendEmails'}>
                            <SendEmails/>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }


}

export default App;
