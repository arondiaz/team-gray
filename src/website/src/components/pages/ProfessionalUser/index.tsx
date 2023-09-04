import BgLayout from '../../shared/BackgroundLayout';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './ProfessionalUser.module.scss';
import ProfileImages from '../Trades/assets/ProfileImage';
import { Editform } from './Edit-Form';
import { Deleteprofile } from './Delete-Profile/deleteprofile';

export const ProfessionalUserProfile = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const openEditModal = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const [user, setUser] = useState<IProfessionalUser>();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) setUser(decodeToken(token as string) as IProfessionalUser);
  }, [token]);
  if (!token) return <Navigate to="/login" />;

  //Calculate age of user
  const birth_date = user?.birth_date;

  function calculateAge(birth_date: any) {
    const birthDateObj = new Date(birth_date);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0) {
      age -= 1;
    }

    if (monthDifference === 0 && today.getDate() < birthDateObj.getDate()) {
      age -= 1;
    }

    return age;
  }

  const age = calculateAge(birth_date);

  // console.log(user);
  return (
    <div className={styles.containerprofile}>
      <h1 className={styles.title}>Así se muestra tu perfil</h1>
      <div className={styles.cardprofile}>
        <div className={styles.containerimage}>
          <ProfileImages categoryId={user?.category_id || '1'} />
        </div>
        <div className={styles.datacontainer}>
          <div className={styles.section}>
            <h3 className={`${styles.titledata} ${styles.link}`}>
              Link:{' '}
              <span className={`${styles.data} ${styles.linkspan} `}>
                {user?.link}
              </span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Nombre:
              <span className={styles.data}>
                {' '}
                {user?.name} {user?.last_name}
              </span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Edad: <span className={styles.data}>{age}</span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Género: <span className={styles.data}>{user?.gender}</span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Número de habilitación:{' '}
              <span className={styles.data}>{user?.auth_number}</span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Teléfono: <span className={styles.data}> {user?.tel}</span>
            </h3>
          </div>

          <div className={styles.section}>
            <h3 className={styles.titledata}>
              Sobre mí: <span className={styles.data}>{user?.about_me}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.containerbtn}>
        <button
          className={`${styles.editbtn} ${styles.btn}`}
          onClick={openEditModal}>
          Editar
        </button>
        <button
          className={`${styles.deletebtn} ${styles.btn}`}
          onClick={openDeleteModal}>
          Eliminar
        </button>
      </div>

      {editModal && (
        <div className={styles.modaleditform}>
          <Editform onCloseForm={closeEditModal} />
        </div>
      )}

      {deleteModal && (
        <div className={styles.modaldelete}>
          <Deleteprofile onCloseDelete={closeDeleteModal} />
        </div>
      )}

      <BgLayout />
    </div>
  );
};
