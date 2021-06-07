import React from "react";
import { Box, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    display: "flex",
    color: "#465967",
    padding: "15px 30px",
    backgroundColor: "white",
  },
  leftSection: {
    gap: 42,
    display: "flex",
  },
  link: {
    fontWeight: 700,
    color: "#465967",
  },
});

const StyledFooter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Box className={classes.leftSection}>
        <Link variant="caption" href="#blog" className={classes.link}>
          Blog
        </Link>
        <Link variant="caption" href="#about" className={classes.link}>
          About us
        </Link>
        <Link variant="caption" href="#terms" className={classes.link}>
          T&C
        </Link>
        <Link variant="caption" href="#privacy" className={classes.link}>
          Privacy Policy
        </Link>
      </Box>
      <Box flex="1" />
      <Typography variant="caption">
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Box>
  );
};

export default StyledFooter;
