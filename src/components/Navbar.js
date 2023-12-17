import React, { useContext } from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar color="warning" position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button onClick={() => auth.signOut() }>Log out</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button>Log in</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
