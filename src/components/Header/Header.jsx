import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { localStorageApi } from "../../services";
import HeaderView from "./Header.view";

function Header({ history, headerLinks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function onLogout() {
    localStorageApi.clear();
    history.push("/login");
    setAnchorEl(null);
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
          {headerLinks.map((item, index) => (
            <MenuItem key={index}>
              <Link to={item.link}>
                <Trans>{item.text}</Trans>
              </Link>
            </MenuItem>
          ))}
          <MenuItem onClick={onLogout}>
            <Trans>Log out</Trans>
          </MenuItem>
        </Menu>
      }
    />
  );
}
export default Header;
