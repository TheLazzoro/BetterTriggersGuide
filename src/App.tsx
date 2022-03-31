import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TopBar from './components/TopBar'
import Navigation from './components/Navigation'

function App() {

  return (
    <div className="App">
      <TopBar></TopBar>
      <header className="App-header">
        Better Triggers
      <Navigation></Navigation>
      </header>
    </div>
  )
}

export default App
