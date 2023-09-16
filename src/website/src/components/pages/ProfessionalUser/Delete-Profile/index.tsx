import { useDelete } from '../../../../hooks/useDelete';
import styles from './DeleteProfile.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DeleteProfileProps {
  onCloseDelete: () => void;
}

export const DeleteProfile: React.FC<DeleteProfileProps> = ({
  onCloseDelete,
}) => {
  const { request } = useDelete();

  const notification = (color: string) => ({
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    style: {
      fontWeight: 'bold',
      border: `0.1rem solid ${color}`,
    },
  });

  const handleDelete = async () => {
    const response = await request();

    // TODO: Handle responses to display modals based on the status.
    switch (response?.status) {
      case 204:
        toast.success(
          '¡Cuenta eliminada correctamente!',
          notification('green')
        );
        localStorage.clear();
        break;
      case 500:
        toast.error(
          'Error al eliminar el perfil, por favor inténtelo de nuevo.',
          notification('red')
        );
        break;
      default:
        toast.error(
          'Error, por favor inténtelo de nuevo.',
          notification('red')
        );
        break;
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
