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

  const handleDelete = async () => {
    const response = await request();

    // TODO: Handle responses to display modals based on the status.
    switch (response?.status) {
      case 204:
        toast.success('Cuenta eliminada!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
          style: {
            fontWeight: 'bold',
            border: '0.1rem solid green',
          },
        });
        localStorage.clear();
        break;
      case 500:
        toast.error('Error, por favor inténtelo de nuevo.', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
          style: {
            fontWeight: 'bold',
            border: '0.1rem solid red',
          },
        });
        break;
      default:
        console.log('default');
        toast.info('Default');
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
