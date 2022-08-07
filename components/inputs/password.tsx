import { PasswordField } from 'dynamic-forms';

import { Label } from '@components/label';

interface InputPasswordProps extends PasswordField {}

export const InputPassword = ({ label, name }: InputPasswordProps): JSX.Element => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type="password"
      />
    </>
  );
};

InputPassword.displayName = 'Input type Password';
