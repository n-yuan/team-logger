import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  isAuthenticated,
  loading,
  component: Component,
  ...rest
}) => {
  console.log("PrivateRoute");
  console.log(isAuthenticated);
  console.log(!isAuthenticated);

  console.log(loading);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && loading === false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
