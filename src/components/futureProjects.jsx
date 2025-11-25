import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { futureProjectsAPI } from '../services/api'
import { toast } from 'react-toastify'

const FutureProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(1) // Always show one image at a time
    }
    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await futureProjectsAPI.getAll()
      setProjects(response.data.results || response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching future projects:', error)
      toast.error('Failed to load future projects')
      setLoading(false)
    }
  }

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  if (loading) {
    return (
      <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20">
        <p className="text-center text-gray-500">Loading future projects...</p>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden"
        id="FutureProjects"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Future <span className="underline underline-offset-4 decoration-1 under font-light">Projects</span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Upcoming Developments - Building Tomorrow's Dreams Today
        </p>
        <p className="text-center text-gray-400 mb-8">No future projects available yet.</p>
        {/* Navigation button to Submit Idea */}
        <div className="text-center">
          <a
            href="#SubmitIdea"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Your Idea
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden"
      id="FutureProjects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Future <span className="underline underline-offset-4 decoration-1 under font-light">Projects</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Upcoming Developments - Building Tomorrow's Dreams Today
      </p>

      {/* Navigation button to Submit Idea */}
      <div className="text-center mb-8">
        <a
          href="#SubmitIdea"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Submit Your Idea
        </a>
      </div>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id || index} className="relative flex-shrink-0 w-full flex justify-center">
              <div className="w-full max-w-md">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-14"
                  />
                ) : (
                  <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-200 rounded-lg mb-14 flex items-center justify-center">
                    <p className="text-gray-400">No image available</p>
                  </div>
                )}
                <div className="absolute left-0 bottom-5 flex justify-center w-full">
                  <div className="inline-block bg-white w-5/6 px-4 py-2 shadow-md rounded">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{project.title}</h2>
                    <p className="text-gray-500 text-sm mb-2">{project.description}</p>
                    {project.location && (
                      <p className="text-gray-500 text-sm">
                        {project.estimated_price && `${project.estimated_price} `}
                        <span className="px-1"></span>
                        {project.location}
                      </p>
                    )}
                    {project.expected_completion && (
                      <p className="text-gray-400 text-xs mt-1">
                        Expected: {project.expected_completion}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default FutureProjects

