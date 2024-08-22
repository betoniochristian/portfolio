import React from 'react'
import './App.css'

class PersonalNav extends React.Component{
    
    handleClick = (section) => {
        if (this.props.onNavChange) { 
            this.props.onNavChange(section);
        } else {
            console.error('onNavChange prop is not provided');
        }
    }

    render(){
        return(
            <div className="personal-nav">
                <nav className="personal-nav-container">
                    <a href="#" onClick={() => this.handleClick('All')}>All</a>
                    <a href="#" onClick={() => this.handleClick('HTML/CSS')}>HTML/CSS</a>
                    <a href="#" onClick={() => this.handleClick('HTML/CSS/JS')}>HTML/CSS/JS</a>
                    <a href="#" onClick={() => this.handleClick('React')}>React</a>
                    <a href="#" onClick={() => this.handleClick('Java')}>Java</a>
                    <a href="#" onClick={() => this.handleClick('Unity')}>Unity</a>
                </nav>
            </div>
        )
    }
}

export default PersonalNav;