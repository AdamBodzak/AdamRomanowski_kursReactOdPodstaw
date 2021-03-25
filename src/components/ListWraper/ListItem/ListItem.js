import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from "./ListItem.module.scss";
import Title from '../../Title/Title';
import AppContext from '../../../context';

const ListItem = ({ image, title, description, link, type, index }) => {
  const ImageTag = image ? 'img' : 'div';
  const buttonDescription = type === 'article' ? 'visit page' : 'visit twitter page';

  return(
    <AppContext.Consumer>
      {
        (context) => (
          <li className={styles.wrapper}>
            {image &&
              <ImageTag
                src={image}
                className={image ? styles.image : styles.imageNone }
                alt={title}
              />
            }
            <div>
              <Title>{title}</Title>
              <p className={styles.description}>{description}</p>
              {link &&
                <Button href={link}>{buttonDescription}</Button>
              }
            </div>
            <button
              className={styles.closeButton}
              onClick={() => (context.removeItem(type, index))}
            >
            </button>
            <button
              className={styles.editButton}
              onClick={() => (context.editItem(type, index))}
            >
              edit
            </button>
            <div className={styles.arrowWrapper}>
              <button
                className={styles.arrowUp}
                onClick={() => (context.moveUp(type, index))}
              >
              </button>
              <button
                className={styles.arrowDown}
                onClick={() => (context.moveDown(type, index))}
              >
              </button>
            </div>
          </li>
        )
      }
    </AppContext.Consumer>
  )
};

  ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
  };

  ListItem.defaultProps = {
    image: null,
    link: null,
  };

export default ListItem;