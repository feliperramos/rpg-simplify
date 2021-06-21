import React from "react";

/**
 * Material-UI Components
 */

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const LogoutDialog = ({ onClose }) => {
  const logout = () => {
    window.localStorage.clear();
    window.location = "/login";
  };

  return (
    <div>
      <DialogTitle>ATENÇÃO!</DialogTitle>
      <DialogContent>
        <DialogContentText>Tem certeza que deseja sair?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => logout()} color="primary">
          Sim
        </Button>
        <Button onClick={onClose} color="primary">
          Não
        </Button>
      </DialogActions>
    </div>
  );
};

export default LogoutDialog;
