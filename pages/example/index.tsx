import type { NextPage } from 'next';

import Head from 'next/head';

import { DynamicForm } from '@components/dynamic-form';

import formExample from '@forms/example';

import exampleSource from '@forms/example.json';

const ExampleForm: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dynamic Forms App</title>
        <meta name="description" content="Dynamic Forms App Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Dynamic Example Form</h1>
        <div>
          <h2>Form</h2>
          <DynamicForm form={formExample} />
        </div>
        <div>
          <h2>Source</h2>
          <pre>
            {JSON.stringify(exampleSource, null, '\t')}
          </pre>
        </div>
      </main>
    </>
  );
};

ExampleForm.displayName = 'Example form render page';

export default ExampleForm;
