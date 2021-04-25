import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Landing from "../Pages/Landing";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Switch>
        <Route exact path="/About" component={About} />
      </Switch>
    </>
  );
};
export default Routes;
