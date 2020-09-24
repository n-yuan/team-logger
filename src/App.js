import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Member from "./pages/Member";
import Alert from "./components/layout/Alert";
import "./styles/style.css";

// import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/member" component={Member} />
          <Route exact path="/about" component={About} />
          <Route exact path="/landing" component={Landing} />
        </Switch>
        {/* Main Page */}
      </Router>
    </Provider>
  );
};

export default App;
