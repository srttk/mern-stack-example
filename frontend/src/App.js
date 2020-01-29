import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, GuestRoute } from "./components/hoc/RouteGuard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <GuestRoute exact path="/login" component={Login} />
          <GuestRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
