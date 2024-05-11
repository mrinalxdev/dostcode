"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const [issueDetails, setIssueDetails] = useState()

    const getIssueDetails = async (issueId) => {
        const res = await GlobalApi.getIssueDetails(issueId)
        console.log(res.issueList)
        setIssueDetails(res.issueList)
    }

    useEffect(() => {
        getIssueDetails(params.issueId)
    }, [])

    return (
        <div className='flex mx-5 my-3 justify-between'>
            <div className='bg-white rounded-xl p-5 w-[65%]'>
                <h2 className="text-[17px] font-semibold">{issueDetails?.errorName}</h2>
                <div className='mt-2'>
                    <Image src={issueDetails?.banner.url} width={770} height={150} className='w-full' />
                    <p className='my-2'>{issueDetails?.description}</p>
                </div>
            </div>
            <div className='w-[33%] h-fit rounded-xl bg-white flex-col p-5'>
                <div>
                    <h2 className='font-medium text-base'>Project</h2>
                    <h2 className='text-[14px] mt-1'>{issueDetails?.issueDetail.name}</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Creator</h2>
                    <h2 className='text-[14px] mt-1'>{issueDetails?.issueDetail.author}</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Labels</h2>
                    <div className='flex text-[14px] mt-1 flex-wrap -ml-1'>
                        {issueDetails?.issueTag.map((tag) => {
                            return <h2 className='mx-[2px] my-[2px] px-[5px] rounded-sm bg-gray-400'>{tag}</h2>
                        })}
                    </div>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Active Issue</h2>
                    <h2 className='text-[14px] mt-1'>{issueDetails?.issueDetail.activeIssues}</h2>
                </div>
                <hr className='w-3/4 mx-auto h-[2px] bg-gray-200 my-6' />
                <div>
                    <h2 className='font-medium text-base'>Github Link</h2>
                    <a href={issueDetails?.issueDetail.githubLink} className='text-[14px] mt-1 cursor-pointer'>Link</a>
                </div>
            </div>
        </div>
    )
}

export default Page
