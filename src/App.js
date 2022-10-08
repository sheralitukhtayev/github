import React from "react";
import "./App.css";
import UserPage from "./container/UserPage";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { input } from "./components/NavBar";

function App() {
  const username = prompt("name");
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
