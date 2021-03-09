import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/home/HomeScreen";
import NotFound from "./screens/notFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomeScreen />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
