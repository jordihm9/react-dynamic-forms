import { Form, RadioField } from 'dynamic-forms';

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
      {options.map((opt) => (
        <div key={`${formId}-${name}-${opt.value}`}>
          <label htmlFor={opt.value}>{opt.label}</label>
          <input
            type="radio"
            id={opt.value}
            value={opt.value}
            name={name}
          />
        </div>
      ))}
    </>
  );
};

InputRadio.displayName = 'Input type Radio';
