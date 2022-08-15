import {
  CheckboxField, Form, RadioField, SelectField, TextField
} from 'dynamic-forms';

import { InputCheckbox } from '@components/inputs/checkbox';
import { InputPassword } from '@components/inputs/password';
import { InputRadio } from '@components/inputs/radio';
import { InputSelect } from '@components/inputs/select';
import { InputText } from '@components/inputs/text';

interface DynamicFormProps {
  action?: string;
  form: Form;
  method?: 'DELETE' | 'GET' | 'PATCH' | 'POST';
}

export const DynamicForm = ({ form }: DynamicFormProps): JSX.Element => {
  return (
    <form>
      {form.fields.map((field) => (
        <>
          {field.type === 'text'
            ? <InputText key={field.id} {...field as TextField} />
            : null
          }
          {field.type === 'password'
            ? <InputPassword key={field.id} {...field as TextField} />
            : null
          }
          {field.type === 'select'
            ? <InputSelect key={field.id} formId={form.id} {...field as SelectField} />
            : null
          }
          {field.type === 'radio'
            ? <InputRadio key={field.id} formId={form.id} {...field as RadioField} />
            : null
          }
          {field.type === 'checkbox'
            ? <InputCheckbox key={field.id} formId={form.id} {...field as CheckboxField} />
            : null
          }
        </>
      ))}
    </form>
  );
};

DynamicForm.displayName = 'Dynamic Forms renderer';

DynamicForm.defaultProps = {
  action: undefined,
  method: 'POST',
};
