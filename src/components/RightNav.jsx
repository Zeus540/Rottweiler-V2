import React from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";

const Ul = styled.ul`
  z-index: 500;
  list-style: none;
  letter-spacing:0.3vw;
  font-weight:bold;
  display: flex;
  flex-flow: row nowrap;
  margin:1vw 5vw 1vw 0vw;
  
  li {
    padding: 0.5vw 1.5vw;
  }
  @media (max-width: 425px) {
    flex-flow: column nowrap;
    background-color: #1c1c1c;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin:0vw;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 2vw 5vw;
  }
`
const ListItem = styled.li`
list-style:none;
color:white;
margin:0px 0px
transition: ease-in 200ms;
height:auto;
text-transform:uppercase;
font-size:12px;


`

const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
        
      
      <Link 
        activeClass="active"
        to="HOME"
        spy={true}
        smooth={true}
        offset={0}
        duration= {250}
        ><ListItem >HOME</ListItem>
        
      </Link>
     
 
      <Link
        activeClass="active"
        to="ADOPT"
        spy={true}
        smooth={true}
        offset={-40}
        duration= {250}
        ><ListItem >ADOPT A PUPPY</ListItem>
      </Link>  
        
      <Link
        activeClass="active"
        to="INFO"
        spy={true}
        smooth={true}
        offset={-40}
        duration= {250}
        ><ListItem >INFO</ListItem>
      </Link>

      <Link 
        activeClass="active"
        to="ContactMe"
        spy={true}
        smooth={true}
        offset={-40}
        duration= {250}
        ><ListItem >Contact</ListItem>
      </Link>
     
    </Ul>
  )
}

export default RightNav