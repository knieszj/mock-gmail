import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailData: [],
            value: '',
            emailMessage: [
                {
                    sender: '',
                    recipient: '',
                    subject: '',
                    message: '',
                }
            ],
            filter: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    async componentDidMount() {
        console.log("component did mount")
        const getMyEmails = await fetch(`http://localhost:3001/emails`)
        const emailData = await getMyEmails.json()
        this.setState({emailData: emailData})
    }


    async sendEmail(emailMessage) {
        const response = await fetch('http://localhost:3001/send', {
            method: 'POST',
            body: JSON.stringify(emailMessage),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const emailPostData = await response.json()
        console.log("emailPostData: " + emailPostData)

    }

    handleSubmit(event) {
        event.preventDefault()
        const message = event.target.value;
        this.sendEmail(message).then(r => console.log("r: " + r))
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(event.target.value)
    }


    render() {
        return (
            <>
                <Router>
                    <nav>
                        <ul>
                            <li><Link to={'/AllEmails'}>All Emails</Link></li>
                        </ul>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                            <input type="submit" value="Send Note"/>
                        </form>
                        <form>
                            <input type="text" value={this.state.value} onChange={this.handleChange}
                                   placeholder={'search'}/>
                        </form>
                    </nav>

                    <Switch>
                        <Route path={'/AllEmails'}>
                            <HomePage emails={this.state.emailData}
                                      stateValue={this.state.filter}
                            />
                        </Route>
                        <Route>
                            <div>

                            </div>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }


}

export default App;
