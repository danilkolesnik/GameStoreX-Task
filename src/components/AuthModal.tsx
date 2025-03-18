import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './auth.modal.module.scss';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { CloseIcon } from '@component/assets/icons/icons';

interface ModalProps {
  onClose: () => void;
  activeTab: "login" | "registration";
}

const Modal: React.FC<ModalProps> = ({ onClose, activeTab }) => {

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  const [tab, setTab] = useState<string>(activeTab);

  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} 
    >
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }} 
        exit={{ scale: 0.9 }} 
        transition={{ duration: 0.3 }}
      >
        <div className={styles.modalHeader}>
            <div className={styles.tabSection}>
                <motion.button
                    className={tab === 'login' ? styles.activeTab : ''}
                    onClick={() => setTab('login')}
                    transition={{ duration: 0.2 }}
                >
                    Login
                </motion.button>
                <motion.button
                    className={tab === 'registration' ? styles.activeTab : ''}
                    onClick={() => setTab('registration')}
                    transition={{ duration: 0.2 }}
                >
                    Registration
                </motion.button>
            </div>
            <span onClick={() => onClose()} className={styles.closeWrapper}>
                <CloseIcon />
            </span>
        </div>
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "login" ? <LoginForm /> :  <RegistrationForm />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
