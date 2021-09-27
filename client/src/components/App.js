import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="ds-base">
        <header className="ds-base--inverse ds-u-padding--3 ds-u-display--flex" id="app-header">
          <Link className="ds-u-color--white ds-u-text-decoration--none ds-u-font-weight--bold ds-u-font-size--2xl" to="/">Marketplace</Link>
        </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
