import React from 'react';
import styles from './ButtonSVG.module.scss';

const ButtonSVG = ({children, id, onClickFn, type, index, direction}) => {

    return(
        <button
            className={styles.ButtonSVG}
            id={styles[id]}
            onClick={() => (onClickFn(type, index, direction))}
        >{children}
        </button>
    )
};

export default ButtonSVG;