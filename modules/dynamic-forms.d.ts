declare module 'dynamic-forms' {
  interface Validation {
    msg: string;
    test: RegExp;
  }

  interface Field {
    id: string;
    label?: string;
    name: string;
    required?: boolean;
    type: Pick<HTMLInputTypeAttribute, 'checkbox' | 'password' |'radio' | 'select' | 'text'>;
  }

  interface TextField extends Field {
    placeholder: string;
    validations?: Validation[];
  }

  interface PasswordField extends Field {
    validations?: Validation[];
  }

  interface Option {
    label: string;
    value: string;
  }

  interface CheckboxField extends Field {
    options: Option[];
  }

  interface RadioField extends Field {
    options: Option[];
  }

  interface SelectField extends Field {
    options: Option[];
  }

  interface Form {
    description?: string;
    fields: (CheckboxField | PasswordField | RadioField | SelectField | TextField)[];
    id: string;
    submitText: string;
    title: string;
  }
}
