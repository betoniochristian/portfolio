import React from 'react'
import PersonalNav from './PersonalNav'
import AllProject from './AllProject'
import Html from './Html'
import Javascript from './Javascript';
import ReactProject from './ReactProject';
import JavaProject from './JavaProject';
import Unity from './Unity';
import './App.css'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentState: 'All',
        }
    }

    handleNavChange = (section) => {
        this.setState({ currentState: section });
    }
    render(){
        return(
            <div className="information-container">
                <div className="about">
                    <h1>Portfolio</h1>
                <hr className="hr-about"/>
                </div>
                <div className="project-container">
                <PersonalNav onNavChange={this.handleNavChange}/>
                {this.state.currentState === 'All' && <AllProject />}
                {this.state.currentState === 'HTML/CSS' && <Html />}
                {this.state.currentState === 'HTML/CSS/JS' && <Javascript />}
                {this.state.currentState === 'React' && <ReactProject />}
                {this.state.currentState === 'Java' && <JavaProject />}
                {this.state.currentState === 'Unity' && <Unity />}
                </div>
            </div>
        )
    }
}

export default Project;