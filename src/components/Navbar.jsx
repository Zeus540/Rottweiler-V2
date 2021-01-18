import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
background-color: #a34d20;
  padding: 0 0px;
  display: flex;
  font-family:arial;
  justify-content: flex-end;
  position:fixed;
  top:0px;
  z-index:10000;
  width:100%;
  @media (max-width: 425px) {
    background:#a34d20;
    height: 0px;
  }
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav >
      <Burger />
    </Nav>
  )
}

export default Navbar