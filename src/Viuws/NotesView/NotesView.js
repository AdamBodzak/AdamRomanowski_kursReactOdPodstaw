import React from 'react';
import ListWrapper from '../../components/ListWraper/ListWrapwer';
import AppContext from '../../context';

const NotesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.note}/>
        )}
    </AppContext.Consumer>
);

export default NotesView;