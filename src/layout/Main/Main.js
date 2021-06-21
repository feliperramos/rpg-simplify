import React from "react";
import PropTypes from "prop-types";

/**
 * Custom Components
 */

import { AppBarMenu } from "./components";

const Main = ({ children }) => {
  return (
    <div>
      <AppBarMenu />
      <main>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
