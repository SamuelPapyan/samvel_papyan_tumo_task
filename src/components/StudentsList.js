import React from 'react';
import {Link} from 'react-router-dom';
import StudentTable from "./StudentTable";
import {getAllStudents} from "../api/students.js";
import {withHooksHOCNavigate} from "./withHooksHOC.js";

class StudentsList extends React.Component
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
        document.title = "Students List";
        getAllStudents().then(res=>{
            if(res.success){
                this.setState({data:res.data})
            }
        }).catch(()=>{
            this.setState({connected:false});
        });
    }
    searchEvent(){
        this.props.navigate(`/search?q=${this._searchQueryElem.value}`)
    }
    render()
    {
        return(
            <div id="students-list-body">
                <h1>Students List</h1>
                <div id="search-field">
                    <input type="text" id="search-query" ref={(a)=>this._searchQueryElem=a} style={{width:500}}/>
                    <button id="search-button" onClick={this.searchEvent} className="btn btn-primary">Search</button>
                </div>
                <StudentTable data={this.state.data} connected={this.state.connected}/>
                <Link to="/create" className="btn btn-primary">Create User</Link>
            </div>
        )
    }
}

export default withHooksHOCNavigate(StudentsList);