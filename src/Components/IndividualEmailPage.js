import React from "react";
import { useParams } from 'react-router-dom'

const IndividualEmailPage = ({data}) => {
    const {emailsId} = useParams()
    const email = data.find(email => email.id === Number(emailsId))
    
    return (
        <>
            <div>{email.id}</div>
            <div>{email.date}</div>
            <div>{email.message}</div>
            <div>{email.recipient}</div>
            <div>{email.sender}</div>
            <div>{email.subject}</div>
        </>
    )
    
}

export default IndividualEmailPage