import { Form, RadioField } from 'dynamic-forms';

import { Label } from '@components/label';

interface InputRadioProps extends RadioField {
  formId: Form['id'];
}

export const InputRadio = ({
  formId,
  name,
  options,
}: InputRadioProps): JSX.Element => {
  return (
    <>
      {options.map((opt) => {
        const optionName = `${name}-${opt.value}`;
        return (
          <div key={`${formId}-${optionName}`}>
            <Label htmlFor={optionName}>{opt.label}</Label>
            <input
              type="radio"
              id={opt.value}
              value={opt.value}
              name={optionName}
            />
          </div>
        )
      })}
    </>
  );
};

InputRadio.displayName = 'Input type Radio';
