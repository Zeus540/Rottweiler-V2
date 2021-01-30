import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container =styled.div`
border:none;
color:white;
display: flex;
justify-content: center;
flex-direction:column; 
font-family:arial; 
background: #a24c20;
padding-bottom:50px;
@media(max-width:678px){
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
}
`

const Form =styled.form`
display:flex;
flex-direction:column;
margin:0 auto;
justify-content:space-around;
@media(max-width:425px){
  width:80vw;
}
`

const Input =styled.input`
border:none;
background:transparent;
min-height:35px;
margin-bottom:5px;
margin-top:5px;
color:aliceblue;
width:100%;
border-bottom:2px solid white;
@media(max-width:786px){
    width:100%;
    
  }

`

const Validate =styled.input`
border:none;
border:none;
border-bottom:2px solid white;
min-height:35px;
margin-top: 10px;
margin-bottom:5px;
color:aliceblue;
background:transparent;
@media(max-width:786px){
    width:100%;
    
  }
`

const Submit=styled.input`
border:none;
min-height:40px;
background: #1c1c1c;
margin-bottom:5px;
margin-top:15px;
color:white;
padding:0px 15px;
@media(max-width:786px){
    width:100%;
    
  }

`

const Label =styled.label`
display:flex;
flex-direction:column;
color:white;
font-size: 1.4vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 5vw;
  
   }
`

const Textarea =styled.textarea`
border:none;
border-left:2px solid var(--secondary-color);
border-bottom:2px solid var(--secondary-color);
margin-bottom:20px;
margin-top:10px;
background:transparent;
color:white;
min-width:51vw;
@media(max-width:786px){
    width:100%;
    
  }
`

const Field =styled.fieldset`

`

const MainHeading =styled.h1`
font-size: 8vw;
color:white;
font-family:arial;
text-align:center;
font-weight:bolder;
overflow:hidden
    margin: 5vw 0% 5vw 0%;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 10vw;
  margin: 15vw 0% 15vw 0%;
   }
`

const MainHeadingContainer = styled.div`
  overflow: hidden;

      @media (min-width: 1px) and (max-width: 426px) {
    
        
        }
  `

class Contact extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }
    render() { 
        return (
            
           <Container id="Contact">
                  <MainHeadingContainer>
          <MainHeading data-aos='slide-up'>CONTACT ME</MainHeading>
          </MainHeadingContainer>
               <div id="message" class="c-message"></div>
            <Form method="post" action="contact.php" name="contactform" id="contactform" class="form c-form">
            
            <Field>
                          <Label htmlFor="name">Name</Label>
                          
              <Input name="name" type="text" id="name" placeholder="Your Name" />
                          &nbsp;
                          <Label htmlFor="email">Email</Label>
                          
              <Input name="email" type="text" id="email" placeholder="Your E-mail" />
                          &nbsp;
                          <Label htmlFor="comments">Message</Label>
                          &nbsp;  
              <Textarea name="comments" id="comments" placeholder="Message" rows="8" cols="50" ></Textarea>
  
                          <Label htmlFor="verify">Verify</Label>
                          
              <Validate name="verify" type="text" id="verify" placeholder="How much is 3 + 1 =" />
                         
                          <br/>
              <Submit type="submit" class="submit btn outline" id="submit" value="Send" />
            </Field>
          </Form>
            </Container>
         );
    }
}
 
export default Contact;