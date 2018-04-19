import React from 'react';

import            './NotFound.less';

class NotFound extends React.Component {

    render() {
        return (
            <div className="screen" id="NotFound">
                <h1>
                    <i className="fa fa-exclamation-circle fa-4x" aria-hidden="true"/>
                    <br/>
                    <span>404 Not Found</span>
                </h1>
            </div>
            );
    }
}

NotFound.displayName = 'NotFound';

export default NotFound;