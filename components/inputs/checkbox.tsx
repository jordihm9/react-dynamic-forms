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
      {options.map((opt) => {
        const optionName = `${name}-${opt.value}`;
        return (
          <div key={`${formId}-${optionName}`}>
            <input
              type="checkbox"
              id={optionName}
              value={opt.value}
              name={name}
            />
            <label htmlFor={optionName}>{opt.label}</label>
          </div>
        )
      })}
    </>
  );
};

InputCheckbox.displayName = 'Input type Checkbox';
