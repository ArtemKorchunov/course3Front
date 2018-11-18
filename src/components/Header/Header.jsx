import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import HeaderView from "./Header.view";

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(
    () => {
      console.dir(anchorEl);
    },
    [anchorEl]
  );
  return (
    <HeaderView
      menuIconComponent={
        <IconButton
          color="inherit"
          aria-owns={"menu-appbar"}
          aria-label="Menu"
          onClick={({ target }) => setAnchorEl(target)}
        >
          <MenuIcon />
        </IconButton>
      }
      accountIconComponent={
        <IconButton
          aria-owns={"menu-appbar"}
          aria-haspopup="true"
          color="inherit"
          onClick={({ target }) => setAnchorEl(target)}
        >
          <AccountCircle />
        </IconButton>
      }
      accountComponent={
        <Menu
          id="menu-appbar"
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      }
    />
  );
}
export default Header;
