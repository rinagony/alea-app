import React from 'react';
import { TextField } from '@mui/material';
import { Field, ErrorMessage, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  fullWidth?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  fullWidth = true,
  margin = 'normal',
  required = false,
  variant = 'outlined',
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth={fullWidth}
          margin={margin}
          required={required}
          variant={variant}
          error={form.touched[name] && Boolean(form.errors[name])}
          helperText={<ErrorMessage name={name} />}
        />
      )}
    </Field>
  );
};

export default InputField;