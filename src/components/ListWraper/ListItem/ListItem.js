import React from 'react';
import './ListItem.css'
import danabramov from '../../../assets/images/danabramov.jpg'

const ListItem = ({name, description, image}) => (
    <li className="listItem__wrapper">
        <img src={image} className="listItem__image"/>
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <button className="listItem__button">visit twitter page</button>
        </div>
    </li>
);

export default ListItem;