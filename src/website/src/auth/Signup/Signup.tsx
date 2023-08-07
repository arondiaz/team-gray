import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
                    <span className={styles.errorspan1}>
                      {" "}
                      {errors?.email?.message?.toString()}
                    </span>
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
                    <span className={styles.errorspan1}>
                      {errors?.password?.message?.toString()}
                    </span>
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
                    <span className={styles.errorspan1}>
                      {errors?.confirm?.message?.toString()}
                    </span>
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
                <Link to="/login">
                  <FaArrowAltCircleLeft />
                </Link>
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
                      <span className={styles.errorspan}>
                        {errors?.name?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.phone?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.surname?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.city?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.id?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.province?.message?.toString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="genere">
                    Género *
                  </label>
                  <select
                    className={styles.select}
                    {...register("genere", {
                      required: "El género es requerido",
                    })}
                  >
                    <option className={styles.option} value="">
                      Selecciona una opción
                    </option>
                    <option className={styles.option} value="masculino">
                      Masculino
                    </option>
                    <option className={styles.option} value="femenino">
                      Femenino
                    </option>
                    <option className={styles.option} value="no binario">
                      No binario
                    </option>
                  </select>

                  {errors.genere && (
                    <div className={styles.err}>
                      <span className={styles.errorspan}>
                        {errors?.genere?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.direction?.message?.toString()}
                      </span>
                    </div>
                  )}
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
                      <span className={styles.errorspan}>
                        {errors?.birth?.message?.toString()}
                      </span>
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
                      <span className={styles.errorspan}>
                        {errors?.habilitation?.message?.toString()}
                      </span>
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
                  <label className={styles.label} htmlFor="category">
                    Categoría *
                  </label>
                  <select
                    className={styles.select}
                    {...register("category", {
                      required: "La categoría es requerida",
                    })}
                  >
                    <option className={styles.option} value="">
                      Selecciona una opción
                    </option>
                    <option className={styles.option} value="electricista">
                      Electricista
                    </option>
                    <option className={styles.option} value="plomero">
                      Plomero
                    </option>
                    <option className={styles.option} value="carpintero">
                      Carpintero
                    </option>
                    <option className={styles.option} value="pintor">
                      Pintor
                    </option>
                    <option className={styles.option} value="albañil">
                      Albañil
                    </option>
                    <option className={styles.option} value="gasista">
                      Gasista
                    </option>
                    <option className={styles.option} value="jardinero">
                      Jardinero
                    </option>
                    <option
                      className={styles.option}
                      value="tecnico en aire acondicionado"
                    >
                      Técnico en aire acondicionado
                    </option>
                    <option className={styles.option} value="cerrajero">
                      Cerrajero
                    </option>
                    <option className={styles.option} value="techador">
                      Techador
                    </option>
                    <option
                      className={styles.option}
                      value="instalador de sistema de seguridad"
                    >
                      Instalador de sistema de seguridad
                    </option>
                    <option className={styles.option} value="vidriero">
                      Vidriero
                    </option>
                    <option
                      className={styles.option}
                      value="instalador de pisos"
                    >
                      Instalador de pisos
                    </option>
                    <option className={styles.option} value="fontanero">
                      Fontanero
                    </option>
                    <option
                      className={styles.option}
                      value="remodelador de interiores"
                    >
                      Remodelador de interiores
                    </option>
                    <option className={styles.option} value="soporte tecnico">
                      Soporte Técnico en infórmatica
                    </option>
                  </select>
                  {errors.category && (
                    <div className={styles.err}>
                      <span className={styles.errorspan}>
                        {errors?.category?.message?.toString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.inputbox}>
                  <label className={styles.label} htmlFor="about">
                    Sobre mí
                  </label>
                  <input type="text" className={styles.aboutme} />
                </div>
              </div>

              <div className={styles.backbtn}>
                <Link to="/login">
                  <FaArrowAltCircleLeft />
                </Link>
              </div>

              <div className={styles.btncontainer}>
                <Link to="/up-profile">
                  <input
                    type="submit"
                    className={styles.btn}
                    value="Registrarse"
                    disabled={!isDirty || !isValid}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
