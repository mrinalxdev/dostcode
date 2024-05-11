import Image from 'next/image'
import React from 'react'

const Page = ({ params }) => {

    return (
        <div className='flex mx-5 my-3 justify-between'>
            <div className='bg-white rounded-xl p-5 w-[65%]'>
                <h2 className="text-[17px] font-semibold">CourseList.find() is not a function</h2>
                <div className='mt-2'>
                    <Image src={'/error_img.png'} width={770} height={150} className='w-full' />
                    <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quae sint reprehenderit repellat vitae magni nisi quos laboriosam incidunt delectus optio dolorem cupiditate maxime, odit, unde corrupti voluptatum? Error quaerat possimus voluptatem sed, quo obcaecati expedita quidem. Sapiente quia aliquam eaque pariatur fuga asperiores magnam, ea omnis quo odit. Similique.</p>
                </div>
            </div>
            <div className='w-[33%] h-fit rounded-xl bg-white flex-col p-5'>
                <div>
                    <h2 className='font-medium text-base'>Project</h2>
                    <h2 className='text-[14px] mt-1'>Todo App</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Creator</h2>
                    <h2 className='text-[14px] mt-1'>Utkasrh</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Labels</h2>
                    <h2 className='text-[14px] mt-1'>Javascript, React, Express</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Active Issue</h2>
                    <h2 className='text-[14px] mt-1'>54</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Github Link</h2>
                    <a href='https://github.com/mrinalxdev/dostcode/issues/1' className='text-[14px] mt-1'>https://github.com/mrinalxdev/dos...</a>
                </div>
            </div>
        </div>
    )
}

export default Page
