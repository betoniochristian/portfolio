import React from 'react'
import './App.css'

class Html extends React.Component{
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Product-Landing-Page" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/product-landing-page.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Project Landing Page</h5>
                    <p className="text-project">HTML/CSS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Technical-Documentation" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/technical-html.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Technical Document</h5>
                    <p className="text-project">HTML/CSS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Survey-Form" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/survey-html.jpg`}
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