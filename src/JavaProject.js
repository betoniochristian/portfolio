import React from 'react'
import './App.css'

class JavaProject extends React.Component{
    constructor(props){
        super(props)
        this.projectRef = React.createRef();
        this.projectRef1 = React.createRef();
        this.projectRef2 = React.createRef();
        this.projectRef3 = React.createRef();
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
        if(this.projectRef1.current) observer.observe(this.projectRef1.current);
        if(this.projectRef2.current) observer.observe(this.projectRef2.current);
        if(this.projectRef3.current) observer.observe(this.projectRef3.current);
    }
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git" ref={this.projectRef}>
                    <a className="" href="https://github.com/betoniochristian/Payroll-for-PH?tab=readme-ov-file" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/payroll-java.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Payroll System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git" ref={this.projectRef1}>
                    <a className="" href="https://github.com/betoniochristian/Overtime-Monitoring-System?tab=readme-ov-file" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/overtime-java.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Overtime Monitoring System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git" ref={this.projectRef2}>
                    <a className="" href="https://github.com/betoniochristian/Benefits-Monitoring-System?tab=readme-ov-file" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/benefits-java.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Benefits Monitoring System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git" ref={this.projectRef3}>
                    <a className="" href="https://github.com/betoniochristian/Employee-Monitoring-System?tab=readme-ov-file" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/employee-java.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Employee Monitoring System</h5>
                    <p className="text-project">Java</p>
                </div>
            </div>
        )
    }
}

export default JavaProject;