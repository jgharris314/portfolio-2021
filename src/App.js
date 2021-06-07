import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <div>
            <Layout />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

