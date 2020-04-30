import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import PageStyleGuide from '../components/PageStyleGuide';
import PageAddUser from '../components/PageAddUser';
import PageTestTut from '../components/PageTestTut';

const AppRouter = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/" exact component={PageTestTut}/>
      <Route path="/style" component={PageStyleGuide}/>
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
