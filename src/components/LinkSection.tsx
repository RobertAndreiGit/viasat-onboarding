import React from "react";
import { Box, Link, withStyles, Typography } from "@material-ui/core";

const StyledLink = withStyles((theme) => ({
  root: {
    fontWeight: 700,
    color: "#04819E",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.up("sm")]: {
      color: "#32424E",
    },
  },
}))(Link);

const LinkSection = (props: any) => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      {props.title && (
        <Typography variant="subtitle1" align="center">
          {props.title}
        </Typography>
      )}
      <StyledLink href={props.linkTo}>{props.linkText}</StyledLink>
    </Box>
  );
};

export default LinkSection;
