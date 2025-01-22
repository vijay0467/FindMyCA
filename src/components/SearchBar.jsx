import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex gap-2 mb-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Chartered Accountants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
