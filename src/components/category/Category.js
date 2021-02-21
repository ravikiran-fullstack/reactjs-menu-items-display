import React from "react";

import Button from "@material-ui/core/Button";

import useStyles from "./categoryStyles";

const Category = ({categories, changeCategory}) => {
  console.log(categories);
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.root}
      >
        {/* <Button className={classes.btn} onClick={() => changeCategory()}>All</Button> */}
        {categories.map(category => {
          return <Button key={category} className={classes.btn} onClick={() => changeCategory(`${category}`)}>{category}</Button>
        })}
        {/* <Button className={classes.btn} onClick={() => changeCategory('breakfast')}>Breakfast</Button>
        <Button className={classes.btn} onClick={() => changeCategory('lunch')}>Lunch</Button>
        <Button className={classes.btn} onClick={() => changeCategory('shakes')}>Shakes</Button> */}
      </div>
    </>
  );
};

export default Category;
