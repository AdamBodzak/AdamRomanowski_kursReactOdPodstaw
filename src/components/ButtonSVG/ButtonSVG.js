import React from 'react';
import styles from './ButtonSVG.module.scss';

const ButtonSVG = ({children, onClickFn, type, index}) => {

    const newClassName = `${styles.ButtonSVG} ${styles[children.type.name]}`;
    return(
        <button
            className={newClassName}
            onClick={() => (onClickFn(type, index))}
        >{children}
        </button>
    )
};

export default ButtonSVG;