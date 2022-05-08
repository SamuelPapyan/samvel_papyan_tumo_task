import React from 'react';

class ConnectionError extends React.Component{
    render()
    {
        return(
            <div id="connection-error-id">
                <h1>Connection Fault</h1>
                <p>Connection Failed. Try again later.</p>
            </div>
        );
    }
}

export default ConnectionError;