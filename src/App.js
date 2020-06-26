import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Awards from './components/awards';
import WeatherFetch from './components/weatherFetch';

function App() {
  return (
    <div id="page-top">
    <NavBar/>
    <div className="container-fluid p-0">
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
