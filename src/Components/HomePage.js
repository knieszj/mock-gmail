import React, {Component} from "react";

let HomePage = ({emails}) => {
    console.log("HomePage: ",emails)
    console.log("The length of the emails is: " + emails.length)
    let emailList;
    if (emails == undefined && emails.length == 0) {
        console.log("Emails is undefined")
    } else {
        emailList = emails.map(email => {
            console.log('*$$$$**' + email.subject, email.sender)
            return (
                <div>
                    <h1 key={email.id}>{email.sender} | {email.subject}</h1>
                </div>
            )
        })
    }

    return (
        <>
            <h1>Bob</h1>
            {emailList}
        </>
    )


}

export default HomePage;