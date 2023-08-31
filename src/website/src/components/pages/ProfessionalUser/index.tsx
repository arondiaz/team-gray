import BgLayout from '../../shared/BackgroundLayout';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';
import { useEffect, useState } from 'react';

export const ProfessionalUserProfile = () => {
  const [user, setUser] = useState<IProfessionalUser>();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) location.href = 'login';
    setUser(decodeToken(token as string) as IProfessionalUser);
  }, []);

  return (
    <>
      <h1>
        Hola {user?.name} {user?.category_id}
      </h1>
      <BgLayout />
    </>
  );
};
