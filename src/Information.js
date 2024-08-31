import React from 'react'
import Content from './Content'
import './App.css'

class Information extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return(
            <div className='information-container'>
                <div className="about">
                    <h1>About Me</h1>
                <hr className="hr-about"/>
                </div>
                <Content />
            </div>
        )
    }
}

export default Information;