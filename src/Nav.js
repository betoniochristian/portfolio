import React from 'react'
import './App.css'

class Nav extends React.Component{

    handleClick = (section) => {
        if (this.props.onNavChange) { 
            this.props.onNavChange(section);
        } else {
            console.error('onNavChange prop is not provided');
        }
    }
        
    render(){
        return(
            <div className="nav-container">
                <nav className="nav-info">
                    <a href="#" onClick={() => this.handleClick('About')}>About</a>
                    <a href="#forResume" onClick={() => this.handleClick('Resume')}>Resume</a>
                    <a href="#forPortfolio" onClick={() => this.handleClick('Portfolio')}>Portfolio</a>
                    <a href="#forContact" onClick={() => this.handleClick('Contact')}>Contact</a>
                    <span></span>
                </nav>
            </div>
        )
    }
}

export default Nav;