import React, { useEffect, useState } from 'react';
import style from './BgLayout.module.scss';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';

export const BgLayout: React.FC = () => {
  const [user, setUser] = useState<IProfessionalUser>();

  useEffect(() => {
    if (localStorage.length > 0) {
      const token = localStorage.getItem('token');

      if (token) setUser(decodeToken(token as string) as IProfessionalUser);
    } else {
      return;
    }
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
