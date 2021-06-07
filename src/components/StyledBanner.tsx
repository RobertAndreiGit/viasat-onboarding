import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "100%",
    position: "relative",
  },
  background: {
    width: "100%",
    height: "auto",
    position: "relative",
    content: "url('./assets/LoginBanner-mobile.png')",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      objectFit: "cover",
      content: "url('./assets/LoginBanner-desktop.png')",
    },
  },
  logo: {
    top: 8,
    left: 14,
    maxWidth: "50%",
    minWidth: "20%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const StyledBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <img className={classes.background} />
      <img src="./assets/LogoViasat.svg" className={classes.logo} />
    </Box>
  );
};

export default StyledBanner;
