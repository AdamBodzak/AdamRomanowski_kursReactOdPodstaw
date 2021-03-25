import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn, editItemValue, isEditItem }) => (
    <div className={styles.wrapper}>
        <button
            className={styles.classButton}
            onClick={closeModalFn}
        >
        </button>
        <Form editItemValue={editItemValue} isEditItem={isEditItem}/>
    </div>

);

export default Modal;