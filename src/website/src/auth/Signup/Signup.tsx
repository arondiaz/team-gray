import { useForm } from "react-hook-form";
import { FaArrowAltCircleLeft, FaUpload } from "react-icons/fa";
import { useState } from "react";

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

  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);

  const handleView = () => {
    setView1(false);
    setView2(true);
  };

  return (
    <>
      {view1 && (
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
                  onClick={handleView}
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

      {view2 && (
        <div className={styles.container}>
          <div className={styles.formcontainer}>
            <form
              className={styles.registerform}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.inputupload}>
                <img
                  src="src\assets\images\Signup\profile.webp"
                  width={100}
                  className={styles.imageprofile}
                  alt=""
                />

                <div className={styles.round}>
                  <input type="file" />
                  <FaUpload />
                </div>
              </div>
              <h2>Bienvenido!</h2>

              <div className={styles.inputcontainer}>
                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="name">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "El nombre es obligatorio",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "El nombre no es válido",
                      },
                    })}
                  />
                  {errors.name && (
                    <div className={styles.err}>
                      <span>{errors?.name?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="phone">
                    Celular *
                  </label>
                  <input
                    autoComplete="off"
                    type="number"
                    {...register("phone", {
                      required: "El celular es obligatorio",
                      pattern: {
                        //
                        value: /^[0-9]*$/,
                        message: "El celular no es válido",
                      },
                      minLength: {
                        value: 8,
                        message: "Longitud mínima de 8 dígitos",
                      },
                    })}
                  />
                  {errors.phone && (
                    <div className={styles.err}>
                      <span>{errors?.phone?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="surname">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: "El apellido es obligatorio",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "El apellido no es válido",
                      },
                    })}
                  />

                  {errors.surname && (
                    <div className={styles.err}>
                      <span>{errors?.surname?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="city">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    {...register("city", {
                      required: "La ciudad es obligatoria",
                      pattern: {
                        value: /^[A-Z\s]+$/i,
                        message: "La ciudad no es válida",
                      },
                    })}
                  />
                  {errors.city && (
                    <div className={styles.err}>
                      <span>{errors?.city?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="id">
                    DNI *
                  </label>
                  <input
                    type="text"
                    {...register("id", {
                      required: "El DNI es obligatorio",
                      pattern: {
                        ////
                        value: /^[0-9]+$/i,
                        message: "El DNI no es válido",
                      },
                      minLength: {
                        value: 8,
                        message: "Longitud mínima de 8 dígitos",
                      },
                    })}
                  />
                  {errors.id && (
                    <div className={styles.err}>
                      <span>{errors?.id?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="province">
                    Provincia *
                  </label>
                  <input
                    type="text"
                    {...register("province", {
                      required: "La provincia es obligatoria",
                      pattern: {
                        value: /^[A-Z ]+$/i,
                        message: "La provincia no es válida",
                      },
                    })}
                  />
                  {errors.province && (
                    <div className={styles.err}>
                      <span>{errors?.province?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="genere">
                    Género *
                  </label>
                  <input
                    type="text"
                    {...register("genere", {
                      required: "El género es obligatorio",
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: "El género no es válido",
                      },
                    })}
                  />
                  {errors.genere && (
                    <div className={styles.err}>
                      <span>{errors?.genere?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="link">
                    Link
                  </label>
                  <input type="text" />
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="birth">
                    Fecha de nacimiento *
                  </label>
                  <input
                    type="date"
                    {...register("birth", {
                      required: "La fecha de nacimiento es obligatoria",
                    })}
                  />
                  {errors.birth && (
                    <div className={styles.err}>
                      <span>{errors?.birth?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="habilitation">
                    N° Habilitación *
                  </label>
                  <input
                    type="text"
                    {...register("habilitation", {
                      required: "El número de habilitación es obligatorio",
                      minLength: {
                        value: 8,
                        message: "Longitud mínima de 8 dígitos",
                      },
                    })}
                  />
                  {errors.habilitation && (
                    <div className={styles.err}>
                      <span>{errors?.habilitation?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="direction">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    {...register("direction", {
                      required: "La dirección es obligatoria",
                    })}
                  />
                  {errors.direction && (
                    <div className={styles.err}>
                      <span>{errors?.direction?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="about">
                    Sobre mí
                  </label>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.backbtn}>
                <a href="#">
                  <FaArrowAltCircleLeft />
                </a>
              </div>

              <div className={styles.btncontainer}>
                <input
                  type="submit"
                  className={styles.btn}
                  value="Registrarse"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
