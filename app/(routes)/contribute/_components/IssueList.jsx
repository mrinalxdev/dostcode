"use client";

import React, { useEffect, useState } from 'react'
import IssueCard from './IssueCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import GlobalApi from '@/app/_utils/GlobalApi'


const IssueList = () => {
    const [Issues, setIssues] = useState(null)

    const getIssues = async ()=> {
        const issues = await GlobalApi.getAllIssue()
        console.log(issues.issueLists)
        setIssues(issues.issueLists)
    }

    useEffect(() => {
        getIssues()
    }, [])
    return (
        <div className='px-5 py-2 bg-white rounded-lg mt-5 flex flex-col'>
            <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-sans font-bold text-primary">
                    All Issues
                </h2>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Issues" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Language Specefic</SelectItem>
                        <SelectItem value="system">Frontend Specefic</SelectItem>
                        <SelectItem value="system">Backend Specefic</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-wrap max-[900px]:justify-around max-[400px]:flex-col'>
                {Issues?.map((item) => {
                    return (<IssueCard item={item} />)
                })}
            </div>

        </div>
    )
}

export default IssueList
