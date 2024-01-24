import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Material-UI Components
 */

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import NoteAddOutlined from "@mui/icons-material/NoteAddOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
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
