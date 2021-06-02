import React from "react";
import { Story, Meta } from "@storybook/react";
import LinkSection from "../src/components/LinkSection";

export default {
  component: LinkSection,
  title: "Reuseabble/LinkSection",
} as Meta;

const Template: Story = (args) => {
  return <LinkSection {...args} />;
};

export const LinkWithTitle = Template.bind({});

LinkWithTitle.args = {
  title: "Have an account?",
  linkText: "Log in",
  linkTo: "#",
};
