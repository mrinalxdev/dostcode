import React from 'react'
import WeolcomeBanner from './_components/WeolcomeBanner'

const Courses = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      <div className='col-span-2'>
        <WeolcomeBanner />
      </div>
      <div>
        Right Section
      </div>
    </div>
  )
}

export default Courses