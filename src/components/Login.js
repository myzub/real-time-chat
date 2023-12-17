import { Box, Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <Container>
      <Grid
        style={{ height: window.innerHeight - 50 }}
        container
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
