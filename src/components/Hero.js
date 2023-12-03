import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Hero.scss';

export default function Hero() {
  // Define the animation
  const floatAnimation = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0] },
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
  };

  const headingAnimation = {
    initial: { opacity: 0, scale: 0.5 }, // Initial opacity and scale (small size)
    animate: { opacity: 1, scale: 1 }, // Final opacity and scale (full size)
    transition: { duration: 1, delay: 0.5, ease: "easeOut" }, // Animation duration, delay, and easing
  };

  return (
    <section className="hero">
      <div className="container-fluid">
        <motion.div className="svg-wrapper-top svg-left-top" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition}>
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </motion.div>
        <motion.div className="svg-wrapper-top svg-right-top" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition}>
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </motion.div>
        <motion.div className="svg-wrapper-bottom svg-left-bottom" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition}>
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </motion.div>
        <motion.div className="svg-wrapper-bottom svg-right-bottom" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition}>
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </motion.div>
        <div className="content">
        <motion.h1
            className="heading"
            initial={headingAnimation.initial}
            animate={headingAnimation.animate}
            transition={headingAnimation.transition}
          >
            Explore<br /><span>Nirvanis</span>
          </motion.h1>

          <div className="container panel">
            <div className="row">
              <div className="col">
                <motion.img className="img secondary-image" src={require('../images/_4a719ced-a7f5-40e9-84d1-572f006d2efc.jpeg')} alt="01" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
              </div>
              <div className="col">
                <motion.img className="img tertiary-image" src={require('../images/_8e37e493-cb8b-42f4-9e9d-19311c8c4dbe.jpeg')} alt="02" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
                <motion.img className="img tertiary-image" src={require('../images/_83e1d735-88f6-4f51-9180-29df6a0545a9.jpeg')} alt="03" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
              </div>
              <div className="col">
                <motion.img className="img main-image" src={require('../images/ezgif.com-gif-maker (25).gif')} alt="04" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
              </div>
              <div className="col">
                <motion.img className="img tertiary-image" src={require('../images/ezgif.com-gif-maker (27).gif')} alt="05" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
                <motion.img className="img tertiary-image" src={require('../images/asdkjansdkja.JPG')} alt="06" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
              </div>
              <div className="col">
                <motion.img className="img secondary-image" src={require('../images/dsadasdasfdasfm,;sdf,..JPG')} alt="07" initial={floatAnimation.initial} animate={floatAnimation.animate} transition={floatAnimation.transition} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
