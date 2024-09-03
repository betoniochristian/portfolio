import React from 'react'
import './App.css'

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.aboutRef = React.createRef();
        this.resumeContentRef = React.createRef();
        this.resumeContentExpRef = React.createRef();
        this.educationRef = React.createRef();
        this.schoolRef = React.createRef();
        this.schoolRef1 = React.createRef();
        this.schoolRef2 = React.createRef();
        this.schoolRef3 = React.createRef();
        this.expRef = React.createRef();
        this.expRef1 = React.createRef();
        this.expRef2 = React.createRef();
        this.skillRef = React.createRef();
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
                    if (entry.target === this.skillRef.current || entry.target === this.aboutRef.current || entry.target === this.resumeContentRef.current || entry.target === this.resumeContentExpRef.current){
                        entry.target.classList.add('animation');
                    }else if (entry.target === this.expRef1.current || entry.target === this.expRef.current || entry.target === this.expRef2.current || entry.target === this.schoolRef.current || entry.target === this.educationRef.current || entry.target === this.schoolRef1.current || entry.target === this.schoolRef2.current || entry.target === this.schoolRef3.current){
                        entry.target.classList.add('animationText');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (this.aboutRef.current) observer.observe(this.aboutRef.current);
        if (this.resumeContentRef.current) observer.observe(this.resumeContentRef.current);
        if (this.resumeContentExpRef.current) observer.observe(this.resumeContentExpRef.current);
        if (this.educationRef.current) observer.observe(this.educationRef.current);
        if (this.schoolRef.current) observer.observe(this.schoolRef.current);
        if (this.schoolRef1.current) observer.observe(this.schoolRef1.current);
        if (this.schoolRef2.current) observer.observe(this.schoolRef2.current);
        if (this.schoolRef3.current) observer.observe(this.schoolRef3.current);
        if (this.expRef.current) observer.observe(this.expRef.current);
        if (this.expRef1.current) observer.observe(this.expRef1.current);
        if (this.expRef2.current) observer.observe(this.expRef2.current);
        if (this.skillRef.current) observer.observe(this.skillRef.current);
    }
    render(){
        return(
            <div className="information-container">
                <div className="about" ref={this.aboutRef}>
                    <h1>Resume</h1>
                <hr className="hr-about"/>
                </div>
                
                <div className="resume-container" >
                        <div className="resume-content" ref={this.resumeContentRef}>
                            <div className="book">
                            <i class="bi-book"></i>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="circle"></div>
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                        </div>
                        <div className="school-bg">
                            <h2 className="education" ref={this.educationRef}>Education</h2>
                            <div ref={this.schoolRef}>
                            <h5 className="school">Philippine State College of Aeronautics</h5>
                            <p className="school-year">2023-2024</p>
                            <p className="school-description">A four (4) year program that will equip students with advance skills, knowledge, and needed competencies to design, develop, test, implement, and evaluate the information system, application and computer network performance to make sure that the changing demand of the airline and aviation industries are met.</p>
                            </div>
                            <div ref={this.schoolRef1}>
                            <h5 className="school-1">Pasay City South High School (Technical Educational Livelihood-ICT)</h5>
                            <p className="school-year">2018-2020</p>
                            <p className="school-description">Pasay City South High School offers a comprehensive senior high school program with a focus on Technical Educational Livelihood-ICT. Students in this strand gain hands-on experience and knowledge in various IT-related fields, preparing them for careers in technology and information systems. The curriculum emphasizes practical skills and technical proficiency, equipping students with the tools they need to succeed in the ever-evolving tech industry.</p>
                            </div>
                            <div ref={this.schoolRef2}>
                            <h5 className="school-2">Pasay City South High School</h5>
                            <p className="school-year">2014-2018</p>
                            <p className="school-description">Pasay City South High School provides a well-rounded education for junior high school students, focusing on general knowledge and a diverse curriculum. Students gain foundational skills and a broad understanding across various subjects, preparing them for future academic and personal growth. The school is dedicated to fostering a supportive learning environment that encourages curiosity and critical thinking.</p>
                            </div>
                            <div ref={this.schoolRef3}>
                            <h5 className="school-2">Villamor Air Base Elementary School</h5>
                            <p className="school-year">2008-2014</p>
                            <p className="school-description">Villamor Air Base Elementary School is a vibrant educational institution dedicated to providing quality education to young learners. With a focus on nurturing academic growth and personal development, the school offers a supportive environment where students are encouraged to explore their interests and develop essential skills. The dedicated faculty and engaging curriculum aim to foster a love of learning and prepare students for future academic endeavors.</p>
                            </div>
                        </div>
                </div>
                <div className="resume-container-1">
                        <div className="resume-content" ref={this.resumeContentExpRef}>
                            <div className="book">
                            <i class="bi-book"></i>
                            </div>
                            <div className="vertical-line-1"></div>
                            <div className="circle-11"></div>
                            <div className="circle-12"></div>
                        </div>
                        
                        <div className="school-bg">
                            <div ref={this.expRef2}>
                            <h2 className="education" >Experience</h2>
                            </div>

                            <div ref={this.expRef}>
                            <h5 className="school">DOTA Aero Aviation Services Inc.</h5>
                            <p className="school-year">2023-2024</p>
                            <p className="school-description">During my OJT, we developed systems for Payroll, Leave Monitoring, Evaluation, Uniform/Suspension, Government ID, Overtime, and Inventory. I also assisted with DOTA accounts payable and managed expenses from 2021 to 2024.</p>
                            </div>

                            <div ref={this.expRef1}>
                            <h5 className="school-1">Overseas Ac﻿ademy Skills and Assessment Center Inc.</h5>
                            <p className="school-year">2019-2020</p>
                            <p className="school-description">To be able to enroll and input information of applicants in the system.</p>
                            </div>
                        </div>
                </div>

                <div className="resume-container-2" ref={this.skillRef}>
                    <h2 className="education">My Skills</h2>
                    <div className="skills-container">
                        <h5 className="skills-margin"><span className="skills-title">Web Development</span> <span className="skills-percent">50%</span></h5>
                        <input 
                            className="input-dev"
                            type='range'
                            value='50'
                            readOnly
                        />

                        <h5 className="skill-margin"><span className="skills-title">Java Programming</span> <span className="skills-percent">50%</span></h5>
                        <input 
                            className="input-dev"
                            type='range'
                            value='50'
                            readOnly
                        />


                        <h5 className="skill-margin"><span className="skills-title">Designing</span> <span className="skills-percent">50%</span></h5>
                        <input 
                            className="input-dev"
                            type='range'
                            value='50'
                            readOnly
                        />

                    </div>
                </div>
                
                <div className="sepra"></div>
            </div>
        )
    }
}

export default Resume;