import { Meta, StoryObj } from "@storybook/react";
import ShopList from "./ShopList";

const meta: Meta<typeof ShopList> = {
  title: "ShopList",
  component: ShopList,
};

export default meta;
type Story = StoryObj<typeof ShopList>;

export const Primary: Story = {
  args: {},
};
