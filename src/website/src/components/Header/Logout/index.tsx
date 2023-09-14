import styles from './Logout.module.scss';

export const LogoutModal = ({ isOpen, onClose, onConfirm }: any) => {
  return (
    isOpen && (
      <div className={styles.modalcontainer}>
        <div className={styles.modal}>
          <h3>¿Estás seguro de que quieres cerrar sesión?</h3>
          <div className={styles.buttonscontainer}>
            <button
              onClick={onConfirm}
              className={`${styles.btn} ${styles.btnlogut}`}>
              Cerrar sesión
            </button>
            <button
              onClick={onClose}
              className={`${styles.btn} ${styles.btnlogut}`}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  );
};
