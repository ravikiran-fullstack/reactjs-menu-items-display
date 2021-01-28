import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import useStyles from "./itemStyles";

const Item = (item) => {
  const classes = useStyles();
  const [theme, setTheme] = React.useState({ direction: false });
  console.log(item);
  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <CardMedia
          className={classes.cover}
          image={item.img}
          title="Live from space album cover"
        />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography component="h5" variant="h5" className={classes.heading}>
              {item.title}
            </Typography>
            <span className={classes.price}>${item.price}</span>
          </div>
          <hr />
          <Typography variant="subtitle1" color="textSecondary">
            {item.desc}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Item;
