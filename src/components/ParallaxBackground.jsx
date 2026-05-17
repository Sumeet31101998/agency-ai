import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const ParallaxBackground = () => {
  const { scrollY } = useScroll()
  const upperBandY = useTransform(scrollY, [0, 1200], [0, 180])
  const middleBandY = useTransform(scrollY, [0, 1200], [0, -140])
  const lowerBandY = useTransform(scrollY, [0, 1200], [0, 110])

  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-black'>
      <motion.div
        style={{ y: upperBandY }}
        className='absolute -left-1/4 top-0 h-[45rem] w-[150vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-primary/18 to-transparent blur-3xl dark:via-primary/24'
      />
      <motion.div
        style={{ y: middleBandY }}
        className='absolute -right-1/3 top-[28rem] h-[38rem] w-[150vw] rotate-[14deg] bg-gradient-to-r from-transparent via-sky-400/16 to-transparent blur-3xl dark:via-sky-400/20'
      />
      <motion.div
        style={{ y: lowerBandY }}
        className='absolute -left-1/4 top-[62rem] h-[42rem] w-[150vw] rotate-[-8deg] bg-gradient-to-r from-transparent via-violet-400/14 to-transparent blur-3xl dark:via-violet-400/18'
      />
    </div>
  )
}

export default ParallaxBackground
