import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDom from 'react-dom';
import Root from './Viuws/Root/Root'
import './index.css';

ReactDom.render(
    <Root />,
    document.getElementById('root')
);