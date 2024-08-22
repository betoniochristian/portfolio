import React from 'react'
import './App.css'

class JavaProject extends React.Component{
    render(){
        return(
            <div className="all-project">
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Payroll-for-PH?tab=readme-ov-file" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/payroll-java.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Payroll System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Overtime-Monitoring-System?tab=readme-ov-file" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/overtime-java.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Overtime Monitoring System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Benefits-Monitoring-System?tab=readme-ov-file" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/benefits-java.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Benefits Monitoring System</h5>
                    <p className="text-project">Java</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Employee-Monitoring-System?tab=readme-ov-file" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/employee-java.jpg`}
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