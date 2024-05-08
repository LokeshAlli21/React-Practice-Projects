import React from 'react'

function Footer() {
  return (
    <div className='relative bottom-0 px-6 pt-20 bg-gray-100 border'>
        <div className='flex flex-wrap items-center justify-evenly'>
            <div className='flex items-center gap-0 text-3xl font-bold'>
                <p className='text-gray-400 '>your</p>
                <p className='text-orange-500 '>Logo</p>
            </div>
            <ul className='flex items-center justify-between space-x-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>GitHub</li>
            </ul>
        </div>
        <div className='p-10 '>
            <hr className='mb-6 ' />
            <p>copyright &copy; 2024</p>
        </div>
    </div>
  )
}

export default Footer
