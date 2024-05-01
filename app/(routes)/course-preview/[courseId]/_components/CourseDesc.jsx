import React from 'react'
import Markdown from 'react-markdown'

const CourseDesc = ({courseInfo}) => {
    if (!courseInfo) {
        return <div>
            No Course Info here
        </div>
    }
  return (
    <div>
        <h2 className='text-[2rem] font-semibold'>{courseInfo.name}</h2>
        <h2 className='text-sm text-gray-500'>@{courseInfo.author}</h2>

        <div className='m-4'>

        <h2 className='mt-5 text-[17px] font-semibold'>New Learning begins</h2>
        <Markdown className='text-[15px] font-light mt-2 leading-8'>{courseInfo.description}</Markdown>
        </div>
    </div>
  )
}

export default CourseDesc