import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dev
import DevNav from "./components/DevNav";

// views
import Start from "./pages/Start";
import WorkWith from "./pages/WorkWith";

// startpages 
import Start01 from "./pages/start/start01"
import Start02 from "./pages/start/start02"

// hiab pages
import AboutHiabPage01 from "./pages/about-hiab/Page01";
import AboutHiabPage02 from "./pages/about-hiab/Page02";
import AboutHiabPage03 from "./pages/about-hiab/Page03";
import AboutHiabPage04 from "./pages/about-hiab/Page04";

// effer pages
import AboutEfferPage01 from "./pages/about-effer/Page01";
import AboutEfferPage02 from "./pages/about-effer/Page02";
import AboutEfferPage03 from "./pages/about-effer/Page03";
import AboutEfferPage04 from "./pages/about-effer/Page04";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={700} classNames="fade">
                <Switch location={location}>
                  <Route path="/" component={Start01} />
                  <Route path="/start02" component={Start02} />

                  <Route path="/about-hiab/page01" component={AboutHiabPage01} />
                  <Route path="/about-hiab/page02" component={AboutHiabPage02} />
                  <Route path="/about-hiab/page03" component={AboutHiabPage03} />
                  <Route path="/about-hiab/page04" component={AboutHiabPage04} />

                  <Route path="/about-effer/page01" component={AboutEfferPage01} />
                  <Route path="/about-effer/page02" component={AboutEfferPage02} />
                  <Route path="/about-effer/page03" component={AboutEfferPage03}/>
                  <Route path="/about-effer/page04" component={AboutEfferPage04} />

                  <Route path="/work-with" component={WorkWith} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>{" "}
      {/* App */}
      {/* <DevNav /> */}
    </Router>
  );
};

export default App;
