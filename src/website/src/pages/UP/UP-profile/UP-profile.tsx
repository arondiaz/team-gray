import styles from "./UP-profile.module.scss";

export const UPProfile = () => {
  return (
    <div className={styles.fullcontainer}>
      {/* <Signup /> */}

      <div className={styles.container}>
        <h2 className={styles.text}>Así se muestra tu perfil</h2>
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
                href="https://github.com/labmiracle/team-gray"
              >
                https://github.com/labmiracle/team-gray
              </a>
            </div>
            <div className={styles.section}>
              <h3>
                Nombre: <span> Jon</span>
              </h3>
            </div>

            <div className={styles.section}>
              <h3>
                Edad:<span> 35</span>
              </h3>
            </div>

            <div className={styles.section}>
              <h3>
                Género:<span> Masculino</span>
              </h3>
            </div>

            <div className={styles.section}>
              <h3>
                Habilitación: <span> E-3346743</span>
              </h3>
            </div>

            <div className={styles.section}>
              <h3>
                Teléfono: <span> +543464646</span>
              </h3>
            </div>

            <div className={styles.section}>
              <h3>
                Sobre mí:{" "}
                <span className={styles.about}>
                  Me desempeño en el rubro desde hace 15 años, entre las
                  empresas que trabajé anteriormente se encuentran reconocidas
                  compañías del sector eléctrico. Durante mi trayectoria, he
                  adquirido una amplia experiencia en la instalación,
                  mantenimiento y reparación de sistemas eléctricos en diversos
                  entornos. He trabajado en proyectos residenciales, comerciales
                  e industriales, brindando soluciones eficientes y seguras a
                  mis clientes. Mi enfoque se basa en ofrecer un servicio de
                  calidad, cumpliendo con los...
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
