import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navBar';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Awards from './components/awards';
import WeatherFetch from './components/weatherFetch';


function App() {

  const [clicked, setClicked] = useState(false);

  let a = {};
  let dark ="";
  let darkMode="";
    if (clicked) {
      a = {background: 'black', color: 'white' };
      dark ="darkMode";
      darkMode="light mode";
    }
    else {a={}; dark ="";darkMode="dark mode"}

  return (
    <div id="page-top" style={a} className={dark}>
    <NavBar/>
    
    <div className="container-fluid p-0">
    <div><button style={{display:'block', margin:'auto'}} className="btn-info" onClick={() => setClicked(!clicked)}>{darkMode} </button></div>
      <WeatherFetch />
      
      <About />
      <hr className="m-0" />
      <Skills />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Awards />
    </div>

    </div>
  );
}

export default App;


  


