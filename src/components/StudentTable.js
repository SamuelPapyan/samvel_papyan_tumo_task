import React from 'react';
import TableHeader from "./TableHeader";
import StudentRow from "./StudentRow";

class StudentTable extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:(<tr colSpan={7}>
                <td>Loading...</td>
            </tr>),
            hasData:false
        }
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        if(this.props.data && !this.state.hasData){
            let data;
            if(this.props.data.length > 0)
                data = this.props.data.map((value,index) => <StudentRow key={index} data={value}/>);
            else
                data = <tr colSpan={7}><td>There is no students yet</td></tr>
            this.setState({data:data, hasData:true});
        }
        if(!this.props.connected && !this.state.hasData){
            this.setState({
                data: <tr colSpan={7}>
                    <td>Connection failure. Try again later.</td>
                </tr>,
                hasData:true
            })
        }
    }

    render()
    {
        return(
            <div id="student-table">
                <table className="table">
                    <TableHeader/>
                    <tbody>
                        {this.state.data}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentTable;