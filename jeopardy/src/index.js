import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import rootReducer from './reducers';
import Category from './components/Category';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/category' component={Category}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));