import { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";
import { loginFormData } from "../../../data/form";
// import { registerFormData } from "../../../data/form";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const LoginForm: Story = {
  args: {
    // headingText: loginFormData.headingText,
    // inputs: loginFormData.inputs,
    // submitData: loginFormData.submitData,
    // link: {
    //   text: loginFormData.linkText,
    //   url: loginFormData.linkRegister,
  },
};

export const Register: Story = {
  args: {
    // headingText: registerFormData.headingText,
    // inputs: registerFormData.inputs,
    // submitData: registerFormData.submitData,
  },
};
