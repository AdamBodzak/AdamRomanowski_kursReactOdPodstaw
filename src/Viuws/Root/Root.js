import React from 'react';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import initialState from '../../initialState';

class Root extends React.Component {
    state = {
        twitter: [...initialState.twitter],
        article: [...initialState.article],
        note: [...initialState.note],
        isModalOpen: false,
    }

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem]
        }));

        this.closeModal();
    }

    removeItem = (type, index) => {
        const arrayTitle = this.state[type];
        arrayTitle.splice(index, 1);

        this.setState(prevState => ({
            [type]: arrayTitle
        }
        ));
    }

    moveUp = (type, index) => {
        const arrayTitle = this.state[type];
        if (index !== 0) {
            const moveElement =  arrayTitle.splice(index, 1);
            arrayTitle.splice(index-1, 0, ...moveElement);

            this.setState(prevState => ({
                [type]: arrayTitle
            }
            ));
        };
    }

    moveDown = (type, index) => {
        const arrayTitle = this.state[type];
        const arrLength = arrayTitle.length
        if (index !== (arrLength - 1)) {
            const moveElement =  arrayTitle.splice(index, 1);
            arrayTitle.splice(index+1, 0, ...moveElement);

            this.setState(prevState => ({
                [type]: arrayTitle
            }
            ));
        };
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem,
            removeItem: this.removeItem,
            closeModal: this.closeModal,
            moveUp: this.moveUp,
            moveDown: this.moveDown,
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                <Header openModalFn={this.openModal} />
                <Switch>
                    <Route exact path="/" component={TwittersView} />
                    <Route path="/articles" component={ArticlesView} />
                    <Route path="/notes" component={NotesView} />
                </Switch>
                { isModalOpen && <Modal closeModalFn={this.closeModal}/> }
                </AppContext.Provider>
            </BrowserRouter>
        )
    }
};

export default Root;