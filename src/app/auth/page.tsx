'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from './auth.page.module.scss';
import Button from "@component/ui/Button";
import AuthModal from "@component/components/AuthModal";

export default function Auth() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "registration">("login");

  const handleOpenLogin = () => {
    setActiveTab("login");
    setShowModal(true);
  };

  const handleOpenRegistration = () => {
    setActiveTab("registration");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRedirect = () => {
    router.push('/orders');
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.buttonSection}>
        <div className={styles.authButtonWrapper}>
          <Button onClick={handleOpenRegistration}>Registration</Button>
          <Button onClick={handleOpenLogin}>Login</Button>
        </div>
        <div className={styles.ordersButtonWrapper}>
          <Button onClick={handleRedirect} isBold={true}>Orders</Button>
        </div>
      </section>

      {showModal && (
        <AuthModal onClose={handleCloseModal} activeTab={activeTab} />
      )}
    </div>
  );
}
