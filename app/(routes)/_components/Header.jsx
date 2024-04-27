import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-4 bg-white flex justify-between'>
        <div className='flex gap-2 border p-2 rounded-md'>
            <Search className='h-5 w-5'/>
            <input type="text" placeholder='Search...' className='outline-none' />
        </div>
        <div>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Header