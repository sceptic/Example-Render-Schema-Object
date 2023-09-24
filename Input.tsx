import { InputHTMLAttributes, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  useState(() => {
    console.log('Input', props.id);
  }, []);

  return <input {...props} />;
};

export default Input;
