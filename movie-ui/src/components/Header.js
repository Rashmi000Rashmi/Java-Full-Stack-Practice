import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';

const Header = () => {
  const navigation = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Locations",
      href: "/locations"
    },
    {
      label: "Book Online",
      href: "/book-online"
    },
    {
      label: "Contact Us",
      href: "/contact"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle search form submission
  };

  return (
    <header className='fixed top-0 w-full h-16 bg-black text-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-12 h-full'>
        <div className='flex items-center'>
          <img
            src={logo} // Ensure the path is correct
            alt='logo'
            className='h-10'
          />
        </div>
        <nav className='flex items-center'>
          <form className='flex items-center bg-gray-800 rounded-md overflow-hidden' onSubmit={handleFormSubmit}>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={handleInputChange}
              className='bg-gray-800 text-white px-2 py-1 focus:outline-none'
            />
            <button type='submit' className='px-2 py-1 bg-gray-800'>
              <FaSearch className='text-white' />
            </button>
          </form>
          <ul className='flex space-x-4 ml-4'>
            {navigation.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className='hover:text-gray-400'>{item.label}</Link>
              </li>
            ))}
            <li><AccountCircleIcon className='cursor-pointer hover:text-gray-400' /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;