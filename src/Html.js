import React from 'react'
import './App.css'

class Html extends React.Component{
    constructor(props){
        super(props)
        this.projectRef = React.createRef();
        this.projectRef1 = React.createRef();
        this.projectRef2 = React.createRef();
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
        if (this.projectRef.current) observer.observe(this.projectRef.current);
        if (this.projectRef1.current) observer.observe(this.projectRef1.current);
        if (this.projectRef2.current) observer.observe(this.projectRef2.current);
    }
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git" ref={this.projectRef}>
                    <a className="" href="https://github.com/betoniochristian/Product-Landing-Page" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/product-landing-page.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Project Landing Page</h5>
                    <p className="text-project">HTML/CSS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef1}>
                    <a className="" href="https://github.com/betoniochristian/Technical-Documentation" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/technical-html.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Technical Document</h5>
                    <p className="text-project">HTML/CSS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef2}>
                    <a className="" href="https://github.com/betoniochristian/Survey-Form" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/survey-html.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Survey Form</h5>
                    <p className="text-project">HTML/CSS</p>
                </div>
            </div>
        )
    }
}

export default Html;