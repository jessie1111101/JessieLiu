// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';  // or whatever the location is
import Blog from './Blog'; // or whatever the location is

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/blog" component={Blog}/>
        </Switch>
    </BrowserRouter>
);