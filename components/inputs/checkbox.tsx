import { CheckboxField, Form } from 'dynamic-forms';

interface InputCheckboxProps extends CheckboxField {
  formId: Form['id'];
}

export const InputCheckbox = ({
  formId,
  name,
  options,
}: InputCheckboxProps): JSX.Element => {
  return (
    <>
      {options.map((opt) => (
        <div key={`${formId}-${name}-${opt.value}`}>
          <input
            type="checkbox"
            id={opt.value}
            value={opt.value}
            name={name}
          />
          <label htmlFor={opt.value}>{opt.label}</label>
        </div>
      ))}
    </>
  );
};

InputCheckbox.displayName = 'Input type Checkbox';
