import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/contact';

import Home from './pages/home';
import Portfolio from './pages/Port';
import Project from './pages/project';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project/:title" component={Project} />
            <Route path="/contact" component={Contact}/>
        </Switch>
        </BrowserRouter>
    )
}