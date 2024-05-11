import React from 'react'
import IssueList from './_components/IssueList'

const Page = () => {
    
    return (
        <div className='p-5'>
            <div className="flex gap-5 items-center bg-white p-5 rounded-md">
                <div>
                    <h2 className="text-[2rem] font-bold">
                        Dare to{" "}
                        <span className="bg-yellow-300 rounded-tl-[100px] rounded-br-[100px]">
                            Solve
                        </span>
                    </h2>
                    <h2 className="text-gray-400">Explore, Learn and create Solutions for Open Source Challenges</h2>
                </div>
            </div>
            <IssueList/>
        </div>
    )
}

export default Page
