import BgLayout from '../../shared/BackgroundLayout';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './ProfessionalUser.module.scss';
import ProfileImages from '../Trades/assets/ProfileImage';
import { Editform } from './editform';

export const ProfessionalUserProfile = () => {
  const [editModal, setEditModal] = useState(false);

  const openEditModal = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const [user, setUser] = useState<IProfessionalUser>();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) setUser(decodeToken(token as string) as IProfessionalUser);
  }, [token]);
  if (!token) return <Navigate to="/login" />;

  return (
    <div className={styles.containerprofile}>
      <h1 className={styles.title}>Así se muestra tu perfil</h1>
      <div className={styles.cardprofile}>
        <div className={styles.containerimage}>
          <ProfileImages categoryId={user?.category_id || '1'} />
        </div>
        <div className={styles.datacontainer}>
          <h3 className={`${styles.titledata} ${styles.link}`}>
            Link: <p className={styles.data}>{user?.link}</p>
          </h3>
          <h3 className={styles.titledata}>
            Nombre:
            <p className={styles.data}>{user?.name}</p>
          </h3>
          <h3 className={styles.titledata}>
            Edad: <p className={styles.data}>{user?.age}</p>
          </h3>
          <h3 className={styles.titledata}>
            Género: <p className={styles.data}>{user?.gender}</p>
          </h3>
          <h3 className={styles.titledata}>
            Número de habilitación:{' '}
            <p className={styles.data}>{user?.auth_number}</p>
          </h3>
          <h3 className={styles.titledata}>
            Teléfono: <p className={styles.data}> {user?.tel}</p>
          </h3>
          <h3 className={styles.titledata}>
            Sobre mí: <p className={styles.data}>{user?.about_me}</p>
          </h3>
        </div>
      </div>
      <div className={styles.containerbtn}>
        <button
          className={`${styles.editbtn} ${styles.btn}`}
          onClick={openEditModal}>
          Editar
        </button>
        <button className={`${styles.deletebtn} ${styles.btn}`}>
          Eliminar
        </button>
      </div>

      {editModal && (
        <div className={styles.modaleditform}>
          <Editform onCloseForm={closeEditModal} />
        </div>
      )}

      <BgLayout />
    </div>
  );
};
