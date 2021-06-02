import { Box, makeStyles, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import StyledBanner from "../src/components/StyledBanner";
import StyledButton from "../src/components/StyledButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LinkSection from "../src/components/LinkSection";

const useStyles = makeStyles({
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  centered: {
    textAlign: "center",
  },
  subtitle: {
    paddingBottom: 10,
  },
});

function Onboarding() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" width="100vw" minHeight="100vh">
      <Box>
        <StyledBanner />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        margin="16px"
        flex="1"
        gridGap="16px"
      >
        <Box gridGap="16px" display="grid">
          <Typography className={classes.title}>Welcome to VIASAT</Typography>
          <Typography>
            Do you want to become a member of Viasat? Let us know what plan you
            prefer and we will do the rest
          </Typography>
          <Box className={classes.centered}>
            <StyledButton
              text="order your plan now"
              endIcon={<ArrowForwardIcon />}
            />
          </Box>
        </Box>
        <Box className={classes.centered}>
          <Typography variant="subtitle2" className={classes.subtitle}>
            Already a Viasat customer? Try the new My Viasat app.
          </Typography>
          <StyledButton
            primary
            text="register now"
            endIcon={<AccountCircleOutlinedIcon />}
          />
        </Box>
        <Box flex="1" />
        <Box>
          <LinkSection
            title="Already have a My Viasat account?"
            linkText="LOG IN"
            linkTo="#"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Onboarding;
