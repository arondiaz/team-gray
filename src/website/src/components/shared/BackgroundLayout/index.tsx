import React, { useEffect, useState } from 'react';
import style from './BgLayout.module.scss';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';

export const BgLayout: React.FC = () => {
  const [user, setUser] = useState<IProfessionalUser>();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) location.href = 'login';
    setUser(decodeToken(token as string) as IProfessionalUser);
  }, []);

  return (
    <>
      <h1>Hola {user?.name}</h1>
      <div className={style.isotipoLogoContainer}>
        <img
          src="../isotype_bg_layout.svg"
          alt="Logo"
          className={style.isotipoLogo}
        />
      </div>
    </>
  );
};

export default BgLayout;
