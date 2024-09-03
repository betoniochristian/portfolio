import React from 'react'
import Message from './Message';
import './App.css'

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.aboutRef = React.createRef();
        this.messageRef = React.createRef();
    }
    componentDidMount(){
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }
        const callback = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animate');
                }
            })
        }

        const observer = new IntersectionObserver(callback, options);
        if(this.aboutRef.current) observer.observe(this.aboutRef.current);
        if(this.messageRef.current) observer.observe(this.messageRef.current);
    }
    render(){
        return(
            <div className="information-container">
                <div className="about" ref={this.aboutRef}>
                    <h1>Contact</h1>
                <hr className="hr-about"/>
                </div>
                <div className="contact-container" ref={this.messageRef}>
                    <Message />
                </div>

                <div className="sepra"></div>
            </div>
        )
    }
}

export default Contact;