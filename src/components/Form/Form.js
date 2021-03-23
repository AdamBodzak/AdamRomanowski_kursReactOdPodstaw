import React from 'react';
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
  state ={
    activeOption: types.twitter,
  }

handleRadioButtonChange = (type) => (
  this.setState({activeOption: type})
);

  render() {
const { activeOption } = this.state

    return (
        <div className={styles.wrapper}>
        <Title>Add new {descriptions.[activeOption]}</Title>
        <form autoComplete='off' className={styles.form} onSubmit={this.props.submitFn}>
          <div className={styles.formOptions}>
            <RadioButton
              id={types.twitter}
              checked={activeOption === types.twitter}
              changeFn={() => this.handleRadioButtonChange(types.twitter)}
            >
              Twitter
            </RadioButton>
            <RadioButton
              id={types.article}
              checked={activeOption === types.article}
              changeFn={() => this.handleRadioButtonChange(types.article)}
            >
              Article
            </RadioButton>
            <RadioButton
              id={types.note}
              checked={activeOption === types.note}
              changeFn={() => this.handleRadioButtonChange(types.note)}
            >
              Note
            </RadioButton>
          </div>

          <Input name="name" label={activeOption === types.twitter ? "Twitter Name" : "Title"} maxLength="30" />
          { activeOption !== types.note ? <Input name="link" label={activeOption === types.twitter ? "Twitter Link" : "Link"} /> : null }
          {activeOption === types.twitter ?
           <Input name="image" label="Image" required={false} /> : null}
          <Input tag="textarea" name="description" label="Description" />
          <Button>add bew item</Button>
        </form>
      </div>
    )
  }
};

export default Form;