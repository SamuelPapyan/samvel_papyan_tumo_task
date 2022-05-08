import React from 'react'

class TableHeader extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Nickname</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
        )
    }
}

export default TableHeader