import React from 'react';
import { Link } from 'react-router-dom';  // For internal navigation

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-4'>
      <div className='container mx-auto px-12 flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-lg font-bold'>My Website</h2>
          <p className='text-sm'>© 2023 My Website. All rights reserved.</p>
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li>
              <Link to="/privacy" className='hover:text-gray-400'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className='hover:text-gray-400'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className='hover:text-gray-400'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
