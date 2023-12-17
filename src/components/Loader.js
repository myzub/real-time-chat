import React from "react";
import { Container, Grid } from "@mui/material";

const Loader = () => {
  return (
    <Container>
      <Grid
        style={{ height: window.innerHeight - 50 }}
        container
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
