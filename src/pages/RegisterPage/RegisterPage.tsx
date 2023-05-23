import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form/Form";
import Layout from "../../components/shared/Layout/Layout";
import { registerFormData } from "../../data/form";
import User from "../../model/user";
import { postUser } from "../../services/userService";
import { StyledHeading2 } from "./RegisterPage.style";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const RegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const registerUser = (
    event: SubmitEvent,
    registerUserData: Record<string, string>
  ) => {
    event.preventDefault();

    const { email, password } = registerUserData;

    const registerWithFirebase = async () => {
      try {
        const userFirebase = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userFirebase);
        setIsRegistered(true);
        navigate("/login");
      } catch (error) {
        console.log(error);
        setIsRegistered(false);
      }
    };

    postUser(registerUserData as User)
      .then(() => {
        registerWithFirebase();
      })
      .catch((error) => {
        console.error("Failed to post user:", error);
        setIsRegistered(false);
      });
  };

  return (
    <Layout>
      <Form
        headingText={registerFormData.headingText}
        inputs={registerFormData.inputs}
        submitData={{
          buttonText: "Register",
          onSubmitHandler: registerUser,
        }}
      />
      {isRegistered && (
        <StyledHeading2>You have been registered!</StyledHeading2>
      )}
    </Layout>
  );
};

export default RegisterPage;
