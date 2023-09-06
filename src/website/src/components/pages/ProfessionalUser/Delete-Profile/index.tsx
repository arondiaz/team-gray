import { useDelete } from '../../../../hooks/useDelete';
import styles from './DeleteProfile.module.scss';

interface DeleteProfileProps {
  onCloseDelete: () => void;
}

export const DeleteProfile: React.FC<DeleteProfileProps> = ({
  onCloseDelete,
}) => {
  const { request } = useDelete() as any;

  const handleDelete = async () => {
    const data = await request();
    if (data) console.log('borrado');
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
