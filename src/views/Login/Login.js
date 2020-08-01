import React, { useState, useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import validate from "validate.js";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { loginStyle } from "../../assets/styles/styles";
import { schema } from "./schema";
import { ApiRequest } from "../../api/API";

const Login = ({ history }) => {
  const classes = loginStyle();

  const [form, setForm] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(form.values, schema);

    setForm((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [form.values]);

  const handleChange = (event) => {
    event.persist();

    setForm((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleLogin = async () => {
    const req = await ApiRequest("POST", "auth", form.values);

    if (req.status === 200) {
      localStorage.setItem("jwt_token", req.data.token);

      history.push("/dashboard");
    }
  };

  const hasError = (field) =>
    form.touched[field] && form.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                RPG Simplify
              </Typography>
              <div className={classes.person}>
                <Typography className={classes.name} variant="body1">
                  Crie e Jogue suas salas de RPG com facilidade.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <div className={classes.form}>
                <Typography className={classes.title} variant="h2">
                  Entrar
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={hasError("email") ? form.errors.email[0] : null}
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={form.values.email || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("password")}
                  fullWidth
                  helperText={
                    hasError("password") ? form.errors.password[0] : null
                  }
                  label="Senha"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={form.values.password || ""}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!form.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleLogin}
                >
                  Entrar
                </Button>
                <Typography color="textSecondary" variant="body1">
                  {"Não têm uma conta? "}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Cadastre-se
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Login);
