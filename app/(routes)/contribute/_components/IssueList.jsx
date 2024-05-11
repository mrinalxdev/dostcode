import React from 'react'
import IssueCard from './IssueCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const IssueList = () => {
    const Issue = [
        {
            id: 1,
            name: "Todo app",
            img: 'https://imgs.search.brave.com/iKKfxPCK27H-OZffkoZVPnqrOMwsY0IkaegAjj7sL3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc.svg',
            tags: ['javascript', 'react', 'node js', 'MongoDB', 'Express', 'Prisma'],
            author: "Utkarsh"
        },
        {
            id: 2,
            name: "Todo app",
            img: 'https://imgs.search.brave.com/iKKfxPCK27H-OZffkoZVPnqrOMwsY0IkaegAjj7sL3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc.svg',
            tags: ['javascript', 'react', 'node js'],
            author: "Utkarsh"
        },
        {
            id: 3,
            name: "Todo app",
            img: 'https://imgs.search.brave.com/iKKfxPCK27H-OZffkoZVPnqrOMwsY0IkaegAjj7sL3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc.svg',
            tags: ['javascript', 'react', 'node js'],
            author: "Utkarsh"
        },
        {
            id: 4,
            name: "Todo app",
            img: 'https://imgs.search.brave.com/iKKfxPCK27H-OZffkoZVPnqrOMwsY0IkaegAjj7sL3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc.svg',
            tags: ['javascript', 'react', 'node js'],
            author: "Utkarsh"
        },
        {
            id: 5,
            name: "Todo app",
            img: 'https://imgs.search.brave.com/iKKfxPCK27H-OZffkoZVPnqrOMwsY0IkaegAjj7sL3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/Lzg0L1Nwb3RpZnlf/aWNvbi5zdmc.svg',
            tags: ['javascript', 'react', 'node js'],
            author: "Utkarsh"
        },

    ]
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
            <div className='flex flex-wrap'> 
                {Issue?.map((item) => {
                    return (<IssueCard item={item} />)
                })}
            </div>

        </div>
    )
}

export default IssueList
