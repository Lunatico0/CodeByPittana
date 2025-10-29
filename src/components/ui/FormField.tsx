import React from 'react';
import { FormFieldProps } from '@typings/formField';

const commonClass = 'block py-2.5 px-0 w-full text-sm text-text bg-transparent border-0 border-b-2 border-primary/50 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer'

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  defaultValue,
  isTextArea = false,
}) => {
  const hasDefaultValue = !!defaultValue;

  const forceFloatClass = hasDefaultValue
    ? 'scale-75 -translate-y-6'
    : 'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0';

  const labelClasses = `peer-focus:font-medium absolute text-sm text-text/60 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-top-left peer-focus:start-0 peer-focus:text-accent ${forceFloatClass} peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-full rtl:peer-focus:left-auto`;

  return (
    <div className="relative z-0 w-full mb-6 group">
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          rows={4}
          className={`${commonClass} resize-none`}
          placeholder=" "
          defaultValue={defaultValue}
        />
      ) : (
        <input
          type={name === 'email' ? 'email' : 'text'}
          name={name}
          id={name}
          className={`${commonClass}`}
          placeholder=" "
          defaultValue={defaultValue}
          required={name === 'subject' ? false : true}
        />
      )}
      <label
        htmlFor={name}
        className={labelClasses}
      >
        {label}
      </label>
    </div>
  )
};

export default FormField;
