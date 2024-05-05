"use client"
import React, { useEffect, useState } from 'react'
import CourseDesc from './_components/CourseDesc'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnroll from './_components/CourseEnroll'
import CourseContent from './_components/CourseContent'

const CoursePreview = ({params}) => {
    const [courseInfo, setCourseInfo] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        params && getCourseInfoById();
    },[params])

    const getCourseInfoById = () => {
        GlobalApi.getCourseById(params?.courseId).then(resp => {
            setCourseInfo(resp?.courseList)
            setLoading(false)
        })
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title, Video, Description  */}
        <div className='col-span-2 bg-white p-3'>
            <CourseDesc courseInfo={courseInfo} />
        </div>

        {/* Course COntent */}
        <div>
                {!loading && (
                    <>
                        <CourseEnroll courseInfo={courseInfo} />
                        <CourseContent courseInfo={courseInfo} />
                    </>
                )}
            </div>
    </div>
  )
}

export default CoursePreview