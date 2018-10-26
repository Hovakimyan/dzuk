import React, { Component } from 'react';
import Main from '../main';
import { Route, Switch } from 'react-router-dom';
import Portfolio from '../portfolio';

class Index extends Component {
  render() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/portfolio/" component={Portfolio} />
        </Switch>
    );
  }
}

export default Index;
