import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Login from './components/login'
import Signup from './components/signup'
import FutureProjects from './components/futureProjects'
import SubmitIdea from './components/submitIdea'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer'

const HomePage = () => (
  <>
    <Header/>
    <About/>
    <Projects/>
    <FutureProjects/>
    <Testimonials/>
    <SubmitIdea/>
    <Contact/>
    <Footer/>
  </>
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