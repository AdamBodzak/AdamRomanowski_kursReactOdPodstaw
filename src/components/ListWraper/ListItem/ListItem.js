import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from "./ListItem.module.scss";
import Title from '../../Title/Title';
import AppContext from '../../../context';

const ListItem = ({ image, title, description, link, type }) => {
  const ImageTag = image ? 'img' : 'div';

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
                <Button href={link}>visit twitter page</Button>
              }
            </div>
            <button
              className={styles.closeButton}
              onClick={() => (context.removeItem(type, title))}
            >
            </button>
            <div className={styles.arrowWrapper}>
              <button
                className={styles.arrowUp}
                onClick={() => (context.moveUp(type, title))}
              >
              </button>
              <button
                className={styles.arrowDown}
                onClick={() => (context.moveDown(type, title))}
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