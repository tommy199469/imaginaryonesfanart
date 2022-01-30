import * as React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { history } from "./stores";

import Game from "./pages/game";

// question and mtr point
export default function Routers() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact component={Game} />

        <Route path="*">
          <Redirect from={"/"} to={"/"} />
        </Route>
      </Switch>
    </Router>
  );
}
