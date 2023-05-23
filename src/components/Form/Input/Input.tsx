import StyledInput from "./Input.style";

export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  id: string;
  value?: string;
  onChange?: any;
};

const Input = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) => {
  if (name.length === 0) {
    alert(" you have to put something");
  }

  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </StyledInput>
  );
};

export default Input;
