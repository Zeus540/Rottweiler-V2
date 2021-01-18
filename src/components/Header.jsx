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
      <div className="App-header Relative">

      <div className="Relative HeadingHolder1">
       <h1 className="Heading1" data-aos='slide-up'>ROTWEILLER</h1>
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

     <div className="Absolute Scroll " >
     
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRIie3PuxVAQBSE4X9llKAP2tEEGZU4GlKBowFljEQg8LhY2Z1okzvfbMAYSTlQAgLGEMJiuUusAFAAKZBtkClPgOzkHQ14FQcccMABB36PpFn3ma467n7QG3YM9skHkVRfrG8/le+Q5qC8i1J+gsQt3yGVpOrJzQrrA3rGb9XpAgAAAABJRU5ErkJggg==" alt="scroll" className="heartbeat"/>
       
   </div>

   </div>

    )
  }
}

export default Header
