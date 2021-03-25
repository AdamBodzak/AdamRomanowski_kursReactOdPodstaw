import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from "./ListWrapper.module.scss";

const ListWrapper = ({items, type}) => (
  <>
  {items.length ? (
      <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <ListItem key={item.title} index={index} type={type} {...item}/>
      ))}
    </ul>
  ) : (
    <h1 className={styles.noItems} >There's nothing here yet, please add some items!</h1>
  )}
  </>
);

export default ListWrapper;