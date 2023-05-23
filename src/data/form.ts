export const loginFormData = {
  headingText: "Login",
  linkText: "Register here...",
  linkRegister: "/Register",
  inputs: [
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
  submitData: {
    buttonText: "Login",
  },
};

export const registerFormData = {
  headingText: "Register",
  inputs: [
    {
      id: "adress",
      name: "adress",
      label: "Adress:",
      type: "adress",
      placeholder: "Enter your adress",
    },
    {
      id: "dateOfBirth",
      name: "dateOfBirth",
      label: "Date of birth:",
      type: "dateOfBirth",
      placeholder: "Enter your date of birth",
    },
    {
      id: "email",
      name: "email",
      label: "Email:",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "name",
      name: "name",
      label: "Name:",
      type: "name",
      placeholder: "Enter your name",
    },
    {
      id: "lastName",
      name: "lastName",
      label: "Lastname:",
      type: "lastName",
      placeholder: "Enter your lastname",
    },
    {
      id: "password",
      name: "password",
      label: "Password:",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      label: "Phone number:",
      type: "phoneNumber",
      placeholder: "Enter your phone number",
    },
    {
      id: "username",
      name: "username",
      label: "Username:",
      type: "username",
      placeholder: "Enter your username",
    },
  ],
  submitData: {
    buttonText: "Register",
    onSubmitHandler: () => console.log("Register done!"),
  },
};
