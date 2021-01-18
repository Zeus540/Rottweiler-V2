import React, { Component } from 'react'
import Puppy from '../images/puppy.png'

export class PuppySection extends Component {
    render() {
        return (
            <div className="PuppySectionHolder Flex" id="ADOPT">
              <div className="LeftSection Flex">
                <h1>THINK YOU ARE READY ?</h1>
                <h2>WELCOME HOME YOUR FIRST</h2>
                <h3>ROTTWEILER PUPPY</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dicta illo nobis dolorem eligendi repellendus, eaque a. Voluptas, consequuntur ad?</p>
                <button>CLICK HERE</button>
             </div>

                <div className="RightSection">
                    <img src={Puppy} alt=""/>
                </div>
            </div>
        )
    }
}

export default PuppySection
