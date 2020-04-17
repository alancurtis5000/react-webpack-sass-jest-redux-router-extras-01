import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import PageStyleGuide from '../components/PageStyleGuide';
import PageFakeUser from '../components/PageFakeUser';

const AppRouter = () => (
  <BrowserRouter >
    <Switch>
      <Route path="/" exact component={PageFakeUser}/>
      <Route path="/style" component={PageStyleGuide}/>
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
