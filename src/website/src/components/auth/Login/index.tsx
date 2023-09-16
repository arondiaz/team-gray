import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import styles from './Login.module.scss';
import BgOverlay from '../../shared/BackgroundOverlay';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { request } = useAuth();

  const notification = (color: string) => ({
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    style: {
      fontWeight: 'bold',
      border: `0.1rem solid ${color}`,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const res = await request({
      email: data.email,
      password: data.password,
    });
    switch (res?.status) {
      case 200:
        toast.success('¡Inicio de sesión exitoso!', notification('green'));
        break;
      case 401:
        toast.error('Inicio de sesión no autorizado', notification('red'));
        break;
      case 404:
        toast.error(
          'El mail no existe o no fue registrado',
          notification('red')
        );
        break;
      case 403:
        toast.error('Cuenta deshabilitada', notification('red'));
        break;
      default:
        toast.error('¡Inicio de sesión incorrecto!', notification('red'));
        break;
    }
  };

  const token = localStorage.getItem('token');
  if (token) return <Navigate to="/profile" />;

  return (
    <>
      <div className={styles.loginContainer}>
        <form
          className={styles.formContainer}
          action=""
          onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.loginTitle}>Inicio sesión</p>
          <div className={styles.mailContainer}>
            <label htmlFor="email" className={styles.fieldsLabel}>
              Mail
            </label>
            <input
              autoComplete="off"
              className={`${styles.fieldsInput} ${
                errors.email ? styles.error : ''
              }`}
              type="text"
              {...register('email', {
                required: 'El mail es requerido',
                pattern: {
                  value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  message: 'El mail no es válido',
                },
              })}
            />
            {errors.email && (
              <div className={styles.errorMessage}>
                <span>{errors?.email?.message?.toString()}</span>
              </div>
            )}
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="password" className={styles.fieldsLabel}>
              Contraseña
            </label>
            <input
              type="password"
              className={`${styles.fieldsInput} ${
                errors.password ? styles.error : ''
              }`}
              {...register('password', {
                required: 'La contraseña es requerida',
                minLength: {
                  value: 8,
                  message: 'Longitud mínima 8 caracteres',
                },
                maxLength: {
                  value: 32,
                  message: 'Longitud máxima 16 caracteres',
                },
              })}
            />
            {errors.password && (
              <div className={styles.errorMessage}>
                <span>{errors?.password?.message?.toString()}</span>
              </div>
            )}
          </div>
          <div className={styles.buttonLoginContainer}>
            <button type="submit" className={styles.buttonLogin}>
              login
            </button>
          </div>
          <div>
            <Link className={styles.signUpLink} to="/signup">
              Crear cuenta
            </Link>
          </div>
          <div>
            <Link to="/" className={styles.passwordForgotLink}>
              Olvidé mi contraseña
            </Link>
          </div>

          <div className={styles.backArrowContainer}>
            <Link to="/" className={styles.backArrow}>
              <FaArrowAltCircleLeft size={30} />
            </Link>
          </div>
        </form>
      </div>
      <BgOverlay />
    </>
  );
};
