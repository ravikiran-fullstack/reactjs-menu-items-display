import React from "react";
import useStyles from "./menuStyles";

import Item from "./item/Item";

const Menu = ({ menuItems }) => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};

export default Menu;
