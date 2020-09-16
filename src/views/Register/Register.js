import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import validate from "validate.js";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { ApiRequest } from "../../api/API";
import { registerStyle } from "../../assets/styles/styles";
import { schema } from "./schema";

const Register = ({ history }) => {
  const classes = registerStyle();
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

  const handleBack = () => {
    history.push("/");
  };

  const handleSignUp = async () => {
    try {
      const resp = await ApiRequest("POST", "users", form.values);

      if (resp.status === 200 && resp.data.status === true) {
        localStorage.setItem("jwt_token", resp.data.token);

        history.push("/dashboard");
        return resp;
      }
    } catch (error) {
      console.log(error);
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
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <div className={classes.form}>
                <Typography className={classes.title} variant="h2">
                  Cadastrar-se
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={hasError("email") ? form.errors.email[0] : null}
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  value={form.values.email || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("name")}
                  fullWidth
                  helperText={hasError("name") ? form.errors.name[0] : null}
                  label="Nome"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={form.values.name || ""}
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
                <div className={classes.policy}>
                  <Checkbox
                    checked={form.values.terms || false}
                    className={classes.policyCheckbox}
                    color="primary"
                    name="terms"
                    onChange={handleChange}
                  />
                  <Typography
                    className={classes.policyText}
                    color="textSecondary"
                    variant="body1"
                  >
                    {"Leio e aceito os "}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Termos e Serviços
                    </Link>
                  </Typography>
                </div>
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!form.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleSignUp}
                >
                  Criar conta
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
