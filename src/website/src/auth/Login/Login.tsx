import { useForm } from "react-hook-form";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./Login.module.scss";
import BgLayout from "../../shared/BgLayout";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.formcontainer}>
          <h2 className={styles.logintext}>Inicia sesión</h2>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputbox}>
              <label htmlFor="email" className={styles.label}>
                Mail
              </label>
              <input
                autoComplete="off"
                type="text"
                {...register("email", {
                  required: "El mail es obligatorio",
                  pattern: {
                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    message: "El mail no es válido",
                  },
                })}
              />
              {errors.email && (
                <div className={styles.errormail}>
                  <span>{errors?.email?.message?.toString()}</span>
                </div>
              )}
            </div>
            <div className={styles.inputbox}>
              <label htmlFor="password" className={styles.label}>
                Contraseña
              </label>
              <input
                type="password"
                className={styles.input}
                {...register("password", {
                  required: "La contraseña es requerida",
                  minLength: {
                    value: 8,
                    message: "Longitud mínima de 8 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "Longitud máxima de 16 caracteres",
                  },
                })}
              />
              {errors.password && (
                <div className={styles.errorpass}>
                  <span>{errors?.password?.message?.toString()}</span>
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
      <BgLayout />
    </>
  );
};
