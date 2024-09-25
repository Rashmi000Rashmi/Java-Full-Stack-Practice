import React from 'react';
import logo from '../assests/logo.png';


const Header = () => {
  return (
    <header className='fixed top-0 w-full h-16 bg-black text-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-4 h-full'>
        <div className='flex items-center'>
          <img
            src={logo} // Ensure the path is correct
            alt='logo'
            className='h-10'
          />
          <h1 className='ml-4 text-xl font-bold'>My Website</h1>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li><a href='#home' className='hover:text-gray-400'>Home</a></li>
            <li><a href='#about' className='hover:text-gray-400'>About</a></li>
            <li><a href='#services' className='hover:text-gray-400'>Services</a></li>
            <li><a href='#contact' className='hover:text-gray-400'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;