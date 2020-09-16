import React from "react";
import { Switch } from "react-router-dom";

import { PublicRoute, PrivateRoute } from "./components";
import { Minimal } from "./layout";

import { Login, Register, Dashboard } from "./views";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute component={Login} exact layout={Minimal} path="/" />
      <PublicRoute component={Register} exact layout={Minimal} path="/signup" />

      <PrivateRoute
        component={Dashboard}
        exact
        layout={Minimal}
        path="/dashboard"
      />
    </Switch>
  );
};

export default Routes;
