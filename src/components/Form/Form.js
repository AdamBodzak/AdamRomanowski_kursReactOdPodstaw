import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import RadioButton from './RadioButton';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
};
const descriptions = {
  twitter: 'favorite twitter account',
  article: 'Article',
  note: 'Note',
};

class Form extends React.Component {
  state = {
    type: this.props.isEditItem === true ? this.props.editItemValue.type : types.twitter,
    title: this.props.isEditItem === true ? this.props.editItemValue.title : '',
    link: this.props.isEditItem === true ? this.props.editItemValue.link : '',
    image: this.props.isEditItem === true ? this.props.editItemValue.image : '',
    description: this.props.isEditItem === true ? this.props.editItemValue.description : '',
  };

handleRadioButtonChange = (type) => (
  this.setState({type: type})
);

handleInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};

  render() {
const { type } = this.state

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>{context.isEditItem === true ? 'Edit ' : 'Add new '}{descriptions[type]}</Title>
            <form
              autoComplete='off'
              className={styles.form}
              onSubmit={(e) => (context.isEditItem === true ?
                context.changeExistingItem(e, this.state, context.editItemValue.index)
                 :
                 context.addItem(e, this.state, context.editItemValue.index)
              )}
            >
              <div className={styles.formOptions}>
                <RadioButton
                  id={types.twitter}
                  checked={type === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </RadioButton>
                <RadioButton
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </RadioButton>
                <RadioButton
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </RadioButton>
              </div>

              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === types.twitter ? "Twitter Name" : "Title"}
              />
              { type !== types.note ?
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={type === types.twitter ? "Twitter Link" : "Link"}
                />
                :
                null
              }
              {type === types.twitter ?
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                  required={false}
                />
                :
                null
              }
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>{ context.isEditItem === true ? 'save changes' : 'add bew item'}</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
};

export default Form;