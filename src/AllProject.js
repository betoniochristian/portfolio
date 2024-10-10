import React from 'react'
import './App.css'

class AllProject extends React.Component {
    constructor(props){
        super(props)
        this.projectRef = React.createRef();
        this.projectRef1 = React.createRef();
        this.projectRef2 = React.createRef();
        this.projectRef3 = React.createRef();
        this.projectRef4 = React.createRef();
        this.projectRef5 = React.createRef();
        this.projectRef6 = React.createRef();
        this.projectRef7 = React.createRef();
        this.projectRef8 = React.createRef();
        this.projectRef9 = React.createRef();
        this.projectRef10 = React.createRef();
        this.projectRef11 = React.createRef();
        this.projectRef12 = React.createRef();
        this.projectRef13 = React.createRef();
        this.projectRef14 = React.createRef();
        this.projectRef15 = React.createRef();
        this.projectRef16 = React.createRef();
        this.projectRef17 = React.createRef();
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
        if (this.projectRef3.current) observer.observe(this.projectRef3.current);
        if (this.projectRef4.current) observer.observe(this.projectRef4.current);
        if (this.projectRef5.current) observer.observe(this.projectRef5.current);
        if (this.projectRef6.current) observer.observe(this.projectRef6.current);
        if (this.projectRef7.current) observer.observe(this.projectRef7.current);
        if (this.projectRef8.current) observer.observe(this.projectRef8.current);
        if (this.projectRef9.current) observer.observe(this.projectRef9.current);
        if (this.projectRef10.current) observer.observe(this.projectRef10.current);
        if (this.projectRef11.current) observer.observe(this.projectRef11.current);
        if (this.projectRef12.current) observer.observe(this.projectRef12.current);
        if (this.projectRef13.current) observer.observe(this.projectRef13.current);
        if (this.projectRef14.current) observer.observe(this.projectRef14.current);
        if (this.projectRef15.current) observer.observe(this.projectRef15.current);
        if (this.projectRef16.current) observer.observe(this.projectRef16.current);
        if (this.projectRef17.current) observer.observe(this.projectRef17.current);
    }
    render(){
        return(
            <div className="all-project" ref={this.projectRef}> 


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

                <div className="project-container-git">
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

                <div className="project-container-git">
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

                <div className="project-container-git" ref={this.projectRef5}>
                    <a className="" href="https://github.com/betoniochristian/Fetch-Pokemon" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/pokemon-js.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Pokemon Search</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef6}>
                    <a className="" href="https://github.com/betoniochristian/Cash-Register-JS" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/cash-register-js.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Cash Register</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef7}>
                    <a className="" href="https://github.com/betoniochristian/TelephoneNumber-JS" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/telephone-js.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Telephone Number</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef8}>
                    <a className="" href="https://github.com/betoniochristian/RomanNumeral-JS" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/roman-numeral-js.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Roman Numeral Converter</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef9}>
                    <a className="" href="https://github.com/betoniochristian/Palindrome-JS" target="_blank" rel="noreferrer">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/palindrome-js.jpg`}
                        alt="project's"
                    />
                    </a>
                    <h5 className="project-title">Palindrome Checker</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git" ref={this.projectRef10}>
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

                <div className="project-container-git" ref={this.projectRef11}>
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

                <div className="project-container-git" ref={this.projectRef12}>
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

                <div className="project-container-git" ref={this.projectRef13}>
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

                <div className="project-container-git" ref={this.projectRef14}>
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

                <div className="project-container-git" ref={this.projectRef15}>
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

                <div className="project-container-git" ref={this.projectRef16}>
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

                <div className="project-container-git" ref={this.projectRef17}>
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

export default AllProject;