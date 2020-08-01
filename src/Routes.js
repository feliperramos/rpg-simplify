import React from "react";
import { Switch } from "react-router-dom";

import { PublicRoute } from "./components";
import { Minimal } from "./layout";

import { Login } from "./views";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute component={Login} exact layout={Minimal} path="/" />
    </Switch>
  );
};

export default Routes;
