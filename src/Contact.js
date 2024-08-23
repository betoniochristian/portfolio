import React from 'react'
import Message from './Message';
import './App.css'

class Contact extends React.Component{
    render(){
        return(
            <div className="information-container">
                <div className="about">
                    <h1>Contact</h1>
                <hr className="hr-about"/>
                </div>
                <div className="contact-container">
                    <Message />
                </div>

                <div className="sepra"></div>
            </div>
        )
    }
}

export default Contact;