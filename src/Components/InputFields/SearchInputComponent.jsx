import React from "react";
import '../../Css/SearchInput.css'

const SearchInput = ({placeholder, handleChange}) => (
    <input 
        className="searchInput"
        type='search' 
        placeholder= {placeholder} 
        onChange={handleChange} 
    />
)

export default SearchInput