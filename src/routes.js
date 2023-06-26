import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './pages/contact';

import Home from './pages/home';
import Portfolio from './pages/Port';
import Project from './pages/project';
import Admin from './admin/pages/login/admin';
import HomeAdmin from './admin/pages/home/home';
import PrivateRoute from './util/privateRouter/privateRouter';

export default function Routes(){
    const token = localStorage.getItem("TOKEN_ACESS")
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project/:title" component={Project} />
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" exact component={Admin}/>
            <PrivateRoute path="/admin/home" component={HomeAdmin} isAuthenticated={token}/>
        </Switch>
        </BrowserRouter>
    )
}