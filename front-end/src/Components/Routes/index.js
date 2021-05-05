import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Landing from "../Pages/Landing";
import Portfolio from "../Pages/Portfolio";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Switch>
        <Route exact path="/About" component={About} />
      </Switch>
      <Switch>
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
      <Switch>
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  );
};
export default Routes;
