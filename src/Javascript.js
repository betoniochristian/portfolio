import React from 'react'
import './App.css'

class Javascript extends React.Component{
    render(){
        return(
            <div className='all-project'>
                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Fetch-Pokemon" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/pokemon-js.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Pokemon Search</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Cash-Register-JS" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/cash-register-js.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Cash Register</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/TelephoneNumber-JS" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/telephone-js.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Telephone Number</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/RomanNumeral-JS" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/roman-numeral-js.jpg`}
                    />
                    </a>
                    <h5 className="project-title">Roman Numeral Converter</h5>
                    <p className="text-project">HTML/CSS/JS</p>
                </div>

                <div className="project-container-git">
                    <a className="" href="https://github.com/betoniochristian/Palindrome-JS" target="_blank">
                    <img 
                        className="project-img"
                        src={`${process.env.PUBLIC_URL}/images/palindrome-js.jpg`}
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