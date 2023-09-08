import { FieldValues, useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import { Categories } from '../../../Categories';
import { Gender } from '../../../auth/Signup';
import styles from './EditForm.module.scss';
import { UseEdit } from '../../../../hooks/useEdit';
import { IProfessionalUser } from '../../../../interfaces/ProfessionalUser.interface';

interface EditFormProps {
  onCloseForm: () => void;
}

export const Editform: React.FC<EditFormProps> = ({ onCloseForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const { editUser } = UseEdit();

  const onSubmitEditForm = async (data: FieldValues): Promise<void> => {
    const editData = { ...data };
    await editUser(editData as IProfessionalUser);
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
                <input type="file" {...register('img', {})} />
                <FaUpload />
              </div>
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="name">
                  Nombre *
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: 'El nombre es obligatorio',
                    pattern: {
                      value: /^[A-Z]+$/i,
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
                  Celular *
                </label>
                <input
                  autoComplete="off"
                  type="number"
                  {...register('tel', {
                    required: 'El celular es obligatorio',
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
                  Apellido *
                </label>
                <input
                  type="text"
                  {...register('last_name', {
                    required: 'El apellido es obligatorio',
                    pattern: {
                      value: /^[A-Z]+$/i,
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
                  Ciudad *
                </label>
                <input
                  type="text"
                  {...register('city', {
                    required: 'La ciudad es obligatoria',
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
                  DNI *
                </label>
                <input
                  type="text"
                  {...register('dni', {
                    required: 'El DNI es obligatorio',
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
                  Provincia *
                </label>
                <input
                  type="text"
                  {...register('province', {
                    required: 'La provincia es obligatoria',
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
                    required: 'La fecha de nacimiento es obligatoria',
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
                  Género *
                </label>
                <select
                  className={styles.select}
                  {...register('gender', {
                    required: 'El género es obligatorio',
                  })}>
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
                  Categoría *
                </label>
                <Categories register={register} />
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
                className={`${styles.btnaccept} ${styles.btn} ${
                  !isDirty || !isValid ? styles.btnacceptdissabled : ''
                }`}
                disabled={!isDirty || !isValid}>
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
