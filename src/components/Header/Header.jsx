import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { localStorageApi } from "../../services";
import HeaderView from "./Header.view";

function Header({ history }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function onLogout() {
    localStorageApi.clear();
    history.push("/login");
  }

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
          <MenuItem>
            <Link to="/dashboard/device">Device</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/charts">Charts</Link>
          </MenuItem>
          <MenuItem onClick={onLogout}>Log out</MenuItem>
        </Menu>
      }
    />
  );
}
export default Header;
