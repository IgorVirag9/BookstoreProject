import { Meta, StoryObj } from "@storybook/react";
import ErrorMessageBox from "./ErrorMessageBox";

const meta: Meta<typeof ErrorMessageBox> = {
  title: "ErrorMessageBox",
  component: ErrorMessageBox,
};

export default meta;
type Story = StoryObj<typeof ErrorMessageBox>;

export const Primary: Story = {
  args: {},
};
