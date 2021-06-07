import React from "react";
import { Story, Meta } from "@storybook/react";

import StyledFooter from "../src/components/StyledFooter";

export default {
  component: StyledFooter,
  title: "Reusable/Footer",
} as Meta;

const Template: Story = (args) => {
  return <StyledFooter />;
};

export const Standard = Template.bind({});

Standard.args = {};
