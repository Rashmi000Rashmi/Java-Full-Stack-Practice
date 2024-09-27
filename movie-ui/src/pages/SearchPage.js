import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  return (
    <div className='container mx-auto px-8 py-16'>
      <h2 className='text-2xl font-bold mb-4'>Search Results for "{query}"</h2>
      {/* Add logic to fetch and display search results based on the query */}
    </div>
  );
}

export default SearchPage;
