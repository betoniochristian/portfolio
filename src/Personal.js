import React from 'react'
import './App.css'


class Personal extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="">
                <div className="info-item">
                       <i className="bil bi-envelope"></i>
                        <div className="info-details">
                            <p className="info-type">Email</p>
                            <a className="a-git" href="https://mail.google.com/mail/?view=cm&fs=1&to=betoniochristian22@gmail.com
" target="_blank" rel="noreferrer"><p className="email">betoniochristian22@gmail.com</p></a>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="bil bi-github"></i> 
                        <div className="info-details">
                            <p className="info-type">GitHub</p>
                            <a className="a-git" href="https://github.com/betoniochristian" target='_blank' rel="noreferrer"><p className="email">github.com/betoniochristian</p></a>   
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="bil bi-linkedin"></i> 
                        <div className="info-details">
                            <p className="info-type">LinkedIn</p>
                            <a className="a-git" href="https://www.linkedin.com/in/betoniochristian22/" target='_blank' rel="noreferrer"><p className="email">linkedin.com/betoniochristian22</p></a>   
                        </div>
                    </div>  

                    <div className="info-item">
                        <i className="bil bi-phone"></i>
                        <div className="info-details">
                            <p className="info-type">Phone</p>
                            <p className="email">0995 679 4666</p>   
                        </div>
                    </div>

                    <div className="info-item">
                    <i className="bil bi-balloon"></i>
                        <div className="info-details">
                            <p className="info-type">Birthday</p>
                            <p className="email">November 6, 2001</p>   
                        </div>
                    </div>

                    <div className="info-item">
                    <i className="bil bi-geo-alt"></i>
                        <div className="info-details">
                            <p className="info-type">Location</p>
                            <p className="email">Pasay City</p>   
                        </div>
                    </div>
            </div>
        )
    }
}

export default Personal;