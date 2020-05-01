import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import RecipeDisplay from './components/RecipeDisplay';
 
const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/recipe/:id" component={RecipeDisplay} />
        </Switch>
    </BrowserRouter>
);

export default Router;