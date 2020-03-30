import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppCovid from './pages/AppsCovid';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {AppCovid}/>
            </Switch>
        </BrowserRouter>
    );
}