import React, { useState } from 'react';
import Input from '@component/ui/Input';
import Button from '@component/ui/Button';
import Checkbox from '@component/ui/Checkbox';
import styles from './auth.modal.module.scss';
import SocialNetworks from './SocialNetworks';

const RegistrationForm: React.FC = () => {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response:', response); // data.user = {...}
  };

  return (
    <form action={handleSubmit}>
      <div className={styles.formButtonWrapper}>
        <Input type="text" id="username" name="username" placeholder="Email or mobile" required />
        <Input type="password" id="password" name="password" placeholder="Password" required />
        <Input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required />
      </div>
      <Checkbox
        id="socialNetworks"
        label="Use social networks"
        checked={isChecked}
        onChange={handleCheckboxChange }
      />
      <div className={styles.submitButtonWrapper}>
        <Button type="submit">Registration</Button>
      </div>
      <SocialNetworks />
    </form>
  );
};

export default RegistrationForm;
