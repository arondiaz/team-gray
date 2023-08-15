import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';
import { BgLayout } from '../../shared/BackgroundLayout';

export const ErrorPage = () => {
  return (
    <>
      <div className={styles.errorcodecontainer}>
        <h1 className={styles.errorcode}>404</h1>
        <h2 className={styles.notfound}>Página no encontrada</h2>
        <p className={styles.notexist}>
          Te pedimos disculpas, la página que solicitaste no existe.
          <span className={styles.backhome}>Por favor vuelve al inicio </span>
        </p>
        <button className={styles.homebtn}>
          <Link to="/">HOME</Link>
        </button>
      </div>
      <BgLayout />
    </>
  );
};
