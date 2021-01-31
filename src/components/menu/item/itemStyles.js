import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: '47%',
    padding: "10px",
    height: "170px",
    marginBottom: "40px",
    boxShadow: "none",
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    padding: "0 2rem",
  },
  cover: {
    border: "5px solid #c59d5f",
    borderRadius: "10px",
    width: 151,
    height: "150px",
  },
  image: {
    height: "150px",
    width: "150px",
  },
  heading: {
    width: "90%",
  },
  price: {
    color: "#c59d5f",
    fontWeight: "bold",
  },
}));
