import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Layout from './layout'
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  const Dashboard = dynamic({
    app,
    models: ()=> [
    import('./models/app')
    ],
    component: ()=> import('./routes/dashboard')
  })

  const Table = dynamic({
    app,
    models: ()=> [
    import('./models/table')
    ],
    component: ()=> import('./routes/table')
  })


  const Echarts = dynamic({
    app,
    models: ()=> [
    import('./models/table')
    ],
    component: ()=> import('./routes/charts')
  })

  const D3Charts = dynamic({
    app,
    models: ()=> [
    import('./models/table')
    ],
    component: ()=> import('./routes/charts/d3')
  })

  const G2Charts = dynamic({
    app,
    models: ()=> [
    import('./models/table')
    ],
    component: ()=> import('./routes/charts/g2')
  })
  const ThreeCharts = dynamic({
    app,
    models: ()=> [
    import('./models/table')
    ],
    component: ()=> import('./routes/charts/three')
  })

  return (
    <Router history={history}>
      <Layout>
        <Switch> 
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/table" exact component={Table} />
          <Route path="/echarts" exact component={Echarts} />
          <Route path="/d3-charts" exact component={D3Charts} />          
          <Route path="/g2-charts" exact component={G2Charts} />
          <Route path="/three-charts" exact component={ThreeCharts} />                    
        </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
