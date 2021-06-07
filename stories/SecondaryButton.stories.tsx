import React from "react";
import { Story, Meta } from "@storybook/react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import StyledButton from "../src/components/StyledButton";

export default {
  component: StyledButton,
  title: "Reusable/Buttons/Primary",
} as Meta;

const Template: Story = (args) => {
  return <StyledButton {...args} />;
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  text: "Register now",
  startIcon: <AccountCircleOutlinedIcon fontSize="small" />,
  primary: true,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  text: "Register now",
  endIcon: <AccountCircleOutlinedIcon fontSize="small" />,
  primary: true,
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  text: "Register now",
  startIcon: <AccountCircleOutlinedIcon fontSize="small" />,
  endIcon: <AccountCircleOutlinedIcon fontSize="small" />,
  primary: true,
};

export const WithNoIcon = Template.bind({});
WithNoIcon.args = {
  text: "Register now",
  primary: true,
};
