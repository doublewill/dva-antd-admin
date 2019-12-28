import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Layout from './layout'
import Dashboard from './routes/dashboard'
import Table from './routes/table'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Switch> 
          <Route path="/" exact>
            <Redirect to="/dashboard"/>
          </Route>
          <Route path="/dashboard" exact component={Dashboard} />          
          <Route path="/table" exact component={Table} />          
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
