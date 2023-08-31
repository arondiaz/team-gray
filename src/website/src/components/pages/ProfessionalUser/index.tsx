import BgLayout from '../../shared/BackgroundLayout';
import decodeToken from 'jwt-decode';
import { IProfessionalUser } from '../../../interfaces/ProfessionalUser.interface';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const ProfessionalUserProfile = () => {
  const [user, setUser] = useState<IProfessionalUser>();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) setUser(decodeToken(token as string) as IProfessionalUser);
  }, [token]);
  if (!token) return <Navigate to="/login" />;
  return (
    <>
      <h1>
        Hola {user?.name} {user?.category_id} {user?.about_me}
      </h1>
      <BgLayout />
    </>
  );
};
