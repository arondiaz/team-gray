import { useForm } from 'react-hook-form';
import { FaArrowAltCircleLeft, FaUpload } from 'react-icons/fa';
import { Categories } from '../../../components/Categories';
import styles from './UP-profile.module.scss';
import BgOverlay from '../../../shared/BgOverlay';
import BgLayout from '../../../shared/BgLayout';
import { Link } from 'react-router-dom';

export const UPProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <>
      <div className={styles.fullcontainer}>
        <div className={styles.leftcontainer}>
          <div className={styles.formcontainer}>
            <form
              className={styles.registerform}
              onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputupload}>
                <img
                  src="src\assets\images\Signup\profile.webp"
                  width={80}
                  className={styles.imageprofile}
                  alt=""
                />

                <div className={styles.round}>
                  <input type="file" />
                  <FaUpload />
                </div>
              </div>

              <div className={styles.inputcontainer}>
                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="name">
                    Nombre *
                  </label>
                  <input
                    className={styles.inputprofile}
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
                    <div className={styles.err}>
                      <span>{errors?.name?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="phone">
                    Celular *
                  </label>
                  <input
                    className={styles.inputprofile}
                    autoComplete="off"
                    type="number"
                    {...register('phone', {
                      required: 'El celular es obligatorio',
                      pattern: {
                        value: /^[0-9]*$/,
                        message: 'El celular no es válido',
                      },
                      minLength: {
                        value: 8,
                        message: 'Longitud mínima de 8 dígitos',
                      },
                    })}
                  />
                  {errors.phone && (
                    <div className={styles.err}>
                      <span>{errors?.phone?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="surname">
                    Apellido *
                  </label>
                  <input
                    className={styles.inputprofile}
                    type="text"
                    {...register('surname', {
                      required: 'El apellido es obligatorio',
                      pattern: {
                        value: /^[A-Z]+$/i,
                        message: 'El apellido no es válido',
                      },
                    })}
                  />

                  {errors.surname && (
                    <div className={styles.err}>
                      <span>{errors?.surname?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="city">
                    Ciudad *
                  </label>
                  <input
                    className={styles.inputprofile}
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
                    <div className={styles.err}>
                      <span>{errors?.city?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="id">
                    DNI *
                  </label>
                  <input
                    className={styles.inputprofile}
                    type="text"
                    {...register('id', {
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
                  {errors.id && (
                    <div className={styles.err}>
                      <span>{errors?.id?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="province">
                    Provincia *
                  </label>
                  <input
                    className={styles.inputprofile}
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
                    <div className={styles.err}>
                      <span>{errors?.province?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="birth">
                    Fecha de nacimiento *
                  </label>
                  <input
                    className={styles.inputprofile}
                    type="date"
                    {...register('birth', {
                      required: 'La fecha de nacimiento es obligatoria',
                    })}
                  />
                  {errors.birth && (
                    <div className={styles.err}>
                      <span>{errors?.birth?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="direction">
                    Dirección *
                  </label>
                  <input
                    className={styles.inputprofile}
                    type="text"
                    {...register('direction', {
                      required: 'La dirección es obligatoria',
                    })}
                  />
                  {errors.direction && (
                    <div className={styles.err}>
                      <span>{errors?.direction?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="gender">
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
                    <option className={styles.optionsv} value="masculino">
                      Masculino
                    </option>
                    <option className={styles.optionsv} value="femenino">
                      Femenino
                    </option>
                    <option className={styles.optionsv} value="no binario">
                      No binario
                    </option>
                  </select>
                  {errors.gender && (
                    <div className={styles.err}>
                      <span>{errors?.gender?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="category">
                    Categoría *
                  </label>
                  <Categories register={register} />
                  {errors.category && (
                    <div className={styles.err}>
                      <span>{errors?.category?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="habilitation">
                    N° Habilitación
                  </label>
                  <input
                    className={styles.inputprofile}
                    type="text"
                    {...register('habilitation', {
                      minLength: {
                        value: 8,
                        message: 'Longitud mínima de 8 dígitos',
                      },
                    })}
                  />
                  {errors.habilitation && (
                    <div className={styles.err}>
                      <span>{errors?.habilitation?.message?.toString()}</span>
                    </div>
                  )}
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="link">
                    Link
                  </label>
                  <input type="text" className={styles.inputprofile} />
                </div>

                <div className={styles.inputboxprofile}>
                  <label className={styles.label} htmlFor="about">
                    Sobre mí
                  </label>
                  <input type="text" className={styles.inputprofile} />
                </div>
              </div>

              <div className={styles.backbtn}>
                <Link to="/">
                  <FaArrowAltCircleLeft />
                </Link>
              </div>

              <div className={styles.btnacceptcontainer}>
                <Link to="/trades">
                  <input
                    type="submit"
                    className={`${styles.btnaccept} ${
                      !isDirty || !isValid ? styles.btnacceptdisabled : ''
                    }`}
                    value="Aceptar"
                    disabled={!isDirty || !isValid}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right side */}
        <div className={styles.container1}>
          <div className={styles.textbox}>
            <h2 className={styles.text}>Así se muestra tu perfil</h2>
          </div>

          <div className={styles.rightbox}>
            <div className={styles.image}>
              <img
                className={styles.officeimg}
                src="src\assets\images\UP-profile\example.webp"
                alt="portada-oficio"
              />
            </div>

            <div className={styles.circlecontainer}>
              <div className={styles.circle}></div>
            </div>

            <div className={styles.box}>
              <div className={styles.section}>
                <h3 className={styles.linktext}>Link:</h3>
                <a
                  className={styles.linka}
                  href="https://github.com/labmiracle/team-gray">
                  https://github.com/labmiracle/team-gray
                </a>
              </div>
              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Nombre: <span> Jon</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Apellido: <span> Doe</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Edad:<span> 35</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Género:<span> Masculino</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  N° Habilitación: <span> E-3346743</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Celular: <span> +543464646</span>
                </h3>
              </div>

              <div className={styles.section}>
                <h3 className={styles.textright}>
                  Sobre mí:{' '}
                  <span className={styles.about}>
                    Me desempeño en el rubro desde hace 15 años, entre las
                    empresas que trabajé anteriormente se encuentran reconocidas
                    compañías del sector eléctrico. Durante mi trayectoria, he
                    adquirido una amplia experiencia en la instalación,
                    mantenimiento y reparación de sistemas eléctricos en
                    diversos entornos. He trabajado en proyectos residenciales,
                    comerciales e industriales, brindando soluciones eficientes
                    y seguras a mis clientes. Mi enfoque se basa en ofrecer un
                    servicio de calidad, cumpliendo con los...
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgLayout />
      <BgOverlay />
    </>
  );
};
