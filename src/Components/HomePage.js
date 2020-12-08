import React, {Component} from "react";
import {BrowserRouter, useRouteMatch, Link, Switch, Route} from "react-router-dom";
import IndividualEmailPage from './IndividualEmailPage'

let HomePage = ({emails}) => {
    console.log("emails: ", emails )
    let match = useRouteMatch();
    let emailList = emails.map(email => {
        return (
            <div key={email.id}>
                <Link to={`${match.url}/${email.id}`}>
                    <div>
                        {email.sender}
                    </div>
                    <div>
                        {email.subject}
                    </div>
                </Link>
            </div>
        )
    })
  
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={`${match.url}/:emailsId`}>
                        <IndividualEmailPage data={emails}/>
                    </Route>
          
                </Switch>
                {emailList} 
            </BrowserRouter>

        </>
    )


}

export default HomePage;