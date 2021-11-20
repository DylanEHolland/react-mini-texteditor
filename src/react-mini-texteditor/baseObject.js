import React from 'react';
import {withRouter} from 'react-router-dom';

class baseObject extends React.Component {
    render = () => {
        return (
            <>
                test
            </>
        )
    }
}

export default withRouter(baseObject);