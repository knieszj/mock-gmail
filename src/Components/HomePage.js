import React, {Component} from "react";
import {BrowserRouter, useRouteMatch, Link, Switch, Route} from "react-router-dom";
import IndividualEmailPage from './IndividualEmailPage'
import './HomePageCSS.css'


let HomePage = ({emails,}) => {
    const match = useRouteMatch();
    const emailList = emails.map(email => {
        return (
            <div key={email.id} id={'email-list-id'}>
                <Link to={`${match.url}/${email.id}`}>
                    <div id={'email-sender'}>
                        {email.sender}
                    </div>
                    <div id={'email-subject'}>
                        {email.subject}
                    </div>
                </Link>
            </div>
        )
    })


    return (
        <>
            <BrowserRouter>
                <div id={'home-page-main'}>
                    <Switch>
                        <Route path={`${match.url}/:emailsId`}>
                            <div id={'individual-email-page'}>
                                <IndividualEmailPage data={emails}/>

                            </div>
                        </Route>

                    </Switch>
                    <div id={'email-list'}>
                        {emailList}
                        {/*{filteredEmailList}*/}
                    </div>
                </div>
            </BrowserRouter>

        </>
    )


}

export default HomePage;