import React from "react";
import "./App.css";
import UserPage from "./container/UserPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const username = (prompt = "Find User");
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/:userName"} component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
