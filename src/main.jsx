import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Download } from './routes/Download'
import TopBar from './components/NavBar'
import { Home } from './routes/Home'
import { Guide } from './routes/Guide'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Guide' element={<Guide />} />
        <Route path='/Download' element={<Download />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
