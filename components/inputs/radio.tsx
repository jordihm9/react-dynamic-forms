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
      {options.map((opt) => {
        const optionName = `${name}-${opt.value}`;
        return (
          <div key={`${formId}-${optionName}`}>
            <label htmlFor={optionName}>{opt.label}</label>
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
