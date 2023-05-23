import { Meta, StoryObj } from "@storybook/react";
import { socialMediaLinks } from "../../../data/footer";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    links: socialMediaLinks,
  },
};
