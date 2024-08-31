import React from 'react'
import './App.css';
import Portfolio from './Portfolio'
import Information from './Information'
import Resume from './Resume'
import Nav from './Nav';
import Contact from './Contact'
import Project from './Project'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        currentSection: 'About'
    };
}

handleNavChange = (section) => {
    this.setState({ currentSection: section });
}
  render(){
    return(
      <div className="main-container">
        <div className="side-bar-menu">
        <div className="personal-details">
        <Portfolio />
        </div>
        </div>
        
        <div className="information">
        <Nav onNavChange={this.handleNavChange} />
        {this.state.currentSection === 'About' && <Information />}
        {this.state.currentSection === 'Resume' && <Resume />}
        {this.state.currentSection === 'Portfolio' && <Project />}
        {this.state.currentSection === 'Contact' && <Contact />}
        </div>
      </div>
    )
  }
}

export default App;
