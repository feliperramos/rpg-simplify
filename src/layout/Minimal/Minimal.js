import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import { TopBar } from "./components";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: "100%",
  },
  content: {
    height: "100%",
  },
}));

const Minimal = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;