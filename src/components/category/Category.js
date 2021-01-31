import React from "react";

import Button from "@material-ui/core/Button";

import useStyles from "./categoryStyles";

const Category = ({changeCategory}) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.root}
      >
        <Button className={classes.btn} onClick={() => changeCategory()}>All</Button>
        <Button className={classes.btn} onClick={() => changeCategory('breakfast')}>Breakfast</Button>
        <Button className={classes.btn} onClick={() => changeCategory('lunch')}>Lunch</Button>
        <Button className={classes.btn} onClick={() => changeCategory('shakes')}>Shakes</Button>
      </div>
    </>
  );
};

export default Category;
