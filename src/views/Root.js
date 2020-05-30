import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Posts from 'views/Posts';
import Forms from 'views/Forms';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/form" component={Forms} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
