import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import SiteNav from "./components/SiteNav";
import Header from "./components/Header";

// views
import Home from "./pages/Home";
import Result from "./pages/Result";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/pageThree";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  // Expected Improvements using HiConnect
  const [param1, setParam1] = useState(65);
  const [param2, setParam2] = useState(23);
  const [param3, setParam3] = useState(90);
  const [param4, setParam4] = useState(30);
  const [param5, setParam5] = useState(55);
  return (
    <Router>
      <div className="App">
        sw test
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames="fade">
                <Switch location={location}>
                  <Route path="/pageone">
                    <PageOne />
                  </Route>
                  <Route path="/pagetwo">
                    <PageTwo />
                  </Route>
                  <Route path="/pagethree">
                    <PageThree
                      param1={param1}
                      param2={param2}
                      param3={param3}
                      param4={param4}
                      param5={param5}
                      setParam1={setParam1}
                      setParam2={setParam2}
                      setParam3={setParam3}
                      setParam4={setParam4}
                      setParam5={setParam5}
                    />
                  </Route>
                  <Route path="/result">
                    <Result
                      param1={param1}
                      param2={param2}
                      param3={param3}
                      param4={param4}
                      param5={param5}
                    />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <SiteNav />
      </div>
    </Router>
  );
};

export default App;
