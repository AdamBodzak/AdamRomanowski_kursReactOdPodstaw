import React from 'react';
import styles from './ButtonSVG.module.scss';

const ButtonSVG = ({children, id, onClickFn, type, index}) => {

    return(
        <button
            className={styles.ButtonSVG}
            id={styles[id]}
            onClick={() => (onClickFn(type, index))}
        >{children}
        </button>
    )
};

export default ButtonSVG;