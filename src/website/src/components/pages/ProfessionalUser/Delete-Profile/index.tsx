import { useDelete } from '../../../../hooks/useDelete';
import styles from './DeleteProfile.module.scss';

interface DeleteProfileProps {
  onCloseDelete: () => void;
}

export const DeleteProfile: React.FC<DeleteProfileProps> = ({
  onCloseDelete,
}) => {
  const { request } = useDelete();

  const handleDelete = async () => {
    const response = await request();

    // TODO: Handle responses to display modals based on the status.
    switch (response?.status) {
      case 204:
        console.log('204');
        localStorage.clear();
        break;
      case 500:
        console.log('500');
        break;
      default:
        console.log('default');
    }
  };

  return (
    <div className={styles.containerdelete}>
      <h3 className={styles.textdelete}>
        ¿Estás seguro que deseas eliminar tu perfil?
      </h3>
      <div className={styles.btncontainer}>
        <button
          className={`${styles.btnconfirm} ${styles.btn}`}
          onClick={handleDelete}>
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
