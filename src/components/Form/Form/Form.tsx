import { InputProps } from "../Input/Input";
import Input from "../Input/Input";
import { FormWrapper } from "./Form.style";
import Button from "../../shared/Button/Button";
import { ChangeEvent, useState } from "react";
import User from "../../../model/user";

type FormProps = {
  headingText: string;
  link?: {
    text: string;
    url: string;
  };
  inputs: InputProps[];
  submitData: {
    buttonText: string;
    onSubmitHandler: (event: SubmitEvent, data: Record<string, string>) => void;
  };
};

const createInitialState = (inputs: InputProps[]): Record<string, string> => {
  let initialState: User = {
    adress: "",
    dateOfBirth: "",
    email: "",
    lastName: "",
    name: "",
    password: "",
    phoneNumber: "",
    username: "",
    id: "",
  };
  inputs.forEach(({ name }) => {
    initialState = { ...initialState, [name]: "" };
  });
  return initialState;
};

const Form = ({ headingText, inputs, submitData, link }: FormProps) => {
  const [formState, setFormState] = useState<Record<string, string>>(
    createInitialState(inputs)
  );

  const onChangeHandler = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = changeEvent.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <FormWrapper>
      <h2>{headingText}</h2>
      <form>
        {inputs.map(({ name, label, type, placeholder }) => {
          return (
            <Input
              id={name}
              key={name}
              name={name}
              label={label}
              type={type}
              placeholder={placeholder}
              value={formState[name]}
              onChange={onChangeHandler}
            />
          );
        })}
        <Button
          text={submitData.buttonText}
          onClickHandler={(event: SubmitEvent) =>
            submitData.onSubmitHandler(event, formState)
          }
          type="submit"
        />
      </form>
      {link && <a href={link.url}>{link.text}</a>}
    </FormWrapper>
  );
};

export default Form;
