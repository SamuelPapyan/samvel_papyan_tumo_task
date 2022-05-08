import React from "react";
import StudentTable from "./StudentTable";
import {Link} from "react-router-dom";
import {searchStudents} from "../api/students.js";
import {withHooksHOCSearchQuery, withHooksHOCNavigate} from "./withHooksHOC.js";
import SearchField from "./SearchField";

class SearchResult extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            connected:true
        }
    }
    componentDidMount() {
        document.title = "Search Result";
        searchStudents(this.props.searchQuery).then(res=>{
            if(res.success){
                this.setState({data:res.data})
            }
        }).catch(()=>{
            this.setState({connected:false});
        })
    }
    render()
    {
        return(
            <div id="students-list-body">
                <h1>Search Result</h1>
                <SearchField/>
                <StudentTable data={this.state.data} connected={this.state.connected}/>
                <Link to="/create" className="btn btn-primary">Create Student</Link>
            </div>
        )
    }
}

export default withHooksHOCNavigate(withHooksHOCSearchQuery(SearchResult));