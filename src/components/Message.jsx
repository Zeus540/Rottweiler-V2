import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Message extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
        return (
            <div className="MessageHolder">
                <div className="TextHolder1 Relative Overflow-x">
                <h1 data-aos='slide-up'>ADOPT A PUPPY</h1>
                </div>
                <div className="TextHolder2 Relative Overflow-x">
                <h2 className="Relative" data-aos='slide-up'>SAVE A LIFE</h2>
                </div>
                <div className="TextHolder3 Relative Overflow-x">
                <h3 className="Relative" data-aos='slide-up'>BUILD A HOME</h3>
                </div>
            </div>
        )
    }
}

export default Message
