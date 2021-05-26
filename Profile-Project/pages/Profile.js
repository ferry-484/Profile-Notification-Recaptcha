
import React, { useState } from "react";
import {
  CardContent,
  Typography,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import Link from "next/link";

//PROFILE

function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topcorner">
      <IconButton onClick={handleClick}>
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile"
          style={{ height: 40, width: 40, borderRadius: 100 }}
        />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="profile"
              style={{ height: 75, width: 75, borderRadius: 100 }}
            />
          </div>
          <br />
          <Typography color="textSecondary" variant="body2">
            usermail@gmail.com
          </Typography>
          <Divider />
          <br />
          <Link href="/ProfilePage">
            <MenuItem>My Profile</MenuItem>
          </Link>
          <Link href="/PasswordPage">
            <MenuItem>Change Password</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem>Logout</MenuItem>
          </Link>
        </CardContent>
      </Menu>
    </div>
  );
}
export default Profile;

