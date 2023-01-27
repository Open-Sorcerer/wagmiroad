import React from 'react'
import Button from '../Button'

export default function Sidebar() {
    const menu = ['Home', 'Products', 'Posts', 'Audience', 'Analytics', 'Payouts', 'Discover', 'Library', 'Help', 'Settings'];
    return (
        <div className='flex flex-col w-48 h-screen bg-black text-white divide-y divide-blue-200'>
            <img src='images/Gumroad_logo.png' className='w-full invert p-8'/>
            {menu.map((item, i) => {
                return (
                    <div key={i} className='py-4 px-8'>
                        <h1 className='text-lg'>{item}</h1>
                    </div>
                )
            })}
        </div>
    )
}