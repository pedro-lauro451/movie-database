import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import './css/search.css';

const Search = () => {
    const {searchParam, handleOnChange, handleSubmit} = useContext(GlobalContext);

    return(
        <div className="search_bar">
            <input className="search" value={searchParam} onChange={handleOnChange} name='search' placeholder='Search'/>
            <button className="btn" onClick={handleSubmit}>Search</button>
            <span className="appName"><strong>Movie Data</strong></span>
        </div>
    )
}

export default Search;