import React from 'react'
import Content from './Content'
import './App.css'

class Information extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
        this.aboutRef = React.createRef();
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
                    entry.target.classList.add('animate');
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (this.aboutRef.current) observer.observe(this.aboutRef.current);
    }
    render(){
        return(
            <div className='information-container'>
                <div className="about" ref={this.aboutRef}>
                    <h1>About Me</h1>
                <hr className="hr-about"/>
                </div>
                <Content />
            </div>
        )
    }
}

export default Information;