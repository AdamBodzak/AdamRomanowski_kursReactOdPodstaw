import styles from './RadioButton.module.scss';

const RadioButton = ({id, checked, changeFn, children}) => (
    <>

        <input
            className={styles.classInput}
            id={id}
            type="radio"
            checked={checked}
            onChange={changeFn}
        />
        <label
            className={styles.classLabel}
            htmlFor={id}
        >
            {children}
        </label>
    </>
);

export default RadioButton;