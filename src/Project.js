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
        this.aboutRef = React.createRef();
    }
    componentDidMount(){
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (this.aboutRef.current) observer.observe(this.aboutRef.current);
    }
    handleNavChange = (section) => {
        this.setState({ currentState: section });
    }

   
    render(){
        return(
            <div className="information-container" ref={this.aboutRef}>
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