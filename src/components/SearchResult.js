import React from "react";
import StudentTable from "./StudentTable";
import {Link} from "react-router-dom";
import {searchStudents} from "../api/students.js";
import {withHooksHOCSearchQuery, withHooksHOCNavigate} from "./withHooksHOC.js";

class SearchResult extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            connected:true
        }
        this.searchEvent = this.searchEvent.bind(this);
    }
    componentDidMount() {
        document.title = "Search Result";
        this._searchQueryElem.value = this.props.searchQuery
        searchStudents(this.props.searchQuery).then(res=>{
            if(res.success){
                this.setState({data:res.data})
            }
        }).catch(()=>{
            this.setState({connected:false});
        })
    }
    searchEvent(){
        this.props.navigate(`/search?q=${this._searchQueryElem.value}`)
        window.location.reload()
    }
    render()
    {
        return(
            <div id="students-list-body">
                <h1>Search Result</h1>
                <div id="search-field">
                    <input type="text" id="search-query" ref={(a)=>this._searchQueryElem = a} style={{width:500}}/>
                    <button id="search-button" onClick={this.searchEvent} className="btn btn-primary">Search</button>
                </div>
                <StudentTable data={this.state.data} connected={this.state.connected}/>
                <button>
                    <Link to="/create" className="btn btn-primary">Create User</Link>
                </button>
            </div>
        )
    }
}

export default withHooksHOCNavigate(withHooksHOCSearchQuery(SearchResult));