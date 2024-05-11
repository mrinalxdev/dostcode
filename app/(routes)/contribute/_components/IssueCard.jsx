import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IssueCard = ({ item }) => {
    return (
        <Link className='w-3/12' href={'/issue-preview/' + item.id}>
            <div className='w-full py-2 rounded-xl hover:shadow-md my-3'>
                <Image
                    src={item.img}
                    width={770}
                    height={150}
                    className="rounded-t-xl object-center h-20 mx-auto"
                />

                <h2 className='my-2 text-center'>{item.name}</h2>
                <div className='flex mx-auto justify-center w-5/6 flex-wrap'>
                    {item.tags.map((tag) => { return <p className='text-xs mx-[2px] my-[2px] px-[5px] rounded-sm bg-gray-400'>{tag}</p> })}
                </div>
            </div>
        </Link>
    )
}

export default IssueCard
