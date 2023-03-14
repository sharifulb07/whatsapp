import React from 'react'
import {Brand,Cta,Navbar }from './components/'
import './App.css';
import { Blog,Features,Header,Footer, Possibility,WhatGPT3 } from './containers'

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />

      </div>
    </div>
  )
}

export default App
