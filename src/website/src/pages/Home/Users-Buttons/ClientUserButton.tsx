import styles from '../Home.module.scss';

const ClientUserButton = () => {
	return (
		<button className={styles.button}>
			<span>
				Quiero <span className={styles.buttonTextBold}>contratar</span> un
				servicio
			</span>
			<br />
			Acceso
			<span className={`${styles.buttonTextBold} ${styles.buttonTextOcean}`}>
				{' '}
				usuarios
			</span>
		</button>
	);
};

export default ClientUserButton;
