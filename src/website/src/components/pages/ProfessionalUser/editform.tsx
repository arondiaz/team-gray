import { useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import { Categories } from '../../Categories';
import { Gender } from '../../auth/Signup';
import styles from './EditForm.module.scss';

interface EditformProps {
  onCloseForm: () => void;
}

export const Editform: React.FC<EditformProps> = ({ onCloseForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmitView2 = (data: any) => {
    const editData = { ...data };
    console.log(editData);
  };

  return (
    <>
      <div className={styles.containersecondview}>
        <div className={styles.formcontainersv}>
          <form
            className={styles.registerformsv}
            onSubmit={handleSubmit(onSubmitView2)}>
            <div className={styles.inputuploadsv}>
              <img
                src="src\assets\images\Signup\profile.webp"
                width={80}
                className={styles.imageprofilesv}
                alt=""
              />

              <div className={styles.round}>
                <input type="file" />
                <FaUpload />
              </div>
            </div>

            <div className={styles.inputcontainersv}>
              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="name">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.name?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="tel">
                  Celular *
                </label>
                <input
                  autoComplete="off"
                  type="number"
                  {...register('tel', {
                    required: 'El celular es obligatorio',
                    pattern: {
                      //
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.tel?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="last_name">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.last_name?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="city">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.city?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="dni">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.dni?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="province">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.province?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="birth_date">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.birth_date?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="direction">
                  Dirección *
                </label>
                <input
                  type="text"
                  {...register('direction', {
                    required: 'La dirección es obligatoria',
                  })}
                />
                {errors.direction && (
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.direction?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="gender">
                  Género *
                </label>
                <select
                  {...register('gender', {
                    required: 'El género es obligatorio',
                  })}>
                  <option value="">Selecciona una opción</option>
                  <option value={Gender.Male}>Masculino</option>
                  <option value={Gender.Female}>Femenino</option>
                  <option value={Gender.NonBinary}>No binarie</option>
                </select>
                {errors.gender && (
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.gender?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="category_id">
                  Categoría *
                </label>
                <Categories register={register} />
                {errors.category_id && (
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.category_id?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="auth_number">
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
                  <div className={styles.errorcontainersv}>
                    <span>{errors?.auth_number?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="link">
                  Link
                </label>
                <input type="text" />
              </div>

              <div className={styles.inputboxsv}>
                <label className={styles.labelsv} htmlFor="about_me">
                  Sobre mí
                </label>
                <input type="text" />
              </div>
            </div>

            {/* <div >
                <FaArrowAltCircleLeft onClick={handleView} />
              </div> */}

            <div>
              <button
                type="button"
                className={`${styles.btnaccept} ${styles.btn} ${
                  !isDirty || !isValid ? styles.btnacceptdissabled : ''
                }`}
                disabled={!isDirty || !isValid}
                onClick={() => onSubmitView2}>
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
