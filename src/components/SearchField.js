import React from 'react';
import {Link} from 'react-router-dom';

class SearchField extends React.Component
{
    render()
    {
        return(
            <div id="search-field">
                <input type="text" id="search-query" style={{width:500}}/>
                <button id="search-button">
                    <Link to="/search">Search</Link>
                </button>
            </div>
        );
    }
}

export default SearchField