import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Box, Hidden, makeStyles, Typography } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import LinkSection from "../src/components/LinkSection";
import StyledBanner from "../src/components/StyledBanner";
import StyledButton from "../src/components/StyledButton";
import StyledFooter from "../src/components/StyledFooter";

const useStyles = makeStyles((theme) => ({
  onboarding: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  topWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  logoSection: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  bannerWrapper: {
    [theme.breakpoints.up("sm")]: {
      flex: 3,
    },
  },
  formWrapper: {
    flex: 1,
    display: "flex",
    alignContent: "stretch",
    [theme.breakpoints.up("sm")]: {
      flex: 2,
      padding: "50px",
      minWidth: "400px",
      justifyContent: "center",
      background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "75px",
    },
  },
  form: {
    flex: 1,
    gridGap: 16,
    padding: 16,
    display: "flex",
    maxHeight: "800px",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      borderRadius: 15,
      maxWidth: "400px",
      alignSelf: "center",
      padding: "20px 40px",
      backgroundColor: "white",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    },
  },
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
  footer: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function Onboarding() {
  const classes = useStyles();
  return (
    <Box className={classes.onboarding}>
      <Box className={classes.topWrapper}>
        <Box className={classes.bannerWrapper}>
          <StyledBanner />
        </Box>
        <Box className={classes.formWrapper}>
          <Box className={classes.form}>
            <Box className={classes.logoSection}>
              <Image
                src="/assets/LogoViasat-color.svg"
                width="100%"
                height="70"
              />
            </Box>
            <Hidden xsDown>
              <Box flex="1" maxHeight="50px" />
            </Hidden>
            <Box gridGap="16px" display="grid">
              <Typography className={classes.title}>
                Welcome to VIASAT
              </Typography>
              <Typography>
                Do you want to become a member of Viasat? Let us know what plan
                you prefer and we will do the rest
              </Typography>
              <Box className={classes.centered}>
                <StyledButton
                  text="order your plan now"
                  endIcon={<ArrowForwardIcon />}
                  primary
                />
              </Box>
            </Box>
            <Box className={classes.centered}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Already a Viasat customer? Try the new My Viasat app.
              </Typography>
              <StyledButton
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
      </Box>
      <Box className={classes.footer}>
        <StyledFooter />
      </Box>
    </Box>
  );
}

export default Onboarding;
