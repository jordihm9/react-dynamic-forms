import { TextField } from 'dynamic-forms';

import { Label } from '@components/label';

interface InputTextProps extends TextField {}

export const InputText = ({ label, name, placeholder }: InputTextProps): JSX.Element => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
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
