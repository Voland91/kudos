import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import PostsList from 'views/PostsList';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/home" component={PostsList} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
