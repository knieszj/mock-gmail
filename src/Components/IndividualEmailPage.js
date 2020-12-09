import React from "react";
import {useParams} from 'react-router-dom'
import './IndividualEmailPageCSS.css'

const IndividualEmailPage = ({data}) => {
    const {emailsId} = useParams()
    const email = data.find(email => email.id === Number(emailsId))

    return (
        <div id={'individual-email-div'}>
            <div id={'ind-email-header-info'}>
                <div id={'ind-email-header-sender-date'}>
                    <div id={'ind-email-sender'}>{`From:`} {email.sender}</div>
                    <div id={'ind-email-date'}>{`Date:`} {email.date}</div>
                </div>
                <div id={'ind-email-recipient'}>{`To:`} {email.recipient}</div>
                <div id={'ind-email-subject'}>{`Subject:`}{email.subject}</div>
            </div>
            {/*<div id={'ind-email-id'}>{email.id}</div>*/}
            <div id={'ind-individual-email-body'}>
                <div id={'ind-email-message'}>{email.message}</div>
            </div>


        </div>
    )

}

export default IndividualEmailPage