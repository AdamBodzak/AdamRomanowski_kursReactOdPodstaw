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

const ListItem = ({ image, title, description, link, type, index, arrLength }) => {
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
              id='ImageRemoveSVG'
              onClickFn={context.removeItem}
              type={type}
              index={index}
            >
              <ImageRemoveSVG />
            </ButtonSVG>
            <ButtonSVG
              id='ImageEditSVG'
              onClickFn={context.editItem}
              type={type}
              index={index}
            >
              <ImageEditSVG />
            </ButtonSVG>
            <div className={styles.arrowWrapper}>
              { index === 0 ?
                <div></div>
               :
                <ButtonSVG
                  id='ImageArrowUpSVG'
                  onClickFn={context.moveUp}
                  type={type}
                  index={index}
                >
                  <ImageArrowUpSVG />
                </ButtonSVG>
              }
              { index === arrLength - 1 ?
                <div></div>
               :
              <ButtonSVG
                id='ImageArrowDownSVG'
                onClickFn={context.moveDown}
                type={type}
                index={index}
              >
                <ImageArrowDownSVG />
              </ButtonSVG>
              }

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