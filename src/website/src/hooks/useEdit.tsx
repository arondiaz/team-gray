import { professionalUserServiceInstance } from '../services/ProfessionalUser.service';
import { apiServiceInstance } from '../services/ApiService';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';

export function UseEdit() {
  const token = localStorage.getItem('token');

  const editUser = async ({
    name,
    last_name,
    dni,
    province,
    city,
    tel,
    link,
    about_me,
    gender,
    birth_date,
    auth_number,
    img,
    category_id,
  }: IProfessionalUser) => {
    try {
      if (token) {
        apiServiceInstance.authorize(token);

        const response =
          await professionalUserServiceInstance.updateProfessionalUser({
            name,
            last_name,
            dni,
            province,
            city,
            tel,
            link,
            about_me,
            gender,
            birth_date,
            auth_number,
            img,
            category_id,
          });
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { editUser };
}
