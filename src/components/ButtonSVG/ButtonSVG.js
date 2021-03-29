import React from 'react';
import styles from './ButtonSVG.module.scss';

const ButtonSVG = ({children, onClickFn, type, index}) => {
    return(
        <button
            className={styles.ButtonSVG}
            id={styles[children.type.name]}
            onClick={() => (onClickFn(type, index))}
        >{children}
        </button>
    )
};

export default ButtonSVG;