import Layout from "../../components/shared/Layout/Layout";
import Form from "../../components/Form/Form/Form";
import { loginFormData } from "../../data/form";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginUser = (
    event: SubmitEvent,
    loginUserData: Record<string, string>
  ) => {
    event.preventDefault();

    const { email, password } = loginUserData;

    const loginWithFirebase = async () => {
      try {
        const userFirebase = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userFirebase);
        navigate("/");
      } catch (error) {
        console.log(error);
        alert("You have to log in");
      }
    };
    loginWithFirebase();
  };

  return (
    <Layout>
      <Form
        headingText={loginFormData.headingText}
        inputs={loginFormData.inputs}
        submitData={{
          buttonText: "Login",
          onSubmitHandler: loginUser,
        }}
        link={{
          text: loginFormData.linkText,
          url: loginFormData.linkRegister,
        }}
      />
    </Layout>
  );
};

export default LoginPage;
