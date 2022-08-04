import { Form } from 'dynamic-forms';

const ExampleForm: Form = {
  id: 'example-form',
  title: 'Hello World!',
  description: 'Hi! I\'m a dynamic form!',
  submitText: 'Click me to submit!',
  fields: [
    {
      id: 'example-user-name',
      label: 'Name',
      name: 'user-name',
      placeholder: 'Foo',
      required: true,
      type: 'text',
    },
    {
      id: 'example-user-surname',
      label: 'Surname',
      name: 'user-surname',
      placeholder: 'Foo',
      required: false,
      type: 'text',
    },
    {
      id: 'example-user-password',
      label: 'Password',
      name: 'user-password',
      placeholder: 'Foo',
      required: true,
      type: 'password',
    },
    {
      id: 'example-user-sex',
      label: 'Sex',
      name: 'user-sex',
      required: true,
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'male' },
        { label: 'Non Binary', value: 'non-binary' },
      ]
    },
    {
      id: 'example-user-role',
      label: 'Role',
      name: 'user-role',
      required: true,
      type: 'select',
      options: [
        { label: 'Full Stack', value: 'full-stack' },
        { label: 'Backend', value: 'backend' },
        { label: 'Frontend', value: 'frontend' },
      ]
    },
    {
      id: 'example-newsletter',
      label: 'Subscribe to newsletter agreement',
      name: 'newsletter-agreement',
      required: false,
      type: 'checkbox',
      options: [
        { label: 'Subscribe', value: 'true' },
      ]
    },
  ],
}

export default  ExampleForm;
