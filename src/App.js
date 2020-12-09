import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import SendEmails from "./Components/SendEmails";
import './App.css'
import SearchEmails from "./Components/SearchEmails";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailData: [],
            value: '',
            searchValue: null,
        }

    }

    async componentDidMount() {
        console.log("component did mount")
        const getMyEmails = await fetch(`http://localhost:3001/emails`)
        const emailData = await getMyEmails.json()
        this.setState({emailData: emailData})
    }

    searchBox = (event) => {
        let searchTerm = event.target.value
        this.setState({searchValue: searchTerm})
    }

    render() {
        const emailItems = this.state.emailData.filter((emails) => {
            if (this.state.searchValue == null) {
                return emails
            } else if (emails.subject.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                emails.sender.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
                    return emails
            }
        }).map(email => {
            return (
                <div key={email.id} id={'email-list-id'}>
                    {/*<Link to={`${match.url}/${email.id}`}>*/}
                        <div id={'email-sender'}>
                            {email.sender}
                        </div>
                        <div id={'email-subject'}>
                            {email.subject}
                        </div>
                    {/*</Link>*/}
                </div>
            )
        })


        return (
            <>
                <Router>
                    <nav id={'navigation-bar-styling'}>
                        <Link to={'/AllEmails'} className={'navbar-link'}>Read Emails</Link>
                        <Link to={'/SendEmails'} className={'navbar-link'}>Send Emails</Link>
                        <Link to={'/SearchEmails'} className={'navbar-link'}>Search Emails</Link>
                    </nav>

                    <Switch>
                        <Route path={'/AllEmails'}>
                            <HomePage emails={this.state.emailData}/>
                        </Route>
                        <Route path={'/SendEmails'}>
                            <SendEmails/>
                        </Route>
                        <Route path={'/SearchEmails'}>
                            <input type={'text'} placeholder={'Search by subject or sender'} onChange={(event => this.searchBox(event))}/>
                            {emailItems}
                            <SearchEmails/>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }


}

export default App;
