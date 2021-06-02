import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  background: {
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: 8,
    left: 14,
    maxWidth: "50%",
    minWidth: "20%",
  },
});

const StyledBanner = () => {
  const classes = useStyles();
  return (
    <Box position="relative">
      <img
        src="./assets/LoginBanner.png"
        height="auto"
        width="100%"
        className={classes.background}
      />
      <img src="./assets/LogoViasat.svg" className={classes.logo} />
    </Box>
  );
};

export default StyledBanner;
