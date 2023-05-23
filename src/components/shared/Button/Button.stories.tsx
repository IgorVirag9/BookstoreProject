import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onClickHandler: () => {},
    variant: {
      options: ["primary", "secondary"],
      control: { type: "submit" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Add to Cart",
    onClickHandler: () => console.log("Button1 clicked"),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Add to Cart",
    onClickHandler: () => console.log("Button2 clicked"),
    variant: "secondary",
  },
};
