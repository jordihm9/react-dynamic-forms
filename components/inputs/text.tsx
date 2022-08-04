import { TextField } from 'dynamic-forms';

interface InputTextProps extends TextField {}

export const InputText = ({ label, name, placeholder }: InputTextProps): JSX.Element => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
};

InputText.displayName = 'Input type Text';
