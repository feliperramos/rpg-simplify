import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import validate from "validate.js";

import theme from "./theme";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/scss/index.scss";
import Routes from "./Routes";
import validators from "./common/validators";
// import { Store } from "./store";

validate.validators = {
  ...validate.validators,
  ...validators,
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
