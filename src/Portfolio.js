import React from 'react';
import Personal from './Personal';
import './App.css';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="portfolio-container">
                <img 
                    src={`${process.env.PUBLIC_URL}/images/BETONIO%2C%20CHRISTIAN%20C.%20-%20ID%20Photo.png`}  
                    alt="1x1" 
                    className="small-image"
                />
                <p className="personal-name">Christian C. Betonio</p>
                <hr className="hr-new"/>

                <div className="personal-information">
                     <Personal />
                </div>

                <div className="social-container">
                        <a href="https://www.facebook.com/betoniochristian/" target='_blank'><i className="bill bi-facebook"></i></a>
                        <a href="#"><i class="bill bi-twitter"></i></a>
                        <a href="https://www.instagram.com/christian.betonio/" target='_blank'><i className="bill bi-instagram"></i></a>
                </div>

                <div className="sepra"></div>
            </div>
        );
    }
}

export default Portfolio;
