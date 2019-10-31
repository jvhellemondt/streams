import React from 'react';
import { Router as MyRouter, Route, Switch } from 'react-router-dom';

import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';


const App = () => {
  return (
    <div className="ui container">
      <MyRouter history={history}>
        <div>
          <Header />
          <Switch>
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
          <Route path="/" component={StreamList} />
          </Switch>
        </div>
      </MyRouter>
    </div>
  );
};


export default App;