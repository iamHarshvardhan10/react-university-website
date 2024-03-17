import React from 'react';
import './App.scss';

import MenuBar from './Components/MenuBar/MenuBar';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Program from './Components/Program/Program';
import Resources from './Components/Resources/Resources';
import Stories from './Components/Stories/Stories'
import Partners from './Components/Partners/Partners'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <MenuBar/>
      <NavBar/>
      <Home/>
      <Program/>
      <Resources/>
      <Stories/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App;