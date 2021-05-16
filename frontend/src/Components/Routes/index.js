import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Landing from "../Pages/Landing";
import Portfolio from "../Pages/Portfolio";
import Project from "../Pages/Project";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Landing} />

        <Route exact path="/About" component={About} />

        <Route exact path="/Portfolio" component={Portfolio} />

        <Route exact path="/Project/:id" component={Project} />

        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;
