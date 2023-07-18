import { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import styles from './Login.module.scss';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (isValid && !errorMail && !errorPassword) {
      setForm({
        email: '',
        password: '',
      });
      setMessage(false);
    } else {
      setMessage(true);
    }
  };
  //
  const handleInputEmail = (event: any) => {
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

    console.log(form.email);
  };

  // Validate Mail

  const validation = (email: string) => {
    email = form.email;
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const val = regex.test(email);
    return val;
  };

  const handleInputPassword = (event: any) => {
    event.preventDefault();

    if (event.target.value.length === 0) {
      setErrorPassword(true);
    }
    if (event.target.value.length > 0) {
      setErrorPassword(false);
    }

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form.password);
  };

  console.log(validation(form.email));

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h2 className={styles.logintext}>Inicia sesión</h2>

        <form action='' onSubmit={handleSubmit}>
          <div className={styles.inputbox}>
            <label htmlFor='email' className={styles.label}>
              Mail
            </label>
            <input
              type='text'
              id='email'
              name='email'
              value={form.email}
              onChange={handleInputEmail}
              // onBlur={validateMail}
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
            <input type='password' id='password' name='password' value={form.password} onChange={handleInputPassword} />
            {errorPassword && (
              <div className={styles.errorpass}>
                <p>El campo Contraseña es obligatorio</p>
              </div>
            )}
            {message && (
              <div className={styles.errorpass}>
                <p>Hay campos inválidos</p>
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
  );
};
