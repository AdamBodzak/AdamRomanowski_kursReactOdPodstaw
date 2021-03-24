import React from 'react';
import AppContext from '../../context';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <p>This ia an Articles View</p>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;