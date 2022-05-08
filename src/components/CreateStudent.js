import React from "react";
import {Link} from "react-router-dom";
import {addStudent} from "../api/students.js";
import {withHooksHOCNavigate} from './withHooksHOC.js'

class CreateStudent extends React.Component
{
    constructor(props){
        super(props)
        this.submitForm = this.submitForm.bind(this);
        this.state ={
            errors:""
        }
    }
    submitForm(event){
        event.preventDefault();
        const firstName = this._firstNameElem.value;
        const lastName = this._lastNameElem.value;
        const username = this._userNameElem.value;
        const password = this._passwordElem.value;
        const email = this._emailElem.value;
        addStudent({firstName,lastName,username,password,email}).then(res=>{
            if(res.success){
                this.props.navigate('/');
            }
            else{
                if(res.validationErrors){
                    const listItems = res.validationErrors.map((value, index)=>{
                        return <li key={index}>{value.message}</li>
                    });
                    this.setState({
                        errors:<ul className="validation-errors">{listItems}</ul>
                    })
                    res.validationErrors.forEach(value=>{
                        document.querySelector(`input[name="${value.field}"]`)
                            .classList.add('validation-error-input');
                    });
                }
            }
        }).catch(()=>{
            this.props.navigate('/error');
        });
    }
    componentDidMount() {
        document.title = "Create Student";
    }

    render() {
        return(
            <div id="create-student-body">
                <h1>Create Student</h1>
                {this.state.errors}
                <form method="POST" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label htmlFor="first-name-field">First Name</label><br/>
                        <input className="form-control" id="first-name-field" type="text" name="first-name" ref={(a)=>this._firstNameElem = a}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name-field">Last Name</label><br/>
                        <input className="form-control" id="last-name-field" type="text" name="last-name" ref={(a)=>this._lastNameElem = a}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username-field">Username</label><br/>
                        <input className="form-control" id="username-field" type="text" name="username" ref={(a)=>this._userNameElem = a}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-field">Password</label><br/>
                        <input className="form-control" id="password-field" type="password" name="password" ref={(a)=>this._passwordElem = a}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email-field">Email</label><br/>
                        <input className="form-control" id="email-field" type="text" name="email" ref={(a)=>this._emailElem = a}/>
                    </div>
                    <br/>
                    <input type="submit" value="Create" className="btn btn-primary"/>
                    <Link to="/" className="btn btn-default">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default withHooksHOCNavigate(CreateStudent)