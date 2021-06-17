import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Material-UI Components
 */

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputOutLined from "@material-ui/icons/InputOutlined";
import Drawer from "@material-ui/core/Drawer";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import AccountBoxOutlined from "@material-ui/icons/AccountBoxOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

/**
 * Custom Components
 */

import { appBarMainStyles } from "../../../../assets/styles/styles";

const AppBarMenu = (props) => {
  const { children } = props;
  const styles = appBarMainStyles();

  /**
   * States
   */

  const [anchorEl, setAnchorEl] = useState();
  const [state, setState] = useState({
    left: false,
    openLogout: false,
    closeDrawer: "blackdropClick",
  });

  /**
   * State action functions
   */

  const openDialog = () => setState({ ...state, openLogout: true });

  const closeDialog = () => setState({ ...state, openLogout: false });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    else setState({ ...state, [side]: open });
  };

  const isMenuOpen = Boolean(anchorEl);

  const toggleOpenMenu = (event) => setAnchorEl(event.currentTarget);

  const toggleCloseMenu = () => setAnchorEl(null);

  /**
   * Render Components
   */

  const LogoutMenu = () => {};

  const DrawerList = (side) => {};

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="main-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={toggleCloseMenu}
    >
      <MenuItem component={Link} to="/perfil">
        <AccountBoxOutlined />
        <span style={{ padding: "5px" }}>Perfil</span>
      </MenuItem>
      <MenuItem component={Link}>
        <NotificationsNoneOutlinedIcon />
        <span style={{ padding: "5px" }}>Notificações</span>
      </MenuItem>
      <MenuItem onClick={openDialog}>
        <InputOutLined />
        <span style={{ padding: "5px" }}>Sair</span>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/dashboard">
            <img
              alt="Logo"
              src="/images/logos/logo.png"
              style={{ height: 50, width: 50 }}
            />
          </Link>
          <div className={styles.grow} />
          <div className={styles.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={toggleOpenMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {DrawerList("left")}
      </Drawer>
      {renderMenu}
      <Dialog
        open={state.openLogout}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {LogoutMenu("true")}
      </Dialog>
      <main>{children}</main>
    </div>
  );
};