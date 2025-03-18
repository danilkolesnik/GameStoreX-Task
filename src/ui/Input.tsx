import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({type, name, id, value, onChange, placeholder, required = false }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={styles.input}
    />
  );
};

export default Input;
