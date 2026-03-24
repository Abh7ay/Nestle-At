import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Hero from './sections/Hero'
import Services from './sections/Services'
import Properties from './sections/Properties'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'

// Original Components (will be replaced gradually)
import Login from './components/login'
import Signup from './components/signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => (
  <div className="min-h-screen">
    <main>
      <Hero />
      <Services />
      <Properties />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
)

const App = () => {
  return (
    <Router>
      <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App