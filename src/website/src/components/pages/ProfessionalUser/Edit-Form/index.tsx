import { FieldValues, useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import { CategoriesEditForm } from '../../../CategoriesEditForm';
import { Gender } from '../../../auth/Signup';
import styles from './EditForm.module.scss';
import { UseEdit } from '../../../../hooks/useEdit';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';
import { toast } from 'react-toastify';

interface EditFormProps {
  onCloseForm: () => void;
}

const notification = (color: string) => ({
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000,
  style: {
    fontWeight: 'bold',
    border: `0.1rem solid ${color}`,
  },
});

export const Editform: React.FC<EditFormProps> = ({ onCloseForm }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue('img', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { editUser } = UseEdit();

  const onSubmitEditForm = async (data: FieldValues): Promise<void> => {
    const editData = { ...data };
    console.log(typeof data.img);
    console.log(typeof data.tel);
    const response = await editUser(editData as IProfessionalUser);
    // todo: take response to show modal
    console.log(response);

    switch (response?.status) {
      case 200:
        toast.success('¡Datos editados correctamente!', notification('green'));
        break;
      case 500:
        toast.error(
          'Error al editar perfil, por favor inténtelo de nuevo',
          notification('red')
        );
        break;
      default:
        toast.error('Error al editar perfil', notification('red'));
        break;
    }
  };

  return (
    <>
      <div className={styles.containeredit}>
        <div className={styles.formeditcontainer}>
          <form
            className={styles.editform}
            onSubmit={handleSubmit(onSubmitEditForm)}>
            <div className={styles.inputupload}>
              <img
                src="src\assets\images\Signup\profile.webp"
                width={80}
                className={styles.imageprofile}
                alt=""
              />

              <div className={styles.round}>
                <input type="file" onChange={handleFileChange} />
                <FaUpload />
              </div>
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  {...register('name', {
                    pattern: {
                      value: /^[A-Za-z]+( [A-Za-z]+)*$/,
                      message: 'El nombre no es válido',
                    },
                  })}
                />
                {errors.name && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.name?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="tel">
                  Celular
                </label>
                <input
                  autoComplete="off"
                  type="number"
                  {...register('tel', {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'El celular no es válido',
                    },
                    minLength: {
                      value: 8,
                      message: 'Longitud mínima de 8 dígitos',
                    },
                  })}
                />
                {errors.tel && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.tel?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="last_name">
                  Apellido
                </label>
                <input
                  type="text"
                  {...register('last_name', {
                    pattern: {
                      value: /^[A-Za-z]+( [A-Za-z]+)*$/,
                      message: 'El apellido no es válido',
                    },
                  })}
                />

                {errors.last_name && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.last_name?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="city">
                  Ciudad
                </label>
                <input
                  type="text"
                  {...register('city', {
                    pattern: {
                      value: /^[A-Z\s]+$/i,
                      message: 'La ciudad no es válida',
                    },
                  })}
                />
                {errors.city && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.city?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="dni">
                  DNI
                </label>
                <input
                  type="text"
                  {...register('dni', {
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'El DNI no es válido',
                    },
                    minLength: {
                      value: 8,
                      message: 'Longitud mínima de 8 dígitos',
                    },
                  })}
                />
                {errors.dni && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.dni?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="province">
                  Provincia
                </label>
                <input
                  type="text"
                  {...register('province', {
                    pattern: {
                      value: /^[A-Z ]+$/i,
                      message: 'La provincia no es válida',
                    },
                  })}
                />
                {errors.province && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.province?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="birth_date">
                  Fecha de nacimiento *
                </label>
                <input
                  type="date"
                  {...register('birth_date', {
                    validate: (value: any) => {
                      const birthDate = new Date(value);
                      const today = new Date();

                      const minYears = 18;
                      const minAgeDate = new Date(
                        today.getFullYear() - minYears,
                        today.getMonth(),
                        today.getDate()
                      );

                      const maxYears = 100;
                      const maxAgeDate = new Date(
                        today.getFullYear() - maxYears,
                        today.getMonth(),
                        today.getDate()
                      );

                      if (birthDate > minAgeDate) {
                        return 'Debes ser mayor de 18 años';
                      }
                      if (birthDate < maxAgeDate) {
                        return 'Fecha no válida';
                      }
                      return true;
                    },
                  })}
                />
                {errors.birth_date && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.birth_date?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="gender">
                  Género
                </label>
                <select className={styles.select} {...register('gender', {})}>
                  <option value="">Selecciona una opción</option>
                  <option value={Gender.Male}>Masculino</option>
                  <option value={Gender.Female}>Femenino</option>
                  <option value={Gender.NonBinary}>No binarie</option>
                </select>
                {errors.gender && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.gender?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="category_id">
                  Categoría
                </label>
                <CategoriesEditForm register={register} />
                {errors.category_id && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.category_id?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="auth_number">
                  N° Habilitación
                </label>
                <input
                  type="text"
                  {...register('auth_number', {
                    minLength: {
                      value: 8,
                      message: 'Longitud mínima de 8 dígitos',
                    },
                  })}
                />
                {errors.auth_number && (
                  <div className={styles.errorcontainer}>
                    <span>{errors?.auth_number?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="link">
                  Link
                </label>
                <input type="text" {...register('link', {})} />
              </div>

              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="about_me">
                  Sobre mí
                </label>
                <input type="text" {...register('about_me', {})} />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`{styles.btnaccept} ${styles.btn}`}>
                Aceptar
              </button>
            </div>
            <button
              className={`${styles.btnclose} ${styles.btn}`}
              onClick={onCloseForm}>
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
