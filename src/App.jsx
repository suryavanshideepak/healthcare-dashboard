import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <div className='app_main'>
        <div className='main-sidebar'>
          <Sidebar/>
        </div>
        <div className='dashboard_section'>
          <Header/>
          <Dashboard/>
        </div>
      </div>
    </>
  )
}

export default App
