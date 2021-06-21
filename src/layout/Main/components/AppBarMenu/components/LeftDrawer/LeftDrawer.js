import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Material-UI Components
 */

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NoteAddOutlined from "@material-ui/icons/NoteAddOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import InsertChartOutlinedTwoToneIcon from "@material-ui/icons/InsertChartOutlinedTwoTone";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import List from "@material-ui/core/List";

/**
 * Custom Components
 */

import { leftDrawerStyles } from "../../../../../../assets/styles/styles";
import { ProfileAvatar } from "./components";

/**
 * Left Drawer render itens
 */

const LeftDrawer = ({ onClose }) => {
  const styles = leftDrawerStyles();

  /**
   * States
   */

  const [state, setState] = useState({ openLogout: false });

  /**
   * State action functions
   */

  const openDialog = () => setState({ openLogout: true });

  const closeDialog = () => setState({ openLogout: false });

  /**
   * Render Components
   */

  const dialogLogout = () => {};

  return (
    <div
      style={{ width: 300 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        <ProfileAvatar onClick={onClose} />
        <Divider className={styles.divider} />
        <ListItem button component={Link} onClick={onClose} to="/dashboard">
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default LeftDrawer;
