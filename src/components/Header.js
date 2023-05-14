import React from 'react'


export const Header=()=>{

    return(
        <ul className="flex">
            <li className='flex-auto flex justify-center align-center w-28 cursor-pointer '>HOME</li>
            <li className='flex-auto flex justify-center align-center w-28 cursor-pointer '>MARKETPLACE</li>
            <li className='flex-auto flex justify-center align-center w-28 cursor-pointer '>BLOG</li>
            <li className='flex-auto flex justify-center align-center w-28 cursor-pointer '>ROADMAP</li>
        </ul>

    )
}