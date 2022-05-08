import React from 'react'
import {Link} from "react-router-dom";
import {deleteStudent} from "../api/students.js";

class StudentRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "", lastName: "", username: "", password: "", email: "", studentId: ""
        }
        this.removeStudent = this.removeStudent.bind(this)
    }

    componentDidMount() {
        this.setState({
            firstName: this.props.data.firstName,
            lastName: this.props.data.lastName,
            username: this.props.data.username,
            password: this.props.data.password,
            email: this.props.data.email,
            studentId: this.props.data._id
        });
    }

    removeStudent(){
        deleteStudent(this.state.studentId).then(res=>{
            if(res.success)
                window.location.reload()
        }).catch(()=>{
            this.props.navigate('/error')
        })
    }

    render() {
        return (
            <tr>
                <td>{this.state.firstName}</td>
                <td>{this.state.lastName}</td>
                <td>{this.state.username}</td>
                <td>{this.state.password}</td>
                <td>{this.state.email}</td>
                <td>
                    <Link to={`/edit/${this.state.studentId}`} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={this.removeStudent}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default StudentRow;