import React from "react";
import { Box, Button, makeStyles, withStyles } from "@material-ui/core";

const StyledButtonHOC = withStyles({
  root: {
    borderRadius: 40,
    maxWidth: 328,
    width: "100%",
    fontSize: 14,
    padding: 11,
    margin: 0,
    fontWeight: 700,
  },
})(Button);

const useStyles = makeStyles({
  primary: {
    backgroundColor: "#04819E",
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    color: "#465967",
    border: "1px solid #04819E",
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
