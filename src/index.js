/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';







render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);
