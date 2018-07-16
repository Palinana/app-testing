import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/stack" component={Stack}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);