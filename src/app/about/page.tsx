import React from 'react'
import { AboutData } from '@data/about';
import AboutSection from '@sections/About/About';
const page = () => {
  return (
    <div>
      <AboutSection {...AboutData} />
    </div>
  )
}

export default page
