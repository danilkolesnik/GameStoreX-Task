import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './auth.modal.module.scss';

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

  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      initial={{ opacity: 0 }} // Начальная непрозрачность
      animate={{ opacity: 1 }} // Конечная непрозрачность
      exit={{ opacity: 0 }} // Непрозрачность при закрытии
      transition={{ duration: 0.3 }} // Длительность анимации
    >
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }} // Начальный размер
        animate={{ scale: 1 }} // Конечный размер
        exit={{ scale: 0.9 }} // Размер при закрытии
        transition={{ duration: 0.3 }} // Длительность анимации
      >
        <div className={styles.tabSection}>
          <motion.button
            className={activeTab === 'login' ? styles.activeTab : ''}
            onClick={() => console.log('Switch to login form')}
            whileHover={{ scale: 1.05 }} // При наведении кнопка немного увеличивается
            transition={{ duration: 0.2 }}
          >
            Login
          </motion.button>
          <motion.button
            className={activeTab === 'registration' ? styles.activeTab : ''}
            onClick={() => console.log('Switch to registration form')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Registration
          </motion.button>
        </div>

        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "login" ? (
            <div>
              <h2>Login Form</h2>
              {/* Ваша форма логина */}
            </div>
          ) : (
            <div>
              <h2>Registration Form</h2>
              {/* Ваша форма регистрации */}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
