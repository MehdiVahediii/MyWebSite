/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Content from '../Content/Content';
import Layout from '../Layout/Layout';
import Resume from '../Resume/Resume';
import './App.css';
import DETAILS from './DETAILS.json';

const App = () => (
  <div className="row m-0">
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Content data={DETAILS} />
          </Route>
          <Route path="/about">
            <Resume data={DETAILS} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </div>
);
export default App;
