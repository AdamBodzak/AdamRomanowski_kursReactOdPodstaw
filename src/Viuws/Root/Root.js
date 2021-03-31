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
        isEditItem: false,
        editItemValue: {},
    }

    changeExistingItem = (e, newItem, index) => {
        e.preventDefault();

        this.setState(
            function(prevState) {
                const arr = prevState[newItem.type].map((e, indexE) =>
                (index === indexE ? {
                    title: newItem.title,
                    link: newItem.link,
                    image: newItem.image,
                    description: newItem.description,
                }
                :
                    e)
                )
                return(
                    {
                        [newItem.type]: [...arr]
                    }
                )
            }
        );

        this.closeModal();
    }

    addItem = (e, newItem, index) => {
        e.preventDefault();

        this.setState(prevState => ({
            [newItem.type]: [newItem, ...prevState[newItem.type]]
        }));

        this.closeModal();
    }

    removeItem = (type, index) => {
        this.setState(
            function(prevState) {
                const arraySearch = prevState[type];
                arraySearch.splice(index, 1);
                return(
                    {
                        [type]: arraySearch
                    }
                )
            }
        );
    }

    // moveUp = (type, index) => {
    //         this.setState(
    //             function(prevState) {
    //                 const arraySearch = prevState[type];
    //                 if (index !== 0) {
    //                     const moveElement =  arraySearch.splice(index, 1);
    //                     arraySearch.splice(index-1, 0, ...moveElement);
    //                 }
    //                 return (
    //                     {
    //                         [type]: arraySearch
    //                     }
    //                 )
    //             }
    //         );
    // }

    moveItem = (type, index, direction) => {
            this.setState(
                function(prevState) {
                    const arraySearch = prevState[type];
                    const moveElement =  arraySearch.splice(index, 1);
                    arraySearch.splice(index+direction, 0, ...moveElement);
                    return(
                        {
                            [type]: arraySearch
                        }
                    )
                }
            )
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
            isEditItem: false,
        })
    }

    editItem = (type, index) => {
        this.setState(prevState => ({
            isModalOpen: true,
            isEditItem: true,
            editItemValue: {type: type, index: index, ...prevState[type][index]},
        }));
    }

    render() {
        const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem,
            removeItem: this.removeItem,
            closeModal: this.closeModal,
            moveItem: this.moveItem,
            editItem: this.editItem,
            changeExistingItem: this.changeExistingItem,
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
                { isModalOpen && <Modal closeModalFn={this.closeModal} editItemValue={this.state.editItemValue} isEditItem={this.state.isEditItem}/> }
                </AppContext.Provider>
            </BrowserRouter>
        )
    }
};

export default Root;