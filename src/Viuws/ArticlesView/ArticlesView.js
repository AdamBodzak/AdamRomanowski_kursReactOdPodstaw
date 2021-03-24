import React from 'react';
import ListWrapper from '../../components/ListWraper/ListWrapwer';
import AppContext from '../../context';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.article}/>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;