import React from 'react'
import './App.css'

class Javascript extends React.Component{
    constructor(props){
        super(props)
        this.projectRef = React.createRef();
        this.projectRef1 = React.createRef();
        this.projectRef2 = React.createRef();
        this.projectRef3 = React.createRef();
        this.projectRef4 = React.createRef();
    }

    componentDidMount(){
        const options ={
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

        const observer = new IntersectionObserver (callback, options);
        if (this.projectRef.current) observer.observe(this.projectRef.current);
        if (this.projectRef1.current) observer.observe(this.projectRef1.current);
        if (this.projectRef2.current) observer.observe(this.projectRef2.current);
        if (this.projectRef3.current) observer.observe(this.projectRef3.current);
        if (this.projectRef4.current) observer.observe(this.projectRef4.current);

    }
    render(){
        return(
            <div className='all-project'>
                <div className="project-container-git" ref={this.projectRef}>
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

                <div className="project-container-git" ref={this.projectRef1}>
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

                <div className="project-container-git" ref={this.projectRef2}>
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

                <div className="project-container-git" ref={this.projectRef3}>
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

                <div className="project-container-git" ref={this.projectRef4}>
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
            </div>
        )
    }
}
export default Javascript;