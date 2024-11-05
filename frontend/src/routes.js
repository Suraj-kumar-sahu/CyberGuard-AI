import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scanner from './components/Scanner';
import MalwareAnalyzer from './components/MalwareAnalyzer';
import DataBreachChecker from './components/DataBreachChecker';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Scanner} />
            <Route path="/malware" component={MalwareAnalyzer} />
            <Route path="/breach" component={DataBreachChecker} />
        </Switch>
    </Router>
);

export default Routes;
