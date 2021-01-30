import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  padding: 0 0px;
  display: flex;
  font-family:arial;
  justify-content: flex-end;
  position:sticky;
  top:0px;
  z-index:10000;
  width:100%;
  background: #1c1c1c;
  @media (max-width: 425px) {
    background: #1c1c1c;
    height: 0px;
    position:fixed;
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