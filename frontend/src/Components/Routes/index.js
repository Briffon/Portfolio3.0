import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Landing from "../Pages/Landing";
import Portfolio from "../Pages/Portfolio";
import Project from "../Pages/Project";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
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
        <Route exact path="/Project/:id" component={Project} />
      </Switch>
      <Switch>
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
