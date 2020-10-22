import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';

const Content = React.lazy(() => {
  return import('./containers/Content/Content');
});

const About = React.lazy(() => {
  return import('./containers/About/About');
});

const App = props => {

  let routes = (
    <Switch>
      <Route exact path="/" render={props => <Content {...props} />} />
      <Route path="/about" render={props => <About {...props} />} />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
