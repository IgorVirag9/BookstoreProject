import { Meta, StoryObj } from "@storybook/react";
import { navbarLinks } from "../../../data/navbar";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    links: navbarLinks,
  },
};
