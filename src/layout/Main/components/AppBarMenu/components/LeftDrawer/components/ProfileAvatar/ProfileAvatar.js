import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

/**
 * Material-UI Components
 */

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

/**
 * Custom Components
 */

import { profileAvatarStyle } from "../../../../../../../../assets/styles/styles";

const ProfileAvatar = (props) => {
  const { className, ...rest } = props;

  const styles = profileAvatarStyle();

  const user = {
    name: "Felipe Ramos",
    avatar: "/images/avatars/profile.jpg",
    bio: "Mestre",
  };

  return (
    <div {...rest} className={clsx(styles.root, className)}>
      <Avatar
        alt="Person"
        className={styles.avatar}
        component={Link}
        src={user.avatar}
        to="/perfil"
      />
      <Typography className={styles.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

export default ProfileAvatar;
