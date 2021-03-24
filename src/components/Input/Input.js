import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, text, name, label, maxLength, required, ...props}) => {

    return(
        <div className={styles.formItem}>
            <Tag
                className={Tag === 'textarea' ? styles.textarea : styles.input}
                type='text'
                name={name}
                id={name}
                placeholder=" "
                required={required}
                maxLength={maxLength}
                {...props}
            />
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <div className={styles.formItemBar} />
        </div>
    );
};

Input.propTypes = {
    required: PropTypes.bool,
    tag: PropTypes.string,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};

Input.defaultProps = {
    required: true,
    tag: 'input',
    maxLength: 200,
};

export default Input;