import React from 'react'
import './App.css'

class Unity extends React.Component{
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/ARMarshalling" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/ar-unity.jpg`}
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