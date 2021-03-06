import React, { Component } from 'react'
import Dog from '../images/dog.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export class Header extends Component {
  componentWillMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div className="App-header Relative" id="HOME">

      <div className="Relative HeadingHolder1">
       <h1 className="Heading1" data-aos='slide-up'>ROTTWEILER</h1>
     </div>

     <div className="Relative HeadingHolder2">
       <h1 className="Heading2" data-aos='slide-up'>CARE 101</h1>
     </div>

     <div className="Relative SideText" data-aos='slide-left' >
       <h1>MAN'S BEST FRIEND</h1>
   </div>

     <div className="DogImgHolder Relative">
       <img src={Dog} className="Dog" alt="logo"  />
     </div>

  

   </div>

    )
  }
}

export default Header
