import React from 'react';
import {withHooksHOCNavigate, withHooksHOCSearchQuery} from "./withHooksHOC.js";

class SearchField extends React.Component
{
    constructor(props){
        super(props);
        this.searchEvent = this.searchEvent.bind(this);
    }
    searchEvent(){
        this.props.navigate(`/search?q=${this._searchQueryElem.value}`)
        if(window.location.pathname === '/search')
            window.location.reload()
    }
    componentDidMount() {
        this._searchQueryElem.value = this.props.searchQuery;
    }

    render()
    {
        return(
            <div id="search-field">
                <input type="text" id="search-query" ref={(a)=>this._searchQueryElem = a} style={{width:500}}/>
                <button id="search-button" onClick={this.searchEvent} className="btn btn-primary">Search</button>
            </div>
        );
    }
}

export default withHooksHOCSearchQuery(withHooksHOCNavigate(SearchField))