import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import "./styles/style.css";

// import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/landing" component={Landing} />
        </Switch>
        {/* Main Page */}
      </Router>
    </Provider>
  );
};

export default App;
