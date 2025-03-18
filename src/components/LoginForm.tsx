import React from 'react';
import Input from '@component/ui/Input';
import Button from '@component/ui/Button';
import styles from './auth.modal.module.scss';
import SocialNetworks from './SocialNetworks';

const LoginForm: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {

    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    console.log('Form Data:', formObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formButtonWrapper}>
        <Input type="text" id="username" name="username" placeholder="Email" required />
        <Input type="password" id="password" name="password" placeholder="Password" required />
      </div>
      <div className={styles.submitButtonWrapper}>
        <Button type="submit">Login</Button>
      </div>
      <SocialNetworks />
      <div className={styles.forgotPasswordBlock}>
        <a href="#" className={styles.forgotPasswordLink}>Forgot password?</a>
      </div>
    </form> 
  );
};

export default LoginForm;
