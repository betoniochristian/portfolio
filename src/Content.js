import React from 'react'
import './App.css'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return(
            <div className="content">
                    <p className="personal-text-content">Hi, I'm Christian Betonio, an aspiring web developer. I graduated from the Philippine State College of Aeronautics with a Bachelor of Science in Aviation Information Technology. With a strong foundation in technology, I’m eager to apply my skills in web development to create innovative and effective solutions.</p>
                    <p className="text-content">I am excited to continue learning and growing in web development. I’m committed to improving my skills and gaining a deeper understanding of front-end technologies and best practices. By staying curious and exploring new techniques, I aim to enhance my ability to create engaging and effective web experiences. I’m looking forward to the journey ahead and the opportunities it will bring to apply and expand my knowledge.</p>
                
                    <h2 className="h2-content">What I'm Doing</h2>
                

                    <div className="doing">
                        <div className="my-doing">
                            <div className="doing-item">
                            <i class="bi bi-filetype-java"></i>
                                <div className="doing-text">
                                    <h4 className="doing-h">Java Programming</h4>
                                    <p className="doing-p">I am proficient in Java programming and experienced in using MySQL.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-doing1">
                            <div className="doing-item">
                            <i class="bi bi-filetype-html"></i>
                                <div className="doing-text">
                                    <h4 className="doing-h">HTML/CSS</h4>
                                    <p className="doing-p">I am capable of using HTML/CSS.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-doing2">
                            <div className="doing-item">
                            <i class="bi bi-filetype-js"></i>
                                <div className="doing-text">
                                <h4 className="doing-h">JavaScript</h4>
                                <p className="doing-p">I am capable of using basic JavaScript.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-doing3">
                            <div className="doing-item">
                            <i class="bi bi-filetype-jsx"></i>
                                <div className="doing-text">
                                <h4 className="doing-h">React/Bootstrap</h4>
                                <p className="doing-p">I am capable of using basic React/Bootstrap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="h2-content-1">Testimonials</h2>

                    <div className="testominials">
                        
                        <fieldset>
                            <legend className="legend-1"><i class="bi-person-circle"></i></legend>
                            <div className="testominials-1">
                                <h4 className="tes-1">Francis Sombon</h4>
                                <p className="tes-2">As Christian's classmate, I've witnessed his exceptional hard work and dedication. He consistently delivers high-quality results and is great to work with.</p>
                            </div>
                        </fieldset>

                        <fieldset>
                        <legend className="legend-1"><i class="bi-person-circle"></i></legend>
                        <div className="testominials-2">
                                    <h4 className="tes-1">Ruth Cacho</h4>
                                    <p className="tes-2">As Christian's teacher, I've seen firsthand their dependability and positive attitude. Their ability to handle challenges with grace is truly admirable, and their professionalism stands out.</p>
                            </div>
                        </fieldset>


                    </div>



                    <div className="sepra"></div>
                
                </div>
        )
    }
}

export default Content;