import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouteLayout = ({
  layout: Layout,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        localStorage.getItem("jwt_token") ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: matchProps.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRouteLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default PrivateRouteLayout;
