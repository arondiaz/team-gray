import { ChangeEvent, FormEvent, useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import styles from './Login.module.scss';
import BgLayout from '../../shared/BgLayout';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (form.email.trim() === '' || form.password.trim() === '') {
      alert('Inicio de sesión incorrecto');
      return;
    }

    if (!validation(form.email)) {
      alert('Inicio de sesión incorrecto. El mail no es válido.');
      return;
    }

    if (!validationPassword(form.password)) {
      alert('Inicio de sesión incorrecto. Contraseña incorrecta.');
      return;
    }

    alert('Inicio de sesión correcto.');
  };

  const handleInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.value.length === 0) {
      setErrorMail(true);
    }
    if (event.target.value.length > 0) {
      setErrorMail(false);
    }

    if (validation(form.email)) {
      setIsValid(true);
    }

    if (!validation(form.email)) {
      setIsValid(false);
    }

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validation = (email: string) => {
    email = form.email;
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const val = regex.test(email);
    return val;
  };

  const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.value.length === 0) {
      setErrorPassword(true);
    }

    if (event.target.value.length > 0) {
      setErrorPassword(false);
    }

    if (validationPassword(form.password)) {
      setValidPass(true);
    }

    if (!validationPassword(form.password)) {
      setValidPass(false);
    }

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validationPassword = (password: string) => {
    password = form.password;
    const characters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const valpass = characters.test(password);
    return valpass;
  };

  return (
    <>
      {' '}
      <div className={styles.container}>
        <div className={styles.formcontainer}>
          <h2 className={styles.logintext}>Inicia sesión</h2>

          <form action='' onSubmit={handleSubmit}>
            <div className={styles.inputbox}>
              <label htmlFor='email' className={styles.label}>
                Mail
              </label>
              <input
                autoComplete='off'
                type='text'
                id='email'
                name='email'
                value={form.email}
                onChange={handleInputEmail}
              />
              {errorMail && (
                <div className={styles.errormail}>
                  <p>El campo mail es obligatorio</p>
                </div>
              )}

              {!errorMail && !isValid && (
                <div className={styles.errormail}>
                  <p>El mail no es válido</p>
                </div>
              )}
            </div>
            <div className={styles.inputbox}>
              <label htmlFor='password' className={styles.label}>
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={form.password}
                onChange={handleInputPassword}
              />
              {errorPassword && (
                <div className={styles.errorpass}>
                  <p>El campo Contraseña es obligatorio</p>
                </div>
              )}

              {!errorPassword && !validPass && (
                <div className={styles.errorpass}>
                  <p>Contraseña incorrecta</p>
                </div>
              )}
            </div>

            <div className={styles.forgotcontainer}>
              <a href='#'>olvidé mi contraseña </a>
            </div>

            <div className={styles.btncontainer}>
              <input type='submit' className={styles.btn} value='Login' />
            </div>

            <div className={styles.registerlink}>
              No tienes cuenta?
              <a href='#'>
                <span> Regístrate! </span>
              </a>
            </div>

            <div className={styles.backbtn}>
              <a href='#'>
                <FaArrowAltCircleLeft />
              </a>
            </div>
          </form>
        </div>
      </div>
      <BgLayout />
    </>
  );
};
