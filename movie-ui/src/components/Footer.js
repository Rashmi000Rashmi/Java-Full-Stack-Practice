import React from 'react'

const footer = () => {
  return (
    <footer className='w-full bg-black text-white py-4'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-lg font-bold'>My Website</h2>
          <p className='text-sm'>© 2023 My Website. All rights reserved.</p>
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li><a href='#privacy' className='hover:text-gray-400'>Privacy Policy</a></li>
            <li><a href='#terms' className='hover:text-gray-400'>Terms of Service</a></li>
            <li><a href='#contact' className='hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
