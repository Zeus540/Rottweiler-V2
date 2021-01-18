
import React, {useState,useEffect} from 'react'
import GridLoader from "react-spinners/GridLoader";
import './scss/App.scss';
import NavBar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import PuppySection from './components/PuppySection.jsx';
import Message from './components/Message.jsx';
import TabSection from './components/TabSection.jsx';

function App() {
  
   const [loading, setLoading] = useState(false);
  
   useEffect(() =>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },5000)
   },[])

  return (
    <div className="black">
    {
      loading ?
      <div className="spinner-container">
      <GridLoader 
      color={"#a34d20"} 
      loading={loading} 
      size={10}/>
      </div>
      :

      <div>

      <NavBar/>
      <Header/>
      <PuppySection/>
      <Message/>
      <TabSection/>
      </div>
    }
    </div>
  )
  
}

export default App

