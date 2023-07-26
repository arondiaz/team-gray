import { useForm } from "react-hook-form";
import { FaArrowAltCircleLeft} from "react-icons/fa";

import styles from "./Signup.module.scss";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  const password = watch("password");


  return (
        <div className={styles.container1}>
          <div className={styles.formcontainer1}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputbox1}>
                <label htmlFor="email" className={styles.label1}>
                  Mail
                </label>

                <input
                  type="text"
                  className={styles.input1}
                  {...register("email", {
                    required: "El mail es obligatorio",
                    pattern: {
                      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                      message: "El mail no es válido",
                    },
                  })}
                />
                {errors.email && (
                  <div className={styles.err1}>
                    <span>{errors?.email?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox1}>
                <label htmlFor="password" className={styles.label1}>
                  Contraseña
                </label>

                <input
                  type="password"
                  className={styles.input1}
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
                  <div className={styles.err1}>
                    <span>{errors?.password?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputbox1}>
                <label htmlFor="confirmPassword" className={styles.label1}>
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  className={styles.input1}
                  {...register("confirm", {
                    required: "Confirmar contraseña es requerido",
                    validate: (value: any) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                />
                {errors.confirm && (
                  <div className={styles.err1}>
                    <span>{errors?.confirm?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.btncontainer1}>
                <input
                  type="submit"
                  className={styles.btn1}
                  value="Siguiente"
                  disabled={!isDirty || !isValid}
                />
              </div>

              <div className={styles.backbtn1}>
                <a href="#">
                  <FaArrowAltCircleLeft />
                </a>
              </div>
            </form>
          </div>
        </div>
      )}