import React from 'react';
import {Link} from 'react-router-dom';
import StudentTable from "./StudentTable";
import {getAllStudents} from "../api/students.js";
import {withHooksHOCNavigate} from "./withHooksHOC.js";
import SearchField from "./SearchField";

class StudentsList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            connected:true
        }
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
    render()
    {
        return(
            <div id="students-list-body">
                <h1>Students List</h1>
                <SearchField/>
                <StudentTable data={this.state.data} connected={this.state.connected}/>
                <Link to="/create" className="btn btn-primary">Create Student</Link>
            </div>
        )
    }
}

export default withHooksHOCNavigate(StudentsList);