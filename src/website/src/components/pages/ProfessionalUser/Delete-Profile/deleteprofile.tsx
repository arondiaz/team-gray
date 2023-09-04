import styles from './DeleteProfile.module.scss';

interface DeleteprofileProps {
  onCloseDelete: () => void;
}

export const Deleteprofile: React.FC<DeleteprofileProps> = ({
  onCloseDelete,
}) => {
  return (
    <div className={styles.containerdelete}>
      <h3 className={styles.textdelete}>
        ¿Estás seguro que deseas eliminar tu perfil?
      </h3>
      <div className={styles.btncontainer}>
        <button className={`${styles.btnconfirm} ${styles.btn}`}>
          Eliminar perfil
        </button>
        <button
          className={`${styles.btnclose} ${styles.btn}`}
          onClick={onCloseDelete}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
