import React from "react";
import { Story, Meta } from "@storybook/react";
import StyledBanner from "../src/components/StyledBanner";

export default {
  component: StyledBanner,
  title: "Reuseabble/Banner",
} as Meta;

const Template: Story = (args) => {
  return <StyledBanner {...args} />;
};

export const Standard = Template.bind({});

Standard.args = {};
