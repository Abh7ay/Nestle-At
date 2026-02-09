import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// VistaHaven Components
import VistaHavenNavbar from './components/layout/VistaHavenNavbar'
import VistaHavenHero from './sections/VistaHavenHero'
import VistaHavenServices from './sections/VistaHavenServices'
import VistaHavenProperties from './sections/VistaHavenProperties'
import VistaHavenAbout from './sections/VistaHavenAbout'
import VistaHavenTestimonials from './sections/VistaHavenTestimonials'
import VistaHavenFAQ from './sections/VistaHavenFAQ'
import VistaHavenContact from './sections/VistaHavenContact'
import VistaHavenFooter from './components/layout/VistaHavenFooter'

// Original Components (will be replaced gradually)
import Login from './components/login'
import Signup from './components/signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VistaHavenHomePage = () => (
  <div className="min-h-screen">
    <VistaHavenNavbar />
    <main>
      <VistaHavenHero />
      <VistaHavenServices />
      <VistaHavenProperties />
      <VistaHavenAbout />
      <VistaHavenTestimonials />
      <VistaHavenFAQ />
      <VistaHavenContact />
    </main>
    <VistaHavenFooter />
  </div>
)

const App = () => {
  return (
    <Router>
      <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<VistaHavenHomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App