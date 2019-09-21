import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Bye } from "./components/Bye";
import { Header } from "./components/Header";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
