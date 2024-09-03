import React from 'react'
import './App.css'

class Unity extends React.Component{
    constructor(props){
        super(props)
        this.projectRef = React.createRef();
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
        if(this.projectRef.current) observer.observe(this.projectRef.current);
    }
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git" ref={this.projectRef}>
                    <a className="" href="https://github.com/betoniochristian/ARMarshalling" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/ar-unity.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Augmented Reality</h5>
                    <p className="text-project">Unity</p>
                </div>
            </div>
        )
    }
}

export default Unity;