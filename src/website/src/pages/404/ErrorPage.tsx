import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={styles.containererror}>
      <h1 className={styles.number}>404</h1>
      <h2 className={styles.notfound}>Página no encontrada</h2>
      <p className={styles.backhome}>
        Te pedimos disculpas, la página que solicitaste no existe.
        <span>Por favor vuelve al inicio </span>
      </p>
      <button className={styles.homebtn}>
        <a href="#">HOME</a>
      </button>
    </div>
  );
};
