import React from "react";
import { Switch } from "react-router-dom";

import { PublicRoute } from "./components";
import { Minimal } from "./layout";

import { Login, Register } from "./views";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute component={Login} exact layout={Minimal} path="/" />
      <PublicRoute component={Register} exact layout={Minimal} path="/signup" />
    </Switch>
  );
};

export default Routes;
