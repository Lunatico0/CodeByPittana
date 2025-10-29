import React from 'react'
import { AboutData } from '@data/about';
import AboutSection from '@sections/About/About';
import { Suspense } from "react";
import Loading from "@ui/Loading";

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AboutSection {...AboutData} />
      </Suspense>
    </div>
  )
}

export default page
