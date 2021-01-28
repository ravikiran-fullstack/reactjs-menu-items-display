import React from "react";

import Category from "./components/category/Category";
import Menu from "./components/menu/Menu";

import data from "./data";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./appStyles";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ marginTop: "100px" }}
        >
          <Grid item xs={12}>
            <section className={classes.title}>
              <Typography variant="h2">Our Menu</Typography>
              <div className={classes.underline}></div>
            </section>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            <Category></Category>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            <Menu menuItems={data}></Menu>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
