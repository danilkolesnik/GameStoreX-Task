import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isBold?: boolean;
}

export default function Button({ children, isBold, className = '', ...props }: ButtonProps) {
  return (
    <button
    className={`${styles.button} ${isBold ? styles.bold : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
