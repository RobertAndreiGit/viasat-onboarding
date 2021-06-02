import React from "react";
import { Box, Link, withStyles, Typography } from "@material-ui/core";

const StyledLink = withStyles({
  root: {
    fontWeight: 700,
    textDecoration: "none",
    color: "#04819E",
    "&:hover": {
      textDecoration: "none",
    },
  },
})(Link);

const LinkSection = (props: any) => {
  return (
    <Box flex alignItems="center" display="flex" flexDirection="column">
      {props.title && (
        <Typography variant="subtitle1">{props.title}</Typography>
      )}
      <StyledLink href={props.linkTo}>{props.linkText}</StyledLink>
    </Box>
  );
};

export default LinkSection;
