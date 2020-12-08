import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailData: []

        }

    }

    async componentDidMount() {
        const getMyEmails = await fetch(`http://localhost:3001/emails`)
        const emailData = await getMyEmails.json()
        this.setState({emailData: emailData})
        console.log("email data: ", emailData)
    }


    render() {
        return (
            <>
                <Router>
                    <nav>
                        <ul>
                            <li><Link to={'/AllEmails'}>All Emails</Link></li>
                        </ul>
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
