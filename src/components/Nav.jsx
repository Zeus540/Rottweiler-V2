import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Nav extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
        return (
            <div className="Holder">
                <ul className="List" data-aos='slide-up'>
                    <li>HOME</li>
                    <li>GROOMING</li>
                    <li>TRAITS</li>
                    <li>GALLERY</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        )
    }
}

export default Nav
