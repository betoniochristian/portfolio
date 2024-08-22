import React from 'react'
import './App.css'

class ReactProject extends React.Component{
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Calculator-React" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/calculator-react.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Calculator</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Drum-Machine" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/drum-machine-react.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Drum Machine</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Clock-React" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/clock-react.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Pomodoro Clock</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Markdown-React" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/markdown-react.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Markdown</h5>
                    <p className="text-project">React</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/colorChange-React" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/backgroundChanger-react.jpg`}
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