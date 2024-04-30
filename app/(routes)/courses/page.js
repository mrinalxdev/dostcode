import React from 'react'
import WeolcomeBanner from './_components/WeolcomeBanner'
import CourseList from './_components/CourseList'

const Courses = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
      <div className='col-span-3'>
        <WeolcomeBanner />

        <CourseList />
      </div>
      <div>
        Right Section
      </div>
    </div>
  )
}

export default Courses