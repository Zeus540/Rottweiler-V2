import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color:#1c1c1c;
padding: 26px 40px;

`

const Copyright = styled.p`
color:white;
text-align:left;
font-size:18px;
font-family: arial;
    @media(max-width:425px){
        font-size:15px;
        margin: 0px;
}
`

class Footer extends Component {
    render() { 
        return ( 
            
            <Container>
        
               
                <Copyright>Rottweiler Care All Right Reserved &copy; 2020  </Copyright>
               
            </Container>
            
         );
    }
}
 
export default Footer ;