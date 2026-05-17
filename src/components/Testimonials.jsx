import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import Title from './Title'
import assets from '../assets/assets'

const TestimonialCard = ({ testimonial, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const articleRef = useRef(null)

  const handleMouseMove = (e) => {
    const bounds = articleRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <motion.article
      key={testimonial.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      ref={articleRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className='relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 hover:scale-103 transition-all duration-400'
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div className='relative z-10 h-full rounded-[10px] bg-white dark:bg-gray-900 p-6'>
        <span className='absolute right-5 top-5 text-5xl leading-none text-primary/20'>&ldquo;</span>

        <div className='mb-4 flex items-center gap-3'>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className='h-12 w-12 rounded-full object-cover ring-1 ring-primary/20'
          />
          <div>
            <p className='font-bold text-gray-900 dark:text-white'>{testimonial.name}</p>
            <p className='text-sm text-gray-500 dark:text-white/70'>{testimonial.role}</p>
          </div>
        </div>

        <p className='text-sm leading-6 text-gray-600 dark:text-white/80'>{testimonial.quote}</p>
      </div>
    </motion.article>
  )
}

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Samantha Lee',
      role: 'Head of Growth, Finchly',
      quote:
        'Agency AI helped us relaunch our campaigns in just three weeks and lifted qualified leads by 42%. The team feels like an extension of our own.',
      image: assets.testimonial_samantha,
    },
    {
      name: 'Marcus Rivera',
      role: 'Founder, North Harbor',
      quote:
        'From strategy to delivery, everything was clear, fast, and performance-driven. We finally have a brand voice that converts across every channel.',
      image: assets.testimonial_marcus,
    },
    {
      name: 'Ava Thompson',
      role: 'Marketing Director, Solvera',
      quote:
        'Their creative direction and content systems gave our small team enterprise-level momentum. We saw stronger engagement in the first month.',
      image: assets.testimonial_ava,
    },
  ]

  return (
    <motion.section
      id='testimonials'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Client testimonials'
        desc="Real feedback from brands we've partnered with to drive growth through strategy, creative, and execution."
      />

      <div className='grid w-full max-w-6xl gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default Testimonials
