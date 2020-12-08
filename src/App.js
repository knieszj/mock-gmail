import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailData: [],
            search: ''
        }   
    
    }

    async componentDidMount() {
        const getMyEmails = await fetch(`http://localhost:3001/emails`)
        const emailData = await getMyEmails.json()
        this.setState({emailData: emailData})
        console.log("email data: ", emailData)
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
        console.log('the response is: ', response)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.emailInput.value;
        this.sendEmail(message)
        console.log("handleSubmit clicked", message)
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
                            <div>
                                Send quick email
                            </div>
                            <input type={'text'} name={'emailInput'}/>
                            <button type={'submit'}>Send Email</button>
                        </form>
                    </nav>

                    <Switch>
                        <Route path={'/AllEmails'}>
                            <HomePage emails={this.state.emailData}/>
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
