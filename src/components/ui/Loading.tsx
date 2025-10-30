"use client";

import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import LogoCodeByPittana from './LogoCodeByPittana';
import LogoDefs from './LogoDefs';


const loadingContainerVariants: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const circleVariants: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 2,
    },
  },
};

const innerContentVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

// --- 2. Componente Loading ---
const Loading = () => {
  const neonColors = ["#f0f", "#9e99ff", "#0ff"];
  const bodyGradient = ["#af48d5", "#9d9ae1", "#d3c4a6"];
  const fillGradient = ["#241b21", "#0f0e08", "#010404", "#000"];

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-background"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
      exit="start"
    >
      <motion.div className="relative flex items-center justify-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-75 -60 350 350"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
          role="img"
        >
          <LogoDefs
            neonColors={neonColors}
            bodyGradient={bodyGradient}
            fillGradient={fillGradient}
          />

          <motion.circle
            cx="100"
            cy="115"
            r="150"
            fill="none"
            stroke="#fff"
            strokeWidth={4}
          />

          <motion.circle
            cx="100"
            cy="115"
            r="150"
            fill="none"
            stroke="url(#a)"
            strokeWidth={6}
            filter="url(#neon-glow)"
            variants={circleVariants}
            initial="animate"
            animate="animate"
          />

          <motion.g
            transform="translate(-10 -25) scale(1.2)"
            variants={innerContentVariants}
            initial="animate"
            animate="animate"
          >
            <motion.path
              strokeWidth={2}
              stroke="url(#b)"
              fill="url(#c)"
              d="M34.3 201.9454 88.2 201.9454 88.2 160 115 160A.9.8765 0 00115 37.1576L34.3 37.1576 34.3 201.9454Z"
            />

            <g transform="translate(-100 -73) scale(1.14)">
              <motion.path
                stroke="url(#gold-highlight)"
                fill="url(#d)"
                strokeWidth={1.5}
                d="m143.8523 155.9757a1.5552 1.5552 90 00.4319 1.0079l13.2075 13.2474a4.4064 4.4064 90 01-.0496 6.0161 4.2912 4.2912 90 01-6.0598.0933l-17.2645-17.3118a4.4064 4.4064 90 010-6.1057l23.2992-23.3567a4.32 4.32 90 016.1057 0 4.4064 4.4064 90 01-.0002 6.1055l-19.2672 19.2673a1.5552 1.5552 90 00-.403 1.0367z"
              />
              <motion.path
                stroke="url(#gold-highlight)"
                fill="url(#d)"
                strokeWidth={1}
                d="M173.7627 187.8423l18.1921-63.4433a4 4 106 00-9.6126-2.7564l-18.1921 63.4433a1 1 16 009.6126 2.7564Z"
              />
              <motion.path
                stroke="url(#gold-highlight)"
                fill="url(#d)"
                strokeWidth={1.5}
                d="m215.1477 153.9753a1.5552 1.5552-90 00-.4319-1.0079L201.5083 139.72a4.4064 4.4064-90 01.0496-6.0161 4.2912 4.2912-90 016.0598-.0933l17.2645 17.3118a4.4064 4.4064-90 010 6.1057l-23.2992 23.3567a4.32 4.32-90 01-6.1057 0 4.4064 4.4064-90 01.0002-6.1055l19.2672-19.2673a1.5552 1.5552-90 00.403-1.0367z"
              />
            </g>
          </motion.g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
