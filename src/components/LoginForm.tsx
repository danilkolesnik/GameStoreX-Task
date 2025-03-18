import Input from '@component/ui/Input';
import Button from '@component/ui/Button';
import styles from '@component/components/auth.modal.module.scss';
import SocialNetworks from '@component/components/SocialNetworks';

const LoginForm: React.FC = () => {

  const handleSubmit = async (formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response:', response); // data.token = 12345678
  };

  return (
    <form action={handleSubmit}>
      <div className={styles.formButtonWrapper}>
        <Input type="text" id="email" name="email" placeholder="Email" required />
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
