import React, {useState} from "react";

import Grid from "@material-ui/core/Grid";
import data from "../../data";

import Category from "../category/Category";

import Item from "./item/Item";

const Menu = () => {

  const [menuItems, setMenuItems] = useState(data);
  const categories = ['all', ...new Set(data.map(item => item.category))]
  const changeCategory = (category) => {
    if(category){
      console.log(category)
      if(category === 'all'){
        setMenuItems(data)
        return;
      }
      setMenuItems(
        data.filter(item => item.category === category)
      )
      return;
    } 
  }
  return (
    <>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <Category categories={categories} changeCategory ={changeCategory}></Category>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {menuItems.map((item) => {
              return <Item key={item.id} {...item}></Item>;
            })}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
