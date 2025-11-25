import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { reviewsAPI } from '../services/api'
import { toast } from 'react-toastify'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        text: '',
        rating: 5,
        image: '',
    })

    useEffect(() => {
        fetchReviews()
    }, [])

    const fetchReviews = async () => {
        try {
            setLoading(true)
            const response = await reviewsAPI.getAll()
            setReviews(response.data.results || response.data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching reviews:', error)
            // Fallback to static data if API fails
            setReviews([])
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!formData.name || !formData.title || !formData.text) {
            toast.error('Please fill in all required fields')
            return
        }

        try {
            await reviewsAPI.create(formData)
            toast.success('Your review has been submitted! It will be visible after approval.')
            setFormData({
                name: '',
                title: '',
                text: '',
                rating: 5,
                image: '',
            })
            setShowForm(false)
            fetchReviews() // Refresh reviews
        } catch (error) {
            console.error('Error submitting review:', error)
            toast.error('Failed to submit review. Please try again.')
        }
    }

    return (
        <motion.div
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
            whileInView={{opacity:1, x:0}}
            viewport={{once: true}}
            className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Customer 
                <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials </span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories From Those Who Found Home With Us</p>
            
            {/* Submit Review Button */}
            <div className='text-center mb-8'>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                    {showForm ? 'Cancel' : 'Submit a Review'}
                </button>
            </div>

            {/* Review Form */}
            {showForm && (
                <motion.div
                    initial={{opacity:0, y:-20}}
                    animate={{opacity:1, y:0}}
                    className='max-w-2xl mx-auto mb-12 bg-white shadow-lg rounded-lg p-8'
                >
                    <h2 className='text-2xl font-bold mb-6 text-center'>Share Your Experience</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-medium mb-2'>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-medium mb-2'>Title/Position</label>
                            <input
                                type='text'
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-medium mb-2'>Rating</label>
                            <select
                                name='rating'
                                value={formData.rating}
                                onChange={handleChange}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            >
                                <option value={5}>5 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={3}>3 Stars</option>
                                <option value={2}>2 Stars</option>
                                <option value={1}>1 Star</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-medium mb-2'>Review</label>
                            <textarea
                                name='text'
                                value={formData.text}
                                onChange={handleChange}
                                rows='4'
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-medium mb-2'>Image URL (Optional)</label>
                            <input
                                type='url'
                                name='image'
                                value={formData.image}
                                onChange={handleChange}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='https://example.com/image.jpg'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors'
                        >
                            Submit Review
                        </button>
                    </form>
                </motion.div>
            )}
            
            {loading ? (
                <p className='text-center text-gray-500'>Loading reviews...</p>
            ) : reviews.length === 0 ? (
                <p className='text-center text-gray-400'>No reviews available yet. Be the first to share your experience!</p>
            ) : (
                <div className='flex flex-wrap justify-center gap-8'>
                    {reviews.map((review) => (
                        <div key={review.id} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                            {review.image ? (
                                <img className='w-20 h-20 rounded-full mx-auto mb-4 object-cover' src={review.image} alt={review.name} />
                            ) : (
                                <div className='w-20 h-20 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center'>
                                    <span className='text-gray-400 text-2xl'>{review.name.charAt(0).toUpperCase()}</span>
                                </div>
                            )}
                            <h2 className='text-xl text-gray-700 font-medium'>{review.name}</h2>
                            <p className='text-gray-500 mb-4 text-sm'>{review.title}</p>
                            <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                {Array.from({length: review.rating}, (item, index) => (
                                    <img key={index} src={assets.star_icon} alt="" />
                                ))}
                            </div>
                            <p className='text-gray-600'>{review.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default Testimonials
