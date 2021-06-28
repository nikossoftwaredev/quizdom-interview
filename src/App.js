import React from "react";
import { Route, Switch } from "react-router";
import WeatherPage from "./pages/WeatherPage";
import "typeface-roboto";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={WeatherPage} />
    </Switch>
  );
};

export default App;
