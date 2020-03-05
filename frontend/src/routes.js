import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Main';
import Editar from './pages/Editar/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/editar" component={Editar} />
            </Switch>
        </BrowserRouter>
    )
};