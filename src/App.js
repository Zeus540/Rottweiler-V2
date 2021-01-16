
import React, {useState,useEffect} from 'react'
import GridLoader from "react-spinners/GridLoader";
import './scss/App.scss';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import PuppySection from './components/PuppySection.jsx';
import Message from './components/Message.jsx';

function App() {
  
   const [loading, setLoading] = useState(false);
  
   useEffect(() =>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },4000)
   },[])

  return (
    <div className="black">
    {
      loading ?
      <div className="spinner-container">
      <GridLoader 
      color={"white"} 
      loading={loading} 
      size={10}/>
      </div>
      :

      <div>

      <Nav/>
      <Header/>
      <PuppySection/>
      <Message/>

      </div>
    }
    </div>
  )
  
}

export default App

