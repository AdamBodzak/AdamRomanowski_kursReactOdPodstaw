import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from "./ListItem.module.scss";
import Title from '../../Title/Title';
import AppContext from '../../../context';
import ButtonSVG from '../../ButtonSVG/ButtonSVG';
import { ImageEditSVG,
        ImageRemoveSVG,
        ImageArrowUpSVG,
        ImageArrowDownSVG
      } from '../../iconsSVG';

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
            <ButtonSVG
              onClickFn={context.removeItem}
              type={type}
              index={index}
            >
              <ImageRemoveSVG />
            </ButtonSVG>
            <ButtonSVG
              onClickFn={context.editItem}
              type={type}
              index={index}
            >
              <ImageEditSVG />
            </ButtonSVG>
            <div className={styles.arrowWrapper}>
              <ButtonSVG
                onClickFn={context.moveUp}
                type={type}
                index={index}
              >
                <ImageArrowUpSVG />
              </ButtonSVG>
              <ButtonSVG
                onClickFn={context.moveDown}
                type={type}
                index={index}
              >
                <ImageArrowDownSVG />
              </ButtonSVG>
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