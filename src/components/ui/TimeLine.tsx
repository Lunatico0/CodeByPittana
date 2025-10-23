import React from 'react'

const TimeLine = () => {
  return (
    <div className="absolute -left-5 top-0 bottom-0 flex justify-center">
      <div className="relative w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="absolute top-5 size-3 rounded-full bg-primary border border-accent" />
    </div>
  )
}

export default TimeLine
