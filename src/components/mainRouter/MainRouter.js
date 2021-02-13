import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Import
import { Navigation } from '../navigation/Navigation';
import { Presentation } from '../presentation/Presentation';
import { Contact } from '../contact/Contact';
import { Projects } from '../projects/Projects';
import { MainScreen } from '../mainScreen/MainScreen';

export const MainRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={MainScreen} />
        <Route exact path='/presentation' component={Presentation} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </Router>
  );
};
