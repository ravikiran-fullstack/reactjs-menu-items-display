import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "20px"
  },
  btn: {
    textTransform:'capitalize',
    marginRight: "5%",
    color: "#c59d5f",
    border: '2px solid #c59d5f',
    "&:hover, &:focus": {
      backgroundColor: ({ hoverBackgroundColor = "#c59d5f", backgroundColor ="white" }) => hoverBackgroundColor ? hoverBackgroundColor : backgroundColor,
      color: ({hoverColor ="white", color = "#c59d5f"}) => hoverColor ? hoverColor : color,
    },
  },
}));
