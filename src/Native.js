import React from 'react'
import './App.css'

class Native extends React.Component{
    constructor(props){
        super(props)
        this.projectRef01 = React.createRef();
    }
    componentDidMount(){
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animate');
                }
            })
        }

        const observer = new IntersectionObserver(callback, options);
        if (this.projectRef01.current) observer.observe(this.projectRef01.current);
    }
    render(){
        return(
            <div className="all-project" ref={this.projectRef01}>
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/fitnessApp" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/Main Interface.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Fitness Application</h5>
                    <p className="text-project">React Native</p>
                </div>
            </div>
        )
    }
}

export default Native;