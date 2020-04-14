import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import PageStyleGuide from '../components/PageStyleGuide';
import PageTest from '../components/PageTest';

const AppRouter = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/" exact component={PageTest}/>
      <Route path="/style" component={PageStyleGuide}/>
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
