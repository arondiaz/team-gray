import { useForm } from 'react-hook-form';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Login.module.scss';
import BgLayout from '../../shared/BackgroundLayout';
import BgOverlay from '../../shared/BackgroundOverly';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { result, apiPostRequest } = useAuth();

  const onSubmit = async (data: any) => {
    console.log('Data', data);
    await apiPostRequest({
      email: data.email,
      password: data.email,
    });

    if (result?.token) {
      localStorage.setItem('token', result.token);
      //Redirect to trades after login
      //route.push("/trades")
    }
    console.log('result', result);
  };

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
      <BgLayout />
    </>
  );
};
