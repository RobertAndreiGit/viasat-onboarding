import React from "react";
import { Button, makeStyles, withStyles } from "@material-ui/core";

const StyledButtonHOC = withStyles({
  root: {
    margin: 0,
    padding: 11,
    fontSize: 14,
    width: "100%",
    maxWidth: 328,
    borderRadius: 40,
    fontWeight: 700,
  },
})(Button);

const useStyles = makeStyles({
  primary: {
    color: "white",
    backgroundColor: "#04819E",
    "&:hover": {
      backgroundColor: "#04819E",
    },
  },
  secondary: {
    color: "#465967",
    backgroundColor: "white",
    border: "1px solid #465967",
  },
});

const StyledButton = (props: any) => {
  const classes = useStyles();

  return (
    <StyledButtonHOC
      className={props.primary ? classes.primary : classes.secondary}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
    >
      {props.text}
    </StyledButtonHOC>
  );
};

export default StyledButton;
