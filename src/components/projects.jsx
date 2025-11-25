import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Projects = () => {

  const[currentIndex, setCurrentindex]= useState(0);
  const[cardsToShow,setCardsToShow]= useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(1) // Always show one image at a time
    }
    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentindex((prevIndex)=>(prevIndex+1) % projectsData.length)
  }
  const prevProject = () => {
    setCurrentindex((prevIndex)=> prevIndex === 0 ? projectsData.length -1 : prevIndex -1)
  }

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
     transition={{duration:1}}
     whileInView={{opacity:1, x:0}}
     viewport={{once: true}}

    className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
            <span className='underline underline-offset-4 decoration-1 under font-light'> Completed </span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces , Building Legacies - Explore Our portfolio</p>
       
       {/* Navigation button to Future Projects */}
       <div className='text-center mb-8'>
        <a
          href="#FutureProjects"
          className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'
        >
          View Future Projects
        </a>
       </div>

       {/* --------------- slider button--------------  */} 

       <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject}
         className=' p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects' >
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject}
        className=' p-3 bg-gray-200 rounded mr-2' aria-label='Next Projects' >
            <img src={assets.right_arrow} alt="Next" />
        </button>
       </div>

    
      {/* --------------- project slider container --------------  */} 
      <div className='overflow-hidden'>
        <div className='flex transition-transform duration-500 ease-in-out' 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projectsData.map((project,index)=>(
            <div key={index} className='relative flex-shrink-0 w-full flex justify-center'>
              <div className='w-full max-w-md'>
                <img src={project.image} alt={project.title} className='w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg mb-14' />
                <div className='absolute left-0 bottom-5 flex justify-center w-full'>
                  <div className='inline-block bg-white w-5/6 px-4 py-2 shadow-md rounded'>
                  <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>
                    {project.title}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span className='px-1'></span> {project.location}
                    </p>

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

export default Projects