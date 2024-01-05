import React, { useState, useEffect } from 'react';
import '../App.css';
import countryData from '../resources/countryData.json';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const filteredSuggestions = countryData.filter(country =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(searchText.length > 0);
  }, [searchText]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <div className='searchbox'>
        <input
          type="text"
          placeholder="Type to search Countrys..."
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {showSuggestions && (
        <ul>
          {suggestions.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
