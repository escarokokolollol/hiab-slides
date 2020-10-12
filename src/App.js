import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "styled-components";
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

import theme from "./theme.js"

// dev
// import DevNav from "./components/DevNav";

// VIEWS
// startpages 
import Start01 from "./pages/start/start01";
import Start02 from "./pages/start/start02";
import Start03 from "./pages/start/start03";
import Start04 from "./pages/start/start04";
import Start05 from "./pages/start/start05";

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
import AboutEfferPage05 from "./pages/about-effer/Page05";
import AboutEfferPage06 from "./pages/about-effer/Page06";
import AboutEfferPage07 from "./pages/about-effer/Page07";
import AboutEfferPage08 from "./pages/about-effer/Page08";
import AboutEfferPage09 from "./pages/about-effer/Page09";
import AboutEfferPage010 from "./pages/about-effer/Page010";
import AboutEfferPage011 from "./pages/about-effer/Page011";
import AboutEfferPage012 from "./pages/about-effer/Page012";
import AboutEfferPage013 from "./pages/about-effer/Page013";


// message for portrait mode
import PortraitModeMessage from "../src/components/PortraitModeMessage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
          <Router>
            <div className="App">
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition key={location.key} timeout={700} classNames="fade">
                      <Switch location={location}>
                        <Route path="/about-hiab/page01" component={AboutHiabPage01} />
                        <Route path="/about-hiab/page02" component={AboutHiabPage02} />
                        <Route path="/about-hiab/page03" component={AboutHiabPage03} />
                        <Route path="/about-hiab/page04" component={AboutHiabPage04} />

                        <Route path="/about-effer/page01" component={AboutEfferPage01} />
                        <Route path="/about-effer/page02" component={AboutEfferPage02} />
                        <Route path="/about-effer/page03" component={AboutEfferPage03}/>
                        <Route path="/about-effer/page04" component={AboutEfferPage04} />
                        <Route path="/about-effer/page05" component={AboutEfferPage05} />
                        <Route path="/about-effer/page06" component={AboutEfferPage06} />
                        <Route path="/about-effer/page07" component={AboutEfferPage07} />
                        <Route path="/about-effer/page08" component={AboutEfferPage08} />
                        <Route path="/about-effer/page09" component={AboutEfferPage09} />
                        <Route path="/about-effer/page010" component={AboutEfferPage010} />
                        <Route path="/about-effer/page011" component={AboutEfferPage011} />
                        <Route path="/about-effer/page012" component={AboutEfferPage012} />
                        <Route path="/about-effer/page013" component={AboutEfferPage013} />

                        <Route path="/start02" component={Start02} />
                        <Route path="/start03" component={Start03} />
                        <Route path="/start04" component={Start04} />
                        <Route path="/start05" component={Start05} />
                        <Route path="/" component={Start01} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
            </div>
            {/* <DevNav /> */}
          </Router>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait' alwaysRender={false}>
          <PortraitModeMessage />
        </Orientation>
      </DeviceOrientation>
    </ThemeProvider>
  );
};

export default App;
