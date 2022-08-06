import { Form, SelectField } from 'dynamic-forms';

import { Label } from '@components/label';

interface InputSelectProps extends SelectField {
  formId: Form['id'];
}

export const InputSelect = ({
  formId, label, name, options,
}: InputSelectProps): JSX.Element => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name}>
        {options.map((opt) => (
          <option
            key={`${formId}-${name}-${opt.value}`}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </>
  );
};

InputSelect.displayName = 'Input type Select';
