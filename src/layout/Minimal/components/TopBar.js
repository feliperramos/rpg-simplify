import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
    color: "#c4ba6e",
  },
}));

const TopBar = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="secondary"
      position="fixed"
    >
      <Toolbar>
        <Link to="/">
          <img
            alt="Logo"
            src="/images/logos/logo.png"
            style={{ height: 50, width: 50 }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
