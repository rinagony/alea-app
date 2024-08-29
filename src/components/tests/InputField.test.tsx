import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import userEvent from '@testing-library/user-event';
import InputField from '../InputField';

describe('InputField', () => {
  const initialValues = { testField: '' };
  const validationSchema = Yup.object({
    testField: Yup.string().required('This field is required'),
  });

  const renderinpyt = (initialValues: any) => {
    return render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={jest.fn()}
      >
        <Form>
          <InputField name="testField" label="Test Field" />
        </Form>
      </Formik>
    );
  };

  it('renders the InputField with cirrectly', async () => {
    renderinpyt(initialValues);
    expect(screen.getByLabelText(/Test Field/i)).toBeInTheDocument();

    const input = screen.getByLabelText(/Test Field/i);
    userEvent.click(input); 
    userEvent.tab();

    expect(await screen.findByText('This field is required')).toBeInTheDocument();
  });
});