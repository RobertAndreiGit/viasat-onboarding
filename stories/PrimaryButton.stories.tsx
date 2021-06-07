import React from "react";
import { Story, Meta } from "@storybook/react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import StyledButton from "../src/components/StyledButton";

export default {
  component: StyledButton,
  title: "Reusable/Buttons/Secondary",
} as Meta;

const Template: Story = (args) => {
  return <StyledButton {...args} />;
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  text: "Order your plan now",
  startIcon: <ArrowForwardIcon fontSize="default" />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  text: "Order your plan now",
  endIcon: <ArrowForwardIcon fontSize="default" />,
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  text: "Order your plan now",
  startIcon: <ArrowForwardIcon fontSize="default" />,
  endIcon: <ArrowForwardIcon fontSize="default" />,
};

export const WithNoIcon = Template.bind({});
WithNoIcon.args = {
  text: "Order your plan now",
};
