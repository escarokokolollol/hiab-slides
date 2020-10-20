import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeProvider } from "styled-components";
// import DeviceOrientation, { Orientation } from 'react-screen-orientation'

// link to hiab/effer photos
// https://drive.google.com/drive/u/1/folders/13LGoxD-L-IxPqnnxe0sOMMDpXwbej_Dh
// https://drive.google.com/drive/folders/1Z050lJrWo6vhi5-504Ob0OwRH_G7J4Kn

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
import AboutHiabPage05 from "./pages/about-hiab/Page05.js";
import AboutHiabPage06 from "./pages/about-hiab/Page06.js";
import AboutHiabPage07 from "./pages/about-hiab/Page07.js";
import AboutHiabPage08 from "./pages/about-hiab/Page08.js";
import AboutHiabPage09 from "./pages/about-hiab/Page09.js";
import AboutHiabPage010 from "./pages/about-hiab/Page010.js";
import AboutHiabPage011 from "./pages/about-hiab/Page011.js";
import AboutHiabPage012 from "./pages/about-hiab/Page012.js";
import AboutHiabPage013 from "./pages/about-hiab/Page013.js";
import AboutHiabPage014 from "./pages/about-hiab/Page014.js";


// effer pages
import AboutEfferPage01 from "./pages/about-effer/Page01.js";
import AboutEfferPage02 from "./pages/about-effer/Page02.js";
import AboutEfferPage03 from "./pages/about-effer/Page03.js";
import AboutEfferPage04 from "./pages/about-effer/Page04.js";
import AboutEfferPage05 from "./pages/about-effer/Page05.js";
import AboutEfferPage06 from "./pages/about-effer/Page06.js";
import AboutEfferPage07 from "./pages/about-effer/Page07.js";
import AboutEfferPage08 from "./pages/about-effer/Page08.js";
import AboutEfferPage09 from "./pages/about-effer/Page09.js";
import AboutEfferPage010 from "./pages/about-effer/Page010.js";
import AboutEfferPage011 from "./pages/about-effer/Page011.js";
import AboutEfferPage012 from "./pages/about-effer/Page012.js";
import AboutEfferPage013 from "./pages/about-effer/Page013.js";
import AboutEfferPage014 from "./pages/about-effer/Page014.js";
import AboutEfferPage015 from "./pages/about-effer/Page015.js";
import AboutEfferPage016 from "./pages/about-effer/Page016.js";
import AboutEfferPage017 from "./pages/about-effer/Page017.js";
import AboutEfferPage018 from "./pages/about-effer/Page018.js";
import AboutEfferPage019 from "./pages/about-effer/Page019.js";

import OneUnbeatableOffer01 from "./pages/one-unbeatable-offer/Page01.js";
import OneUnbeatableOffer02 from "./pages/one-unbeatable-offer/Page02.js";
import OneUnbeatableOffer03 from "./pages/one-unbeatable-offer/Page03.js";
import OneUnbeatableOffer04 from "./pages/one-unbeatable-offer/Page04.js";
import OneUnbeatableOffer05 from "./pages/one-unbeatable-offer/Page05.js";

import End01 from "./pages/end/Page01.js";
import End02 from "./pages/end/Page02.js";
import End03 from "./pages/end/Page03.js";
import End04 from "./pages/end/Page04.js";


// message for portrait mode
// import PortraitModeMessage from "../src/components/PortraitModeMessage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <DeviceOrientation lockOrientation={'landscape'}> */}
        {/* Will only be in DOM in landscape */}
        {/* <Orientation orientation='landscape' alwaysRender={false}> */}
          {/* <Router basename="/hiab-beta01"> */}
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
                        <Route path="/about-hiab/page05" component={AboutHiabPage05} />
                        <Route path="/about-hiab/page06" component={AboutHiabPage06} />
                        <Route path="/about-hiab/page07" component={AboutHiabPage07} />
                        <Route path="/about-hiab/page08" component={AboutHiabPage08} />
                        <Route path="/about-hiab/page09" component={AboutHiabPage09} />
                        <Route path="/about-hiab/page010" component={AboutHiabPage010} />
                        <Route path="/about-hiab/page011" component={AboutHiabPage011} />
                        <Route path="/about-hiab/page012" component={AboutHiabPage012} />
                        <Route path="/about-hiab/page013" component={AboutHiabPage013} />
                        <Route path="/about-hiab/page014" component={AboutHiabPage014} />

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
                        <Route path="/about-effer/page014" component={AboutEfferPage014} />
                        <Route path="/about-effer/page015" component={AboutEfferPage015} />
                        <Route path="/about-effer/page016" component={AboutEfferPage016} />
                        <Route path="/about-effer/page017" component={AboutEfferPage017} />
                        <Route path="/about-effer/page018" component={AboutEfferPage018} />
                        <Route path="/about-effer/page019" component={AboutEfferPage019} />

                        <Route path="/one-unbeatable-offer/page01" component={OneUnbeatableOffer01} />
                        <Route path="/one-unbeatable-offer/page02" component={OneUnbeatableOffer02} />
                        <Route path="/one-unbeatable-offer/page03" component={OneUnbeatableOffer03} />
                        <Route path="/one-unbeatable-offer/page04" component={OneUnbeatableOffer04} />
                        <Route path="/one-unbeatable-offer/page05" component={OneUnbeatableOffer05} />

                        <Route path="/start02" component={Start02} />
                        <Route path="/start03" component={Start03} />
                        <Route path="/start04" component={Start04} />
                        <Route path="/start05" component={Start05} />

                        <Route path="/end01" component={End01} />
                        <Route path="/end02" component={End02} />
                        <Route path="/end03" component={End03} />
                        <Route path="/end04" component={End04} />

                        <Route path="/" component={Start01} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
            </div>
            {/* <DevNav /> */}
          </Router>
        {/* </Orientation> */}
        {/* Will stay in DOM, but is only visible in portrait */}
        {/* <Orientation orientation='portrait' alwaysRender={false}>
          <PortraitModeMessage />
        </Orientation> */}
      {/* </DeviceOrientation> */}
    </ThemeProvider>
  );
};

export default App;
