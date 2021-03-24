import React from 'react';
import ListWrapper from '../../components/ListWraper/ListWrapwer';
import AppContext from '../../context';

const TwitterView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.twitter} type='twitter'/>
        )}
    </AppContext.Consumer>
);

export default TwitterView;