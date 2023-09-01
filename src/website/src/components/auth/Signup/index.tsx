import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import { Categories } from '../../Categories';
import { useRegister } from '../../../hooks/useRegister';

import styles from './Signup.module.scss';
import BgOverlay from '../../shared/BackgroundOverly';
import BgLayout from '../../shared/BackgroundLayout';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'Non-binary',
}

export const Signup = () => {
  const { result, makeRegister } = useRegister();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const [view1Data, setView1Data] = useState({});

  const onSubmitView1 = (data: any) => {
    setView1Data(data);
    setView1(!view1);
    setView2(!view2);
  };

  const onSubmitView2 = async (data: any) => {
    const allData = { ...view1Data, ...data };
    await makeRegister({ ...allData });
    console.log(result);
  };
  const password = watch('password');

  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);

  const handleView = () => {
    setView1(!view1);
    setView2(!view2);
  };

  return (
    <>
      {view1 && (
        <>
          <div className={styles.containerfirstview}>
            <div className={styles.formcontainerfv}>
              <form onSubmit={handleSubmit(onSubmitView1)}>
                <div className={styles.inputboxfv}>
                  <label htmlFor="email" className={styles.labelfv}>
                    Mail
                  </label>

                  <input
                    type="text"
                    className={styles.input1}
                    {...register('email', {
                      required: 'El mail es obligatorio',
                      pattern: {
                        value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                        message: 'El mail no es válido',
                      },
                    })}
                  />
                  {errors.email && (
                    <div className={styles.errorcontainerfv}>
                      <span>{errors?.email?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxfv}>
                  <label htmlFor="password" className={styles.labelfv}>
                    Contraseña
                  </label>

                  <input
                    type="password"
                    className={styles.input1}
                    {...register('password', {
                      required: 'La contraseña es requerida',
                      minLength: {
                        value: 8,
                        message: 'Longitud mínima de 8 caracteres',
                      },
                      maxLength: {
                        value: 16,
                        message: 'Longitud máxima de 16 caracteres',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className={styles.errorcontainerfv}>
                      <span>{errors?.password?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxfv}>
                  <label htmlFor="confirmPassword" className={styles.labelfv}>
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    className={styles.input1}
                    {...register('confirmPassword', {
                      required: 'Confirmar contraseña es requerido',
                      validate: (value: any) =>
                        value === password || 'Las contraseñas no coinciden',
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className={styles.errorcontainerfv}>
                      <span>
                        {errors?.confirmPassword?.message?.toString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.btncontainerfv}>
                  <button
                    type="submit"
                    className={`${styles.btnnextfv} ${
                      !isDirty || !isValid ? styles.btnnextfvdisabled : ''
                    }`}
                    disabled={!isDirty || !isValid}>
                    Siguiente
                  </button>
                </div>

                <div className={styles.backbtnfv}>
                  <Link to="/login">
                    <FaArrowAltCircleLeft />
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <BgOverlay />
          <BgLayout />
        </>
      )}

      {view2 && (
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
                      className={styles.selectsv}
                      {...register('gender', {
                        required: 'El género es obligatorio',
                      })}>
                      <option className={styles.optionsv} value="">
                        Selecciona una opción
                      </option>
                      <option className={styles.optionsv} value={Gender.Male}>
                        Masculino
                      </option>
                      <option className={styles.optionsv} value={Gender.Female}>
                        Femenino
                      </option>
                      <option
                        className={styles.optionsv}
                        value={Gender.NonBinary}>
                        No binarie
                      </option>
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
                      <div className={styles.errorcontainer}>
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
                    <input type="text" {...register('link', {})} />
                  </div>

                  <div className={styles.inputboxsv}>
                    <label className={styles.labelsv} htmlFor="about_me">
                      Sobre mí
                    </label>
                    <input type="text" {...register('about_me', {})} />
                  </div>
                </div>

                <div className={styles.backarrowcontainersv}>
                  <FaArrowAltCircleLeft onClick={handleView} />
                </div>

                <div className={styles.btnsignupcontainer}>
                  <Link to="/up-profile">
                    <button
                      type="button"
                      className={`${styles.btnsignup} ${
                        !isDirty || !isValid ? styles.btnsignupdisabled : ''
                      }`}
                      disabled={!isDirty || !isValid}
                      onClick={() => onSubmitView2(watch())}>
                      Registrarse
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <BgOverlay />
          <BgLayout />
        </>
      )}
    </>
  );
};
