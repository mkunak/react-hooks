import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/home-page';
import UseStatePage from '../pages/use-state-page';
import UseEffectPage from '../pages/use-effect-page';
import UseRefPage from '../pages/use-ref-page';
import UseMemoPage from '../pages/use-memo-page';
import UseCallbackPage from '../pages/use-callback-page';
import UseContextReducerPage from '../pages/use-context-reducer-page';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/use-state' exact>
        <UseStatePage />
      </Route>
      <Route path='/use-effect' exact>
        <UseEffectPage />
      </Route>
      <Route path='/use-ref' exact>
        <UseRefPage />
      </Route>
      <Route path='/use-memo' exact>
        <UseMemoPage />
      </Route>
      <Route path='/use-callback' exact>
        <UseCallbackPage />
      </Route>
      <Route path='/use-context-reducer' exact>
        <UseContextReducerPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
