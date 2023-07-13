import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import styles from "./Login.module.scss";


export const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);


  const [isValid, setIsValid] = useState(true);
 

 
  const handleSubmit = (e:any) => {
    e.preventDefault()
    if ([mail].includes("")) {
      setErrorMail(true);

      return;
    }

    setErrorMail(false);

    if ([password].includes("")) {
      setErrorPassword(true);

      return;
    }

    setErrorPassword(false);
  };


  //Validate Mail
  const validateMail = () => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (regex.test(mail)) {
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h2>Inicia sesión</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.inputbox}>
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onBlur={validateMail}
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
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            {errorPassword && (
              <div className={styles.errorpass}>
                <p>El campo Contraseña es obligatorio</p>
              </div>
            )}
          </div>

          <div className={styles.forgotcontainer}>
            <a href="#">olvidé mi contraseña </a>
          </div>

          <div className={styles.btncontainer}>
            <input type="submit" className={styles.btn} value="Login" />
          </div>

          <div className={styles.registerlink}>
            No tienes cuenta?
            <a href="#">
              <span> Regístrate! </span>
            </a>
          </div>

          <div className={styles.backbtn}>
            <a href="#">
              <FaArrowAltCircleLeft />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
 };
