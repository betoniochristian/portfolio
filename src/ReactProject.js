import React from 'react'
import './App.css'

class ReactProject extends React.Component{
    constructor(props){
        super(props)
        this.projectRef01 = React.createRef();
        this.projectRef0 = React.createRef();
        this.projectRef = React.createRef();
        this.projectRef1 = React.createRef();
        this.projectRef2 = React.createRef();
        this.projectRef3 = React.createRef();
        this.projectRef4 = React.createRef();
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
        if (this.projectRef0.current) observer.observe(this.projectRef0.current);
        if (this.projectRef.current) observer.observe(this.projectRef.current);
        if (this.projectRef1.current) observer.observe(this.projectRef1.current);
        if (this.projectRef2.current) observer.observe(this.projectRef2.current);
        if (this.projectRef3.current) observer.observe(this.projectRef3.current);
        if (this.projectRef4.current) observer.observe(this.projectRef4.current);
    }
    render(){
        return(
            <div className="all-project" ref={this.projectRef01}>
                <div className="project-container-git">
                    <a className="" href="https://betoniochristian.github.io/portfolio" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/portfolio-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Portfolio</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef0}>
                    <a className="" href="https://betoniochristian.github.io/movie-review" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/movie-review-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Moview Review</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef}>
                    <a className="" href="https://github.com/betoniochristian/Calculator-React" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/calculator-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Calculator</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef1}>
                    <a className="" href="https://github.com/betoniochristian/Drum-Machine" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/drum-machine-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Drum Machine</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef2}>
                    <a className="" href="https://github.com/betoniochristian/Clock-React" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/clock-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Pomodoro Clock</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef3}>
                    <a className="" href="https://github.com/betoniochristian/Markdown-React" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/markdown-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Markdown</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git" ref={this.projectRef4}>
                    <a className="" href="https://github.com/betoniochristian/colorChange-React" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/backgroundChanger-react.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Color Change</h5>
                    <p className="text-project">React</p>
                </div>
            </div>
        )
    }
}

export default ReactProject;