import React from  'react';
import {Route, IndexRoute} from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ContentPage from './components/content/ContentPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import Page404 from './components/page404/Page404';


export default (
<Route path="/" component={App}>
<IndexRoute component={HomePage} />
<Route path="Content" component={ContentPage} />
<Route path="about" component={AboutPage} />
<Route path="contact" component={ContactPage} />
<Route path='*' exact={true} component={Page404} />
</Route>
);