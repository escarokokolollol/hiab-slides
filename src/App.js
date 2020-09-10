import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import BackButton from "./components/BackButton";
import ForwardButton from "./components/ForwardButton";

// views
import Home from "./pages/Home";
import Result from "./pages/Result";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/pageThree";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const hej = 1

const App = () => {
  return (
    <Router>
      <div className="App">
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
                    <PageThree/>
                  </Route>
                  <Route path="/result">
                    <Result/>
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
